'use client';

import { useContext } from 'react';
import { useRouter } from 'next/navigation';

import AnswersList from './answersList';
import TestResult from './testResult';
import { TestContext } from '../context/test-provider';
import TestStart from './testStart';
import StepNavigation from './stepNavigation';
import BottomNavSubmit from './bottomNavSubmit';

function QuestionCard() {
  const { page, currentQuestion, questions, answers, setScore } = useContext(TestContext);
  const router = useRouter();

  const handleSubmit = async () => {
    const hasUnanswered = answers.some((answer: number) => answer < 0);
    if (hasUnanswered) {
      return;
    }
    const resultRoute = '/test?question=result';
    router.prefetch(resultRoute);
    const maxPoints = questions.length * 0.75;
    const points = answers.reduce((acc: number, curr: number) => acc + curr, 0);
    const achievedScore = (points / maxPoints) * 100;
    setScore(achievedScore);
    router.push(resultRoute);
  };

  if (!page) {
    return <TestStart />;
  }

  let cardContent;
  if (page === 'result') {
    cardContent = <TestResult />;
  } else {
    cardContent = (
      <>
        <div className='flex flex-col items-center w-full'>
          <h2 className='card-title'>{`Question ${page}`}</h2>
          <p className='text-center min-h-fit sm:h-4em'>
            {currentQuestion?.text}
          </p>
          <AnswersList />
        </div>
        <BottomNavSubmit handleSubmit={handleSubmit} />
      </>
    );
  }

  return (
    <div className='card card-height bg-primary bg-opacity-95 text-primary-content w-11/12 sm:w-2/3 md:w-1/2 sm:max-w-3xl scroll rounded-3xl'>
      <div className='card-body items-center justify-between'>
        <StepNavigation />
        {cardContent}
      </div>
    </div>
  );
}

export default QuestionCard;
