import React, { useContext } from 'react';

import { TestContext } from '../context/test-provider';
import RadialScore from './RadialScore';

function TestResult() {
  const { score } = useContext(TestContext);
  return (
    <>
      <p className='flex-grow-0 w-2/3 text-center'>
        A score of 50% means you are equal parts introvert and extrovert. On the extremes, 100%
        means you are exceptionally extrovert, while 0% means the opposite.
      </p>
      <p className='flex-grow-0 text-lg'>{`Your score:`} </p>
      <RadialScore score={Math.round(score)} />

      <div className='hidden sm:flex items-center gap-4'>
        <p>Introvert</p>
        <progress className='progress progress-accent w-56' value={score} max='100'></progress>
        <p>Extrovert</p>
      </div>
    </>
  );
}

export default TestResult;
