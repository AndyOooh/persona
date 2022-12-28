'use client';

import { useContext } from 'react';
import { useRouter } from 'next/navigation';

import AnswersList from './answersList';
import Result from './result';
import { TestContext } from '../context/test-provider';
import TestStart from './testStart';
import Link from 'next/link';
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

  return (
    <div className='card card-height bg-primary bg-opacity-95 text-primary-content w-2/3 max-w-2xl scroll rounded-3xl'>
      <div className='card-body items-center justify-between w-full rounded-lg'>
        <StepNavigation />

        {page === 'result' ? (
          <Result />
        ) : (
          <>
            <h2 className='card-title text-center'>{`Question ${page}`}</h2>
            <p className='flex-grow-0 text-center'>{currentQuestion.text}</p>
            <div className='divider m-0'></div>
            <AnswersList />
            <BottomNavSubmit handleSubmit={handleSubmit} />
          </>
        )}
      </div>
    </div>
  );
}

export default QuestionCard;

{
  /* <div className='card backdrop-blur w-1/2'>
        <figure>
          <img src='https://placeimg.com/400/225/arch' alt='car!' />
        </figure>
        <div className='card-body gap-0 min-w-xl'>
          <Steps />
          <h2 className='card-title'>Question 1</h2>
          <p>How to park your car at your garage?</p>
          <div className='card-actions justify-end'>
            <Answers />
          </div>
        </div>
      </div> */
}

{
  /* <div className='card bg-neutral text-neutral-content'>
        <div className='card-body items-center text-center'>
          <Steps />
          <h2 className='card-title'>Cookies!</h2>
          <p>We are using cookies for no reason.</p>
          <div className='card-actions justify-end'>
            <button className='btn btn-primary'>Accept</button>
            <button className='btn btn-ghost'>Deny</button>
          </div>
        </div>
      </div> */
}
