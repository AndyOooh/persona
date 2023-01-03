import { CSSProperties } from 'react';

type Props = {};

const divStyles = {
  '--value': '65',
  '--size': '5rem',
  '--thickness': '0.75rem',
};

function Blog({}: Props) {
  return (
    <section className='hero main-height bg-no-repeat'>
      <div className='hero-overlay bg-black bg-opacity-40'></div>
      <article className='hero-content w-11/12 sm:w-fit text-center text-accent backdrop-blur'>
        <div className='max-w-xl'>
          <h1 className='mb-5 text-3xl sm:text-5xl font-bold'>Coming soon...</h1>
          <p className='mb-5'>
            Make sure to come back to check our upcoming blogs about all things psychology
          </p>
        </div>
      </article>
    </section>
  );
}

export default Blog;
