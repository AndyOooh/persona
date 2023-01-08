import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Theme } from '../(root)/layout';
import logo from '../../public/logo1-transparent.png';

type Props = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

function Header({ theme, setTheme }: Props) {
  return (
    <header className='navbar bg-primary text-primary-content'>
      <div className='flex-1'>
        <Link href='/' className='btn btn-primary normal-case text-xl '>
          <Image src={logo} alt='logo' className='h-full w-full rounded-full even-shadow' />
        </Link>
      </div>
      <div>
        <div className='form-control'>
          <label className='cursor-pointer label'>
            <input
              type='checkbox'
              className='toggle toggle-primary'
              checked={theme === 'mytheme' ? true : false}
              onClick={() => setTheme(theme === 'mytheme' ? 'dark' : 'mytheme')}
            />
          </label>
        </div>
        <nav className='flex-none'>
          <ul className='menu menu-horizontal px-1 font-medium'>
            <li>
              <Link href={'/test'} className='btn-primary'>
                Test
              </Link>
            </li>
            <li>
              <Link href={'/blog'} className='btn-primary'>
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
