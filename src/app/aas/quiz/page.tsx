'use client';

import { aasQuizQuestions } from '@/data/aas-quiz';
import { ManagedQuizPage } from '@/components/quiz/managed-quiz-page';

export default function AASQuizPage() {
    return (
        <ManagedQuizPage
            module="aas"
            title="AAS practical assessment"
            menuHref="/aas/menu"
            storageKey="quiz-aas-state"
            fallbackQuestions={aasQuizQuestions}
        />
    );
}
