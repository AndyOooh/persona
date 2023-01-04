import Link from 'next/link';
import { useContext } from 'react';

import { TestContext } from '../context/test-provider';

function StepNavigation() {
  const { answers, questions } = useContext(TestContext);

  return (
    <nav>
      <ul className='steps'>
        {questions?.map((_, index) => (
          <Link
            href={`test?question=${index + 1}`}
            className={`step hover:step-accent step-secondary min-w-0 ${
              answers[index - 1] >= 0 ? '' : ''
            }`}
            data-content={answers[index] >= 0 ? '✓' : index + 1}
            key={index}
          />
        ))}
      </ul>
    </nav>
  );
}

export default StepNavigation;
