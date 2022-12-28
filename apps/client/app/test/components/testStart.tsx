import Link from 'next/link';


export default function TestStart() {
  return (
    <div className='hero main-height bg-no-repeat'>
      <div className='hero-overlay bg-black bg-opacity-40'></div>
      <div className='hero-content text-center text-neutral-content backdrop-blur'>
        <div className='max-w-xl'>
          <h1 className='mb-5 text-5xl font-bold'>Are you introvert or extrovert?</h1>
          <p className='mb-5'>
            No matter which way the introvert quiz says you lean, it’s likely that you were born
            that way (at least in part). Introversion and extroversion are both temperaments, and
            both are normal and healthy. About 30-50 percent of the population are thought to be
            introverts.
          </p>
          <Link href='test?question=1' className='btn btn-primary'>
            Start
          </Link>
        </div>
      </div>
    </div>
  );
}
