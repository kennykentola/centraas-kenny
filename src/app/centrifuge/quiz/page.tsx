'use client';

import { centrifugeQuizQuestions } from '@/data/centrifuge-quiz';
import { ManagedQuizPage } from '@/components/quiz/managed-quiz-page';

export default function CentrifugeQuizPage() {
    return (
        <ManagedQuizPage
            module="centrifuge"
            title="Centrifuge practical assessment"
            menuHref="/centrifuge/menu"
            storageKey="quiz-centrifuge-state"
            fallbackQuestions={centrifugeQuizQuestions}
        />
    );
}
