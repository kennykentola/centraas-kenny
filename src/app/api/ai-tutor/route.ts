import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

type GeminiCandidate = {
    content?: {
        parts?: { text?: string }[];
    };
};

type GeminiResponse = {
    candidates?: GeminiCandidate[];
    error?: {
        message?: string;
    };
};

export async function POST(request: NextRequest) {
    try {
        const { question } = await request.json();

        if (typeof question !== 'string' || question.trim().length === 0) {
            return NextResponse.json({ error: 'Question is required.' }, { status: 400 });
        }

        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            return NextResponse.json(
                {
                    answer: 'AI tutor is not available yet. Please check back later.',
                    fallback: true,
                },
                { status: 503 },
            );
        }

        const systemInstruction =
            'You are a safe educational assistant for Centraas, a learning platform for AAS and centrifuge machines. Answer in simple student-friendly language. Include safety reminders when relevant. Do not replace SOPs, manufacturer manuals, or qualified laboratory supervision.';

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                {
                                    text: `${systemInstruction}\n\nStudent question: ${question}`,
                                },
                            ],
                        },
                    ],
                    generationConfig: {
                        temperature: 0.3,
                        maxOutputTokens: 700,
                    },
                }),
            },
        );

        const data = (await response.json()) as GeminiResponse;

        if (!response.ok) {
            return NextResponse.json(
                {
                    answer: `Gemini API error: ${data.error?.message ?? 'Unable to get an answer.'}`,
                    fallback: true,
                },
                { status: 502 },
            );
        }

        const answer = data.candidates?.[0]?.content?.parts?.map((part) => part.text ?? '').join('\n').trim();

        if (!answer) {
            return NextResponse.json(
                {
                    answer: 'Gemini returned an empty answer. Try asking again with more detail.',
                    fallback: true,
                },
                { status: 502 },
            );
        }

        const supabase = await createClient();
        const { data: sessionData } = await supabase.auth.getSession();
        const userId = sessionData.session?.user.id;

        if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY && userId) {
            await supabase.from('ai_tutor_messages').insert({
                user_id: userId,
                question,
                answer,
            });
        }

        return NextResponse.json({ answer });
    } catch {
        return NextResponse.json(
            {
                answer: 'Unable to contact Gemini right now. Try again in a moment.',
                fallback: true,
            },
            { status: 500 },
        );
    }
}
