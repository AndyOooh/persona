'use client';

import { useSearchParams } from 'next/navigation';

import React, {
  createContext,
  useCallback,
  useMemo,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import { Question } from 'types';

export type TestContextType = {
  questions: Question[];
  answers: number[];
  // handleUpdateAnswers: ((answerIndex: number) => void);
  handleUpdateAnswers: ((answerIndex: number) => void);
  page: string | null;
  currentQuestion: Question | null;
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
};

const initTestContext: TestContextType = {
  questions: [],
  answers: [],
  handleUpdateAnswers: () => {},
  page: null,
  currentQuestion: null,
  setScore: () => {},
  score: 0,
  // setScore: null,
};

// export const TestContext = createContext<TestContextType | null>(null);

export const TestContext = createContext<TestContextType>(initTestContext);

type Props = {
  children: React.ReactNode;
  questions: Question[];
};

export default function TestProvider({ children, questions }: Props) {
  const initialAnswerArrray = [...Array(questions.length).fill(-1)];
  const [answers, setAnswers] = useState<number[]>(initialAnswerArrray);
  const searchParams = useSearchParams();
  const page = searchParams.get('question');
  const currentQuestion = page !== 'result' ? questions[Number(page) - 1] : null;
  const [score, setScore] = useState<number>(0);

  const handleUpdateAnswers = useCallback(
    (answerIndex: number) => {
      console.log('handleUpdateAnswers called !!!!')
      setAnswers(prev => {
        if (!currentQuestion) return prev;
        const newAnswers = [...prev];
        newAnswers[currentQuestion.id - 1] = currentQuestion.options[answerIndex].score;
        return newAnswers;
      });
    },
    [currentQuestion]
  );

  const testContext: TestContextType = useMemo(
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
