'use client';

import { useSearchParams } from 'next/navigation';

import { createContext, useCallback, useMemo, useState } from 'react';

type Context = any | null;

export const TestContext = createContext<Context | null>({
  question: null,
  answers: null,
  handleUpdateAnsers: null,
  page: null,
  currentQuestion: null,
  score: null,
  setScore: null,
});

type Props = {
  children: React.ReactNode;
  questions: any;
};

export default function TestProvider({ children, questions }: Props) {
  const initialAnswerArrray = [...Array(questions.length).fill(-1)];
  const [answers, setAnswers] = useState<number[]>(initialAnswerArrray);
  const searchParams = useSearchParams();
  const page = searchParams.get('question');
  console.log('🚀  file: test-provider.tsx:29  page', page)
  const currentQuestion = page !== 'result' ? questions[Number(page) - 1] : null;
  const [score, setScore] = useState<number | null>(null);

  const handleUpdateAnswers = useCallback(
    (answerIndex: number) => {
      setAnswers(prev => {
        const newAnswers = [...prev];
        newAnswers[currentQuestion.id - 1] = currentQuestion.options[answerIndex].score;
        return newAnswers;
      });
    },
    [currentQuestion]
  );

  const testContext: Context = useMemo(
    () => ({
      questions,
      answers,
      handleUpdateAnswers,
      page,
      currentQuestion,
      score,
      setScore,
    }),
    [questions, answers, handleUpdateAnswers, page, currentQuestion, score, setScore]
  );
  return <TestContext.Provider value={testContext}>{children}</TestContext.Provider>;
}
