import Link from 'next/link';
import { useContext } from 'react';
import { TestContext } from '../context/test-provider';

type Props = {};

function StepNavigation({}: Props) {
  const steps = [1, 2, 3, 4];
  const { answers } = useContext(TestContext);

  return (
    <nav>
      <ul className='steps'>
        {steps.map(step => (
          <Link
            href={`test?question=${step}`}
            // className='step step-secondary'
            className={`step step-neutral ${answers[step - 1] >= 0 ? 'step-secondary' : ''}`}
            key={step}
          />
        ))}
      </ul>
    </nav>
  );
}

export default StepNavigation;
