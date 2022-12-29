import Link from 'next/link';
import React, { useContext } from 'react';
import { TestContext } from '../context/test-provider';

type Props = {
  handleSubmit: () => void;
};

function BottomNavSubmit({ handleSubmit }: Props) {
  const { page, answers, questions } = useContext(TestContext);
  return (
    <div className='card-actions btn-group items-center justify-center'>
      <Link
        href={`test?question=${Number(page) - 1}`}
        className={`btn btn-secondary hover:bg-accent btn-sm ${
          page < 2 ? 'pointer-events-none bg-transparent' : ''
        }`}>
        «
      </Link>
      <button
        className='btn btn-secondary hover:bg-accent'
        onClick={handleSubmit}
        disabled={!answers.every((answer: number) => answer >= 0)}>
        Submit
      </button>
      <Link
        href={`test?question=${Number(page) + 1}`}
        className={`btn btn-secondary hover:bg-accent btn-sm ${
          page > questions.length -1 ? 'pointer-events-none bg-transparent' : ''
        }`}>
        »
      </Link>
    </div>
  );

}

export default BottomNavSubmit;
