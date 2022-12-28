import React, { useContext } from 'react';
import RadialScore from '../../../components/ui/radialScore';
import { TestContext } from '../context/test-provider';

function Result() {
  const { score } = useContext(TestContext);
  return (
    // <div className='flex flex-col justify-around'>
    <>
      <p className='flex-grow-0 w-2/3 text-center'>
        A score of 50% means you are equal parts introvert and extrovert. On the extremes, 100% means
        you are exceptionally extrovert, while 0% means the opposite.
      </p>
      <p className='flex-grow-0'>{`Your score:`} </p>
      <RadialScore score={score.toFixed()} />
      <div className='flex items-center gap-4'>
        <p>Introvert</p>
        <progress className='progress progress-secondary w-56' value={score} max='100'></progress>
        <p>Extrovert</p>
      </div>
    </>
    // </div>
  );
}

export default Result;
