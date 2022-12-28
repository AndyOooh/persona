import Link from 'next/link';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className='hero main-height bg-no-repeat'>
      <div className='hero-overlay bg-black bg-opacity-40'></div>
      <div className='hero-content text-center text-neutral-content backdrop-blur'>
        <div className='max-w-xl'>
          <h1 className='mb-5 text-5xl font-bold'>Explore your Persona</h1>
          <p className='mb-5'>Read our blog posts and take tests to discover your personality.</p>
          <div className='flex gap-4 items-center justify-center'>
            <Link href='test' className='btn btn-primary'>
              Take test
            </Link>
            <Link href='blog' className='btn btn-primary'>
              read blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
