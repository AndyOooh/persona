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
      {page > 1 && (
        <Link href={`test?question=${Number(page) - 1}`} className='btn btn-secondary btn-sm'>
          «
        </Link>
      )}

      <button
        className='btn btn-outline btn-secondary rounded-lg '
        onClick={handleSubmit}
        disabled={!answers.every((answer: number) => answer >= 0)}>
        Submit
      </button>
      {page < questions.length && (
        <Link href={`test?question=${Number(page) + 1}`} className='btn btn-secondary btn-sm'>
          »
        </Link>
      )}
    </div>
  );
}

export default BottomNavSubmit;
