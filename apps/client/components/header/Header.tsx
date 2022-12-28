import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import logo from '../../public/logo1-transparent.png';

type Props = {};

function Header({}: Props) {
  return (
    <header className='navbar bg-primary text-primary-content'>
      <div className='flex-1'>
        <Link href='/' className='btn btn-ghost normal-case text-xl '>
          {/* <Image src={logo} alt='logo' className='h-full w-full rounded-full border-2 border-secondary-content' /> */}
          <Image src={logo} alt='logo' className='h-full w-full rounded-full even-shadow' />
        </Link>
      </div>
      <nav className='flex-none'>
        <ul className='menu menu-horizontal px-1 font-medium'>
          <li>
            <Link href={'/test'}>Test</Link>
          </li>
          <li>
            <Link href={'/blog'}>Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
