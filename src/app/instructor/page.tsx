'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { Award, CheckCircle2, Pencil, PlusCircle, ShieldCheck, Trash2, Users, XCircle, LayoutDashboard, FileText, FileBadge, BookOpen, PenTool } from 'lucide-react';

// --- TYPES ---
type Profile = {
    id: string;
    full_name: string | null;
    role: 'student' | 'instructor' | 'admin';
    institution: string | null;
};

type ProgressRow = {
    rowKey: string;
    studentName: string | null;
    module: string;
    activityLabel: string;
    activityType: 'lesson' | 'worksheet' | 'quiz' | 'safety' | 'other';
    completed: boolean;
    score: number | null;
    updatedAt: string;
};

type QuizQuestionRow = {
    id: string;
    module: 'aas' | 'centrifuge';
    question: string;
    options: string[];
    correct_answer: number;
    explanation: string | null;
    published: boolean;
};

type LessonRow = {
    id: string;
    module: 'aas' | 'centrifuge';
    title: string;
    description: string;
    objectives: string[];
    safety_notes: string[];
    content: string | null;
    published: boolean;
};

type WorksheetTemplateRow = {
    id: string;
    lesson_id: string | null;
    module: 'aas' | 'centrifuge';
    title: string;
    tasks: string[];
    published: boolean;
};

type AssignmentRow = {
    id: string;
    module: 'aas' | 'centrifuge';
    title: string;
    description: string;
    due_date: string | null;
    published: boolean;
};

type WorksheetSubmissionRow = {
    id: string;
    user_id: string;
    studentName: string | null;
    module: 'aas' | 'centrifuge';
    worksheet_type: string;
    score: number | null;
    feedback: string | null;
    updatedAt: string;
};

// --- FORMS ---
type QuizFormState = {
    editingId: string | null;
    module: 'aas' | 'centrifuge';
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    published: boolean;
};

const emptyQuizForm: QuizFormState = {
    editingId: null,
    module: 'aas',
    question: '',
    options: ['', '', '', ''],
    correctAnswer: 0,
    explanation: '',
    published: true,
};

type LessonFormState = {
    editingId: string | null;
    module: 'aas' | 'centrifuge';
    title: string;
    description: string;
    content: string;
    objectivesText: string;
    safetyNotesText: string;
    published: boolean;
};

const emptyLessonForm: LessonFormState = {
    editingId: null,
    module: 'aas',
    title: '',
    description: '',
    content: '',
    objectivesText: '',
    safetyNotesText: '',
    published: true,
};

// --- UTILS ---
function parsePagePath(pagePath: string): { label: string; type: ProgressRow['activityType'] } {
    if (pagePath.endsWith('-worksheet')) {
        const base = pagePath.replace('-worksheet', '');
        const name = base.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
        return { label: `Worksheet – ${name}`, type: 'worksheet' };
    }
    if (pagePath.endsWith('-quiz')) {
        return { label: 'Quiz assessment', type: 'quiz' };
    }
    if (pagePath.endsWith('-safety')) {
        const base = pagePath.replace('-safety', '');
        const name = base.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
        return { label: `Safety checklist – ${name}`, type: 'safety' };
    }
    const name = pagePath.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    return { label: `Lesson – ${name}`, type: 'lesson' };
}

function ActivityBadge({ type }: { type: ProgressRow['activityType'] }) {
    const map: Record<ProgressRow['activityType'], { label: string; className: string }> = {
        lesson: { label: 'Lesson', className: 'bg-indigo-100 text-indigo-700' },
        worksheet: { label: 'Worksheet', className: 'bg-emerald-100 text-emerald-700' },
        quiz: { label: 'Quiz', className: 'bg-amber-100 text-amber-700' },
        safety: { label: 'Safety', className: 'bg-rose-100 text-rose-700' },
        other: { label: 'Other', className: 'bg-slate-100 text-slate-600' },
    };
    const { label, className } = map[type];
    return (
        <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-bold ${className}`}>
            {label}
        </span>
    );
}

// --- MAIN COMPONENT ---
export default function InstructorPage() {
    const supabase = createClient();
    const [profile, setProfile] = useState<Profile | null>(null);
    const [loading, setLoading] = useState(!!supabase);
    const [activeTab, setActiveTab] = useState<'overview' | 'students' | 'quizzes' | 'lessons' | 'worksheets' | 'assignments' | 'submissions'>('overview');

    // Data lists
    const [rows, setRows] = useState<ProgressRow[]>([]);
    const [quizQuestions, setQuizQuestions] = useState<QuizQuestionRow[]>([]);
    const [lessons, setLessons] = useState<LessonRow[]>([]);
    const [worksheetTemplates, setWorksheetTemplates] = useState<WorksheetTemplateRow[]>([]);
    const [assignments, setAssignments] = useState<AssignmentRow[]>([]);
    const [submissions, setSubmissions] = useState<WorksheetSubmissionRow[]>([]);

    // Forms
    const [quizForm, setQuizForm] = useState<QuizFormState>(emptyQuizForm);
    const [quizMessage, setQuizMessage] = useState('');
    const [savingQuiz, setSavingQuiz] = useState(false);

    const [lessonForm, setLessonForm] = useState<LessonFormState>(emptyLessonForm);
    const [lessonMessage, setLessonMessage] = useState('');
    const [savingLesson, setSavingLesson] = useState(false);

    const [worksheetForm, setWorksheetForm] = useState<{
        editingId: string | null;
        lesson_id: string | null;
        module: 'aas' | 'centrifuge';
        title: string;
        tasksText: string;
        published: boolean;
    }>({
        editingId: null,
        lesson_id: null,
        module: 'aas',
        title: '',
        tasksText: '',
        published: true,
    });
    const [worksheetMessage, setWorksheetMessage] = useState('');
    const [savingWorksheet, setSavingWorksheet] = useState(false);

    const [assignmentForm, setAssignmentForm] = useState<{
        editingId: string | null;
        module: 'aas' | 'centrifuge';
        title: string;
        description: string;
        due_date: string;
        published: boolean;
    }>({
        editingId: null,
        module: 'aas',
        title: '',
        description: '',
        due_date: '',
        published: true,
    });
    const [assignmentMessage, setAssignmentMessage] = useState('');
    const [savingAssignment, setSavingAssignment] = useState(false);

    useEffect(() => {
        if (!supabase) return;

        const loadDashboard = async () => {
            const { data: sessionData } = await supabase.auth.getSession();
            const userId = sessionData.session?.user.id;

            if (!userId) {
                setLoading(false);
                return;
            }

            const { data: profileData } = await supabase.from('profiles').select('*').eq('id', userId).single();
            setProfile(profileData);

            if (profileData && ['instructor', 'admin'].includes(profileData.role)) {
                // Fetch progress
                const { data: progressData } = await supabase
                    .from('learning_progress')
                    .select('id, user_id, profiles(full_name), module, page_path, completed, score, updated_at')
                    .order('updated_at', { ascending: false })
                    .limit(200);

                if (progressData) {
                    const mapped: ProgressRow[] = progressData.map((row: any) => {
                        const { label, type } = parsePagePath(row.page_path as string);
                        return {
                            rowKey: row.id,
                            studentName: row.profiles?.full_name ?? null,
                            module: row.module,
                            activityLabel: label,
                            activityType: type,
                            completed: row.completed,
                            score: typeof row.score === 'number' ? row.score : null,
                            updatedAt: row.updated_at,
                        };
                    });
                    setRows(mapped);
                }

                // Fetch Quiz Questions
                const { data: questionData } = await supabase.from('quiz_questions').select('*').order('created_at', { ascending: false });
                if (questionData) setQuizQuestions(questionData);

                // Fetch Lessons
                const { data: lessonData } = await supabase.from('lessons').select('*').order('created_at', { ascending: false });
                if (lessonData) setLessons(lessonData);

                // Fetch Worksheet Templates
                const { data: wtData } = await supabase.from('worksheet_templates').select('*').order('created_at', { ascending: false });
                if (wtData) setWorksheetTemplates(wtData);

                // Fetch Assignments
                const { data: assignmentData } = await supabase.from('assignments').select('*').order('created_at', { ascending: false });
                if (assignmentData) setAssignments(assignmentData);

                // Fetch Submissions
                const { data: submissionData } = await supabase
                    .from('worksheet_submissions')
                    .select('id, user_id, profiles(full_name), module, worksheet_type, score, feedback, updated_at')
                    .order('updated_at', { ascending: false });

                if (submissionData) {
                    setSubmissions(submissionData.map((row: any) => ({
                        id: row.id,
                        user_id: row.user_id,
                        studentName: row.profiles?.full_name ?? null,
                        module: row.module,
                        worksheet_type: row.worksheet_type,
                        score: typeof row.score === 'number' ? row.score : null,
                        feedback: row.feedback,
                        updatedAt: row.updated_at,
                    })));
                }
            }

            setLoading(false);
        };

        loadDashboard();
    }, [supabase]);

    if (!supabase) {
        return (
            <div className="mx-auto max-w-5xl px-4 py-10">
                <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h1 className="text-3xl font-black text-slate-950">Instructor dashboard is not configured yet</h1>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">Add Supabase environment variables in Netlify, then redeploy.</p>
                </section>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="mx-auto max-w-5xl px-4 py-10">
                <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-indigo-600 border-t-transparent" />
                        Loading instructor dashboard…
                    </div>
                </section>
            </div>
        );
    }

    if (!profile || !['instructor', 'admin'].includes(profile.role)) {
        return (
            <div className="mx-auto max-w-5xl px-4 py-10">
                <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h1 className="text-3xl font-black text-slate-950">Instructor access required</h1>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                        Your account role is <strong>{profile?.role ?? 'unknown'}</strong>. Ask an admin to update your profile role to instructor or admin.
                    </p>
                    <Link href="/admin" className="mt-4 inline-flex rounded-2xl bg-slate-900 px-5 py-3 text-sm font-bold text-white">
                        Open admin dashboard
                    </Link>
                </section>
            </div>
        );
    }

    // --- Stats ---
    const uniqueStudents = new Set(rows.map((row) => row.studentName).filter(Boolean)).size;
    const completedActivities = rows.filter((row) => row.completed).length;
    const quizRows = rows.filter((row) => row.activityType === 'quiz' && row.score !== null);
    const averageScore = quizRows.length > 0 ? (quizRows.reduce((sum, row) => sum + (row.score ?? 0), 0) / quizRows.length).toFixed(1) : '—';
    const safetyCompleted = rows.filter((row) => row.activityType === 'safety' && row.completed).length;

    // --- Quiz Logic ---
    const resetQuizForm = () => { setQuizForm(emptyQuizForm); setQuizMessage(''); };
    const saveQuizQuestion = async () => {
        const cleanOptions = quizForm.options.map((option) => option.trim()).filter(Boolean);
        if (!quizForm.question.trim() || cleanOptions.length < 2) {
            setQuizMessage('Add a question and at least two answer options.'); return;
        }
        if (quizForm.correctAnswer < 0 || quizForm.correctAnswer >= cleanOptions.length) {
            setQuizMessage('Select a correct answer that matches one of the options.'); return;
        }

        setSavingQuiz(true); setQuizMessage('');
        const payload = {
            module: quizForm.module,
            question: quizForm.question.trim(),
            options: cleanOptions,
            correct_answer: quizForm.correctAnswer,
            explanation: quizForm.explanation.trim() || null,
            published: quizForm.published,
        };

        const result = quizForm.editingId
            ? await supabase.from('quiz_questions').update(payload).eq('id', quizForm.editingId).select('*').single()
            : await supabase.from('quiz_questions').insert({ ...payload, created_by: profile.id }).select('*').single();

        if (result.error) setQuizMessage(result.error.message);
        else if (result.data) {
            setQuizQuestions((current) => [result.data, ...current.filter((item) => item.id !== result.data.id)]);
            resetQuizForm(); setQuizMessage('Quiz question saved.');
        }
        setSavingQuiz(false);
    };

    const editQuizQuestion = (question: QuizQuestionRow) => {
        setQuizForm({
            editingId: question.id,
            module: question.module,
            question: question.question,
            options: [...question.options, '', '', '', ''].slice(0, Math.max(4, question.options.length)),
            correctAnswer: question.correct_answer,
            explanation: question.explanation ?? '',
            published: question.published,
        });
        setQuizMessage('');
    };

    const toggleQuizPublished = async (question: QuizQuestionRow) => {
        await supabase.from('quiz_questions').update({ published: !question.published }).eq('id', question.id);
        setQuizQuestions((current) => current.map((item) => item.id === question.id ? { ...item, published: !item.published } : item));
    };

    const deleteQuizQuestion = async (questionId: string) => {
        await supabase.from('quiz_questions').delete().eq('id', questionId);
        setQuizQuestions((current) => current.filter((item) => item.id !== questionId));
        if (quizForm.editingId === questionId) resetQuizForm();
    };

    // --- Lesson Logic ---
    const resetLessonForm = () => { setLessonForm(emptyLessonForm); setLessonMessage(''); };
    const saveLesson = async () => {
        if (!lessonForm.title.trim()) { setLessonMessage('Title is required.'); return; }
        setSavingLesson(true); setLessonMessage('');

        const objectives = lessonForm.objectivesText.split('\n').map(l => l.trim()).filter(Boolean);
        const safety_notes = lessonForm.safetyNotesText.split('\n').map(l => l.trim()).filter(Boolean);

        const payload = {
            module: lessonForm.module,
            title: lessonForm.title.trim(),
            description: lessonForm.description.trim() || null,
            content: lessonForm.content.trim() || null,
            objectives,
            safety_notes,
            published: lessonForm.published,
        };

        const result = lessonForm.editingId
            ? await supabase.from('lessons').update(payload).eq('id', lessonForm.editingId).select('*').single()
            : await supabase.from('lessons').insert({ ...payload, created_by: profile.id }).select('*').single();

        if (result.error) setLessonMessage(result.error.message);
        else if (result.data) {
            setLessons((current) => [result.data, ...current.filter((item) => item.id !== result.data.id)]);
            resetLessonForm(); setLessonMessage('Lesson saved.');
        }
        setSavingLesson(false);
    };

    const editLesson = (lesson: LessonRow) => {
        setLessonForm({
            editingId: lesson.id,
            module: lesson.module,
            title: lesson.title,
            description: lesson.description || '',
            content: lesson.content || '',
            objectivesText: lesson.objectives?.join('\n') || '',
            safetyNotesText: lesson.safety_notes?.join('\n') || '',
            published: lesson.published,
        });
        setLessonMessage('');
    };

    const toggleLessonPublished = async (lesson: LessonRow) => {
        await supabase.from('lessons').update({ published: !lesson.published }).eq('id', lesson.id);
        setLessons((current) => current.map((item) => item.id === lesson.id ? { ...item, published: !item.published } : item));
    };

    const deleteLesson = async (lessonId: string) => {
        await supabase.from('lessons').delete().eq('id', lessonId);
        setLessons((current) => current.filter((item) => item.id !== lessonId));
        if (lessonForm.editingId === lessonId) resetLessonForm();
    };

    // --- Worksheet Logic ---
    const resetWorksheetForm = () => {
        setWorksheetForm({ editingId: null, lesson_id: null, module: 'aas', title: '', tasksText: '', published: true });
        setWorksheetMessage('');
    };

    const saveWorksheet = async () => {
        if (!worksheetForm.title.trim()) { setWorksheetMessage('Title is required.'); return; }
        setSavingWorksheet(true); setWorksheetMessage('');

        const tasks = worksheetForm.tasksText.split('\n').map(l => l.trim()).filter(Boolean);

        const payload = {
            lesson_id: worksheetForm.lesson_id || null,
            module: worksheetForm.module,
            title: worksheetForm.title.trim(),
            tasks,
            published: worksheetForm.published,
        };

        const result = worksheetForm.editingId
            ? await supabase.from('worksheet_templates').update(payload).eq('id', worksheetForm.editingId).select('*').single()
            : await supabase.from('worksheet_templates').insert({ ...payload, created_by: profile.id }).select('*').single();

        if (result.error) setWorksheetMessage(result.error.message);
        else if (result.data) {
            setWorksheetTemplates((current) => [result.data, ...current.filter((item) => item.id !== result.data.id)]);
            resetWorksheetForm(); setWorksheetMessage('Worksheet template saved.');
        }
        setSavingWorksheet(false);
    };

    const editWorksheet = (wt: WorksheetTemplateRow) => {
        setWorksheetForm({
            editingId: wt.id,
            lesson_id: wt.lesson_id,
            module: wt.module,
            title: wt.title,
            tasksText: wt.tasks?.join('\n') || '',
            published: wt.published,
        });
        setWorksheetMessage('');
    };

    const toggleWorksheetPublished = async (wt: WorksheetTemplateRow) => {
        await supabase.from('worksheet_templates').update({ published: !wt.published }).eq('id', wt.id);
        setWorksheetTemplates((current) => current.map((item) => item.id === wt.id ? { ...item, published: !item.published } : item));
    };

    const deleteWorksheet = async (wtId: string) => {
        await supabase.from('worksheet_templates').delete().eq('id', wtId);
        setWorksheetTemplates((current) => current.filter((item) => item.id !== wtId));
        if (worksheetForm.editingId === wtId) resetWorksheetForm();
    };

    // --- Assignment Logic ---
    const resetAssignmentForm = () => {
        setAssignmentForm({ editingId: null, module: 'aas', title: '', description: '', due_date: '', published: true });
        setAssignmentMessage('');
    };

    const saveAssignment = async () => {
        if (!assignmentForm.title.trim()) { setAssignmentMessage('Title is required.'); return; }
        setSavingAssignment(true); setAssignmentMessage('');

        const payload = {
            module: assignmentForm.module,
            title: assignmentForm.title.trim(),
            description: assignmentForm.description.trim() || null,
            due_date: assignmentForm.due_date || null,
            published: assignmentForm.published,
        };

        const result = assignmentForm.editingId
            ? await supabase.from('assignments').update(payload).eq('id', assignmentForm.editingId).select('*').single()
            : await supabase.from('assignments').insert({ ...payload, created_by: profile.id }).select('*').single();

        if (result.error) setAssignmentMessage(result.error.message);
        else if (result.data) {
            setAssignments((current) => [result.data, ...current.filter((item) => item.id !== result.data.id)]);
            resetAssignmentForm(); setAssignmentMessage('Assignment saved.');
        }
        setSavingAssignment(false);
    };

    const editAssignment = (a: AssignmentRow) => {
        setAssignmentForm({
            editingId: a.id,
            module: a.module,
            title: a.title,
            description: a.description || '',
            due_date: a.due_date ? new Date(a.due_date).toISOString().slice(0, 16) : '',
            published: a.published,
        });
        setAssignmentMessage('');
    };

    const toggleAssignmentPublished = async (a: AssignmentRow) => {
        await supabase.from('assignments').update({ published: !a.published }).eq('id', a.id);
        setAssignments((current) => current.map((item) => item.id === a.id ? { ...item, published: !item.published } : item));
    };

    const deleteAssignment = async (aId: string) => {
        await supabase.from('assignments').delete().eq('id', aId);
        setAssignments((current) => current.filter((item) => item.id !== aId));
        if (assignmentForm.editingId === aId) resetAssignmentForm();
    };

    // --- Navigation Tabs ---
    const tabs = [
        { id: 'overview', label: 'Overview', icon: LayoutDashboard },
        { id: 'students', label: 'Students', icon: Users },
        { id: 'quizzes', label: 'Quizzes', icon: PenTool },
        { id: 'lessons', label: 'Lessons', icon: BookOpen },
        { id: 'worksheets', label: 'Worksheets', icon: FileText },
        { id: 'assignments', label: 'Assignments', icon: FileBadge },
        { id: 'submissions', label: 'Submissions', icon: CheckCircle2 },
    ] as const;

    return (
        <div className="space-y-6">
            <section className="rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-600 via-indigo-700 to-cyan-600 p-6 text-white shadow-sm">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-100">Instructor dashboard</p>
                        <h1 className="mt-2 text-3xl font-black">Content & Progress Management</h1>
                        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-indigo-50">
                            Manage course modules, quizzes, and lessons while monitoring live student progress.
                        </p>
                    </div>
                    <Award className="h-10 w-10 text-indigo-100" />
                </div>
            </section>

            {/* TAB NAVIGATION */}
            <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-2">
                {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition ${isActive ? 'bg-indigo-600 text-white shadow-sm' : 'bg-transparent text-slate-600 hover:bg-slate-100'}`}
                        >
                            <Icon className="h-4 w-4" />
                            {tab.label}
                        </button>
                    );
                })}
            </div>

            {/* OVERVIEW TAB */}
            {activeTab === 'overview' && (
                <>
                    <section className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                            <div className="flex items-center gap-2 text-slate-500">
                                <Users className="h-4 w-4" />
                                <p className="text-xs font-bold uppercase tracking-wide">Students</p>
                            </div>
                            <p className="mt-2 text-3xl font-black text-slate-950">{uniqueStudents}</p>
                        </div>
                        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                            <div className="flex items-center gap-2 text-slate-500">
                                <CheckCircle2 className="h-4 w-4" />
                                <p className="text-xs font-bold uppercase tracking-wide">Activities done</p>
                            </div>
                            <p className="mt-2 text-3xl font-black text-slate-950">{completedActivities}</p>
                        </div>
                        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                            <div className="flex items-center gap-2 text-slate-500">
                                <Award className="h-4 w-4" />
                                <p className="text-xs font-bold uppercase tracking-wide">Avg quiz score</p>
                            </div>
                            <p className="mt-2 text-3xl font-black text-slate-950">{averageScore}{quizRows.length > 0 ? '%' : ''}</p>
                        </div>
                        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                            <div className="flex items-center gap-2 text-slate-500">
                                <ShieldCheck className="h-4 w-4" />
                                <p className="text-xs font-bold uppercase tracking-wide">Safety checklists</p>
                            </div>
                            <p className="mt-2 text-3xl font-black text-slate-950">{safetyCompleted}</p>
                        </div>
                    </section>

                    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Live activity log</p>
                                <h2 className="mt-2 text-2xl font-bold text-slate-950">Recent learning activity</h2>
                            </div>
                        </div>

                        <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200">
                            <div className="grid grid-cols-12 bg-slate-50 px-4 py-3 text-xs font-bold uppercase tracking-wide text-slate-600">
                                <div className="col-span-3">Student</div>
                                <div className="col-span-2">Module</div>
                                <div className="col-span-3">Activity</div>
                                <div className="col-span-1">Type</div>
                                <div className="col-span-1">Done</div>
                                <div className="col-span-1">Score</div>
                                <div className="col-span-1">Date</div>
                            </div>
                            {rows.length === 0 ? (
                                <div className="p-5 text-sm text-slate-600">No learning progress records yet.</div>
                            ) : (
                                rows.map((row) => (
                                    <div key={row.rowKey} className="grid grid-cols-12 items-center gap-2 border-t border-slate-100 px-4 py-3 text-sm">
                                        <div className="col-span-3 font-semibold text-slate-700 truncate">
                                            {row.studentName || <span className="text-slate-400 italic">Unknown</span>}
                                        </div>
                                        <div className="col-span-2 font-medium text-slate-700 uppercase text-xs">{row.module}</div>
                                        <div className="col-span-3 text-slate-600 truncate text-xs">{row.activityLabel}</div>
                                        <div className="col-span-1"><ActivityBadge type={row.activityType} /></div>
                                        <div className="col-span-1">
                                            {row.completed ? <CheckCircle2 className="h-4 w-4 text-emerald-500" /> : <XCircle className="h-4 w-4 text-slate-300" />}
                                        </div>
                                        <div className="col-span-1 text-slate-700 font-semibold">{row.score !== null ? `${row.score}%` : '—'}</div>
                                        <div className="col-span-1 text-slate-400 text-xs">{new Date(row.updatedAt).toLocaleDateString()}</div>
                                    </div>
                                ))
                            )}
                        </div>
                    </section>
                </>
            )}

            {/* STUDENTS TAB */}
            {activeTab === 'students' && (
                <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h2 className="text-2xl font-bold text-slate-950">Student Roster</h2>
                    <p className="mt-2 text-sm text-slate-600">Unique students with progress data.</p>
                    <div className="mt-5 space-y-3">
                        {Array.from(new Set(rows.map(r => r.studentName).filter(Boolean))).map((student) => {
                            const studentRows = rows.filter(r => r.studentName === student);
                            const completed = studentRows.filter(r => r.completed).length;
                            return (
                                <div key={student} className="rounded-2xl border border-slate-200 p-4 flex justify-between items-center">
                                    <div className="font-semibold text-slate-800">{student}</div>
                                    <div className="text-sm text-slate-600">{completed} activities completed</div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            )}

            {/* QUIZZES TAB */}
            {activeTab === 'quizzes' && (
                <section className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
                    {/* Quiz Form */}
                    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Quiz manager</p>
                                <h2 className="mt-2 text-2xl font-bold text-slate-950">{quizForm.editingId ? 'Edit question' : 'Add question'}</h2>
                            </div>
                        </div>

                        <div className="mt-5 space-y-4">
                            <label className="block">
                                <span className="text-sm font-semibold text-slate-700">Module</span>
                                <select value={quizForm.module} onChange={(e) => setQuizForm(c => ({ ...c, module: e.target.value as 'aas' | 'centrifuge' }))} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500">
                                    <option value="aas">AAS</option>
                                    <option value="centrifuge">Centrifuge</option>
                                </select>
                            </label>
                            <label className="block">
                                <span className="text-sm font-semibold text-slate-700">Question</span>
                                <textarea value={quizForm.question} onChange={(e) => setQuizForm(c => ({ ...c, question: e.target.value }))} rows={4} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500" />
                            </label>

                            <div className="space-y-3">
                                <div className="flex items-center justify-between gap-3">
                                    <span className="text-sm font-semibold text-slate-700">Options</span>
                                    <button type="button" onClick={() => setQuizForm(c => ({ ...c, options: [...c.options, ''] }))} className="rounded-xl border border-slate-200 px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-50">Add option</button>
                                </div>
                                {quizForm.options.map((option, index) => (
                                    <div key={index} className="grid grid-cols-[auto_1fr] items-center gap-2">
                                        <label className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-sm font-black text-slate-700">
                                            <input type="radio" checked={quizForm.correctAnswer === index} onChange={() => setQuizForm(c => ({ ...c, correctAnswer: index }))} className="sr-only" />
                                            {String.fromCharCode(65 + index)}
                                        </label>
                                        <input aria-label={`Option ${String.fromCharCode(65 + index)}`} placeholder={`Option ${String.fromCharCode(65 + index)}`} value={option} onChange={(e) => setQuizForm(c => ({ ...c, options: c.options.map((item, i) => i === index ? e.target.value : item) }))} className={`w-full rounded-2xl border px-4 py-3 text-sm outline-none focus:border-indigo-500 ${quizForm.correctAnswer === index ? 'border-indigo-400 bg-indigo-50' : 'border-slate-200'}`} />
                                    </div>
                                ))}
                            </div>

                            <label className="block">
                                <span className="text-sm font-semibold text-slate-700">Explanation</span>
                                <textarea value={quizForm.explanation} onChange={(e) => setQuizForm(c => ({ ...c, explanation: e.target.value }))} rows={3} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500" />
                            </label>
                            <label className="flex items-center gap-3">
                                <input type="checkbox" checked={quizForm.published} onChange={(e) => setQuizForm(c => ({ ...c, published: e.target.checked }))} className="h-4 w-4 rounded border-slate-300" />
                                <span className="text-sm font-semibold text-slate-700">Publish for students</span>
                            </label>

                            <div className="flex gap-2">
                                <button type="button" disabled={savingQuiz} onClick={saveQuizQuestion} className="flex-1 rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-indigo-700 disabled:opacity-60">
                                    {savingQuiz ? 'Saving...' : quizForm.editingId ? 'Save changes' : 'Add question'}
                                </button>
                                {quizForm.editingId && (
                                    <button type="button" onClick={resetQuizForm} className="rounded-2xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50">Cancel</button>
                                )}
                            </div>
                            {quizMessage && <div className="rounded-2xl bg-amber-50 p-4 text-sm text-amber-900 ring-1 ring-amber-200">{quizMessage}</div>}
                        </div>
                    </div>

                    {/* Quiz List */}
                    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                        <h2 className="text-2xl font-bold text-slate-950">Question bank</h2>
                        <div className="mt-5 space-y-3">
                            {quizQuestions.length === 0 ? (
                                <div className="p-5 text-sm text-slate-600">No questions found.</div>
                            ) : quizQuestions.map((question) => (
                                <article key={question.id} className="rounded-2xl border border-slate-200 p-4">
                                    <div className="flex flex-wrap gap-2">
                                        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-bold uppercase text-slate-700">{question.module}</span>
                                        <span className={`rounded-full px-2 py-0.5 text-xs font-bold ${question.published ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                                            {question.published ? 'Published' : 'Draft'}
                                        </span>
                                    </div>
                                    <h3 className="mt-2 text-sm font-bold text-slate-950">{question.question}</h3>
                                    <div className="mt-4 flex gap-2">
                                        <button onClick={() => editQuizQuestion(question)} className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50">Edit</button>
                                        <button onClick={() => toggleQuizPublished(question)} className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50">
                                            {question.published ? 'Unpublish' : 'Publish'}
                                        </button>
                                        <button onClick={() => deleteQuizQuestion(question.id)} className="rounded-xl border border-rose-200 px-3 py-2 text-xs font-bold text-rose-700 hover:bg-rose-50">Delete</button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* LESSONS TAB */}
            {activeTab === 'lessons' && (
                <section className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                        <h2 className="text-2xl font-bold text-slate-950">{lessonForm.editingId ? 'Edit Lesson' : 'Add Lesson'}</h2>
                        <div className="mt-5 space-y-4">
                            <label className="block">
                                <span className="text-sm font-semibold text-slate-700">Module</span>
                                <select value={lessonForm.module} onChange={(e) => setLessonForm(c => ({ ...c, module: e.target.value as 'aas' | 'centrifuge' }))} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500">
                                    <option value="aas">AAS</option>
                                    <option value="centrifuge">Centrifuge</option>
                                </select>
                            </label>
                            <label className="block">
                                <span className="text-sm font-semibold text-slate-700">Title</span>
                                <input type="text" value={lessonForm.title} onChange={(e) => setLessonForm(c => ({ ...c, title: e.target.value }))} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500" />
                            </label>
                            <label className="block">
                                <span className="text-sm font-semibold text-slate-700">Description (Short Summary)</span>
                                <textarea value={lessonForm.description} onChange={(e) => setLessonForm(c => ({ ...c, description: e.target.value }))} rows={2} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500" />
                            </label>
                            <label className="block">
                                <span className="text-sm font-semibold text-slate-700">Main Lesson Content</span>
                                <textarea value={lessonForm.content} onChange={(e) => setLessonForm(c => ({ ...c, content: e.target.value }))} rows={5} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500" placeholder="Enter the main body of the lesson here..." />
                            </label>
                            <label className="block">
                                <span className="text-sm font-semibold text-slate-700">Objectives (one per line)</span>
                                <textarea value={lessonForm.objectivesText} onChange={(e) => setLessonForm(c => ({ ...c, objectivesText: e.target.value }))} rows={3} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500" />
                            </label>
                            <label className="block">
                                <span className="text-sm font-semibold text-slate-700">Safety Notes (one per line)</span>
                                <textarea value={lessonForm.safetyNotesText} onChange={(e) => setLessonForm(c => ({ ...c, safetyNotesText: e.target.value }))} rows={3} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500" />
                            </label>
                            <label className="flex items-center gap-3">
                                <input type="checkbox" checked={lessonForm.published} onChange={(e) => setLessonForm(c => ({ ...c, published: e.target.checked }))} className="h-4 w-4 rounded border-slate-300" />
                                <span className="text-sm font-semibold text-slate-700">Publish for students</span>
                            </label>
                            <div className="flex gap-2">
                                <button type="button" disabled={savingLesson} onClick={saveLesson} className="flex-1 rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-indigo-700 disabled:opacity-60">
                                    {savingLesson ? 'Saving...' : lessonForm.editingId ? 'Save changes' : 'Add lesson'}
                                </button>
                                {lessonForm.editingId && (
                                    <button type="button" onClick={resetLessonForm} className="rounded-2xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50">Cancel</button>
                                )}
                            </div>
                            {lessonMessage && <div className="rounded-2xl bg-amber-50 p-4 text-sm text-amber-900 ring-1 ring-amber-200">{lessonMessage}</div>}
                        </div>
                    </div>

                    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                        <h2 className="text-2xl font-bold text-slate-950">Lesson Database</h2>
                        <div className="mt-5 space-y-3">
                            {lessons.length === 0 ? (
                                <div className="p-5 text-sm text-slate-600">No lessons created yet.</div>
                            ) : lessons.map((lesson) => (
                                <article key={lesson.id} className="rounded-2xl border border-slate-200 p-4">
                                    <div className="flex flex-wrap gap-2">
                                        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-bold uppercase text-slate-700">{lesson.module}</span>
                                        <span className={`rounded-full px-2 py-0.5 text-xs font-bold ${lesson.published ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                                            {lesson.published ? 'Published' : 'Draft'}
                                        </span>
                                    </div>
                                    <h3 className="mt-2 text-base font-bold text-slate-950">{lesson.title}</h3>
                                    <div className="mt-4 flex gap-2">
                                        <button onClick={() => editLesson(lesson)} className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50">Edit</button>
                                        <button onClick={() => toggleLessonPublished(lesson)} className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50">
                                            {lesson.published ? 'Unpublish' : 'Publish'}
                                        </button>
                                        <button onClick={() => deleteLesson(lesson.id)} className="rounded-xl border border-rose-200 px-3 py-2 text-xs font-bold text-rose-700 hover:bg-rose-50">Delete</button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* WORKSHEETS TAB */}
            {activeTab === 'worksheets' && (
                <section className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                        <h2 className="text-2xl font-bold text-slate-950">{worksheetForm.editingId ? 'Edit Worksheet' : 'Add Worksheet Template'}</h2>
                        <div className="mt-5 space-y-4">
                            <label className="block">
                                <span className="text-sm font-semibold text-slate-700">Module</span>
                                <select value={worksheetForm.module} onChange={(e) => setWorksheetForm(c => ({ ...c, module: e.target.value as 'aas' | 'centrifuge' }))} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500">
                                    <option value="aas">AAS</option>
                                    <option value="centrifuge">Centrifuge</option>
                                </select>
                            </label>
                            <label className="block">
                                <span className="text-sm font-semibold text-slate-700">Link to Lesson (optional)</span>
                                <select value={worksheetForm.lesson_id || ''} onChange={(e) => setWorksheetForm(c => ({ ...c, lesson_id: e.target.value || null }))} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500">
                                    <option value="">None</option>
                                    {lessons.filter(l => l.module === worksheetForm.module).map(l => (
                                        <option key={l.id} value={l.id}>{l.title}</option>
                                    ))}
                                </select>
                            </label>
                            <label className="block">
                                <span className="text-sm font-semibold text-slate-700">Title</span>
                                <input type="text" value={worksheetForm.title} onChange={(e) => setWorksheetForm(c => ({ ...c, title: e.target.value }))} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500" />
                            </label>
                            <label className="block">
                                <span className="text-sm font-semibold text-slate-700">Tasks (one per line)</span>
                                <textarea value={worksheetForm.tasksText} onChange={(e) => setWorksheetForm(c => ({ ...c, tasksText: e.target.value }))} rows={4} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500" />
                            </label>
                            <label className="flex items-center gap-3">
                                <input type="checkbox" checked={worksheetForm.published} onChange={(e) => setWorksheetForm(c => ({ ...c, published: e.target.checked }))} className="h-4 w-4 rounded border-slate-300" />
                                <span className="text-sm font-semibold text-slate-700">Publish for students</span>
                            </label>
                            <div className="flex gap-2">
                                <button type="button" disabled={savingWorksheet} onClick={saveWorksheet} className="flex-1 rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-indigo-700 disabled:opacity-60">
                                    {savingWorksheet ? 'Saving...' : worksheetForm.editingId ? 'Save changes' : 'Add template'}
                                </button>
                                {worksheetForm.editingId && (
                                    <button type="button" onClick={resetWorksheetForm} className="rounded-2xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50">Cancel</button>
                                )}
                            </div>
                            {worksheetMessage && <div className="rounded-2xl bg-amber-50 p-4 text-sm text-amber-900 ring-1 ring-amber-200">{worksheetMessage}</div>}
                        </div>
                    </div>

                    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                        <h2 className="text-2xl font-bold text-slate-950">Worksheet Database</h2>
                        <div className="mt-5 space-y-3">
                            {worksheetTemplates.length === 0 ? (
                                <div className="p-5 text-sm text-slate-600">No worksheet templates created yet.</div>
                            ) : worksheetTemplates.map((wt) => (
                                <article key={wt.id} className="rounded-2xl border border-slate-200 p-4">
                                    <div className="flex flex-wrap gap-2">
                                        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-bold uppercase text-slate-700">{wt.module}</span>
                                        <span className={`rounded-full px-2 py-0.5 text-xs font-bold ${wt.published ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                                            {wt.published ? 'Published' : 'Draft'}
                                        </span>
                                    </div>
                                    <h3 className="mt-2 text-base font-bold text-slate-950">{wt.title}</h3>
                                    <div className="mt-4 flex gap-2">
                                        <button onClick={() => editWorksheet(wt)} className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50">Edit</button>
                                        <button onClick={() => toggleWorksheetPublished(wt)} className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50">
                                            {wt.published ? 'Unpublish' : 'Publish'}
                                        </button>
                                        <button onClick={() => deleteWorksheet(wt.id)} className="rounded-xl border border-rose-200 px-3 py-2 text-xs font-bold text-rose-700 hover:bg-rose-50">Delete</button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ASSIGNMENTS TAB */}
            {activeTab === 'assignments' && (
                <section className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                        <h2 className="text-2xl font-bold text-slate-950">{assignmentForm.editingId ? 'Edit Assignment' : 'Add Assignment'}</h2>
                        <div className="mt-5 space-y-4">
                            <label className="block">
                                <span className="text-sm font-semibold text-slate-700">Module</span>
                                <select value={assignmentForm.module} onChange={(e) => setAssignmentForm(c => ({ ...c, module: e.target.value as 'aas' | 'centrifuge' }))} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500">
                                    <option value="aas">AAS</option>
                                    <option value="centrifuge">Centrifuge</option>
                                </select>
                            </label>
                            <label className="block">
                                <span className="text-sm font-semibold text-slate-700">Title</span>
                                <input type="text" value={assignmentForm.title} onChange={(e) => setAssignmentForm(c => ({ ...c, title: e.target.value }))} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500" />
                            </label>
                            <label className="block">
                                <span className="text-sm font-semibold text-slate-700">Description / Instructions</span>
                                <textarea value={assignmentForm.description} onChange={(e) => setAssignmentForm(c => ({ ...c, description: e.target.value }))} rows={4} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500" />
                            </label>
                            <label className="block">
                                <span className="text-sm font-semibold text-slate-700">Due Date (Optional)</span>
                                <input type="datetime-local" value={assignmentForm.due_date} onChange={(e) => setAssignmentForm(c => ({ ...c, due_date: e.target.value }))} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500" />
                            </label>
                            <label className="flex items-center gap-3">
                                <input type="checkbox" checked={assignmentForm.published} onChange={(e) => setAssignmentForm(c => ({ ...c, published: e.target.checked }))} className="h-4 w-4 rounded border-slate-300" />
                                <span className="text-sm font-semibold text-slate-700">Publish for students</span>
                            </label>
                            <div className="flex gap-2">
                                <button type="button" disabled={savingAssignment} onClick={saveAssignment} className="flex-1 rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-indigo-700 disabled:opacity-60">
                                    {savingAssignment ? 'Saving...' : assignmentForm.editingId ? 'Save changes' : 'Add assignment'}
                                </button>
                                {assignmentForm.editingId && (
                                    <button type="button" onClick={resetAssignmentForm} className="rounded-2xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50">Cancel</button>
                                )}
                            </div>
                            {assignmentMessage && <div className="rounded-2xl bg-amber-50 p-4 text-sm text-amber-900 ring-1 ring-amber-200">{assignmentMessage}</div>}
                        </div>
                    </div>

                    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                        <h2 className="text-2xl font-bold text-slate-950">Assignment Database</h2>
                        <div className="mt-5 space-y-3">
                            {assignments.length === 0 ? (
                                <div className="p-5 text-sm text-slate-600">No assignments created yet.</div>
                            ) : assignments.map((a) => (
                                <article key={a.id} className="rounded-2xl border border-slate-200 p-4">
                                    <div className="flex flex-wrap gap-2">
                                        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-bold uppercase text-slate-700">{a.module}</span>
                                        <span className={`rounded-full px-2 py-0.5 text-xs font-bold ${a.published ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                                            {a.published ? 'Published' : 'Draft'}
                                        </span>
                                    </div>
                                    <h3 className="mt-2 text-base font-bold text-slate-950">{a.title}</h3>
                                    {a.due_date && <div className="mt-1 text-sm text-slate-500">Due: {new Date(a.due_date).toLocaleString()}</div>}
                                    <div className="mt-4 flex gap-2">
                                        <button onClick={() => editAssignment(a)} className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50">Edit</button>
                                        <button onClick={() => toggleAssignmentPublished(a)} className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50">
                                            {a.published ? 'Unpublish' : 'Publish'}
                                        </button>
                                        <button onClick={() => deleteAssignment(a.id)} className="rounded-xl border border-rose-200 px-3 py-2 text-xs font-bold text-rose-700 hover:bg-rose-50">Delete</button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* SUBMISSIONS TAB */}
            {activeTab === 'submissions' && (
                <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h2 className="text-2xl font-bold text-slate-950">Worksheet Submissions</h2>
                    <div className="mt-5 space-y-3">
                        {submissions.length === 0 ? (
                            <div className="p-5 text-sm text-slate-600">No submissions found.</div>
                        ) : submissions.map((sub) => (
                            <div key={sub.id} className="rounded-2xl border border-slate-200 p-4">
                                <div className="font-semibold text-slate-800">{sub.studentName} - {sub.worksheet_type}</div>
                                <div className="text-sm text-slate-600 mt-1">Module: {sub.module.toUpperCase()}</div>
                                <div className="text-sm mt-2 text-indigo-700 cursor-pointer font-bold">Review Answers &rarr;</div>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}
