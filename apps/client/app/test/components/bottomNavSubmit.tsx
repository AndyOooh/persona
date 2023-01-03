import Link from 'next/link';
import React, { useContext } from 'react';
import { TestContext } from '../context/test-provider';

type Props = {
  handleSubmit: () => void;
};

function BottomNavSubmit({ handleSubmit }: Props) {
  const { page, answers, questions } = useContext(TestContext);
  const pageNumber = Number(page);
  return (
    <div className='card-actions btn-group items-center justify-center'>
      <Link
        href={`test?question=${pageNumber - 1}`}
        className={`btn btn-secondary hover:bg-accent btn-sm ${
          pageNumber < 2 ? 'pointer-events-none bg-transparent' : ''
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
        href={`test?question=${pageNumber + 1}`}
        className={`btn btn-secondary hover:bg-accent btn-sm ${
          pageNumber > questions.length -1 ? 'pointer-events-none bg-transparent' : ''
        }`}>
        »
      </Link>
    </div>
  );

}

export default BottomNavSubmit;
