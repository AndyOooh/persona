'use client';

import { Brygada_1918 } from '@next/font/google';

import Header from '../components/Header';
import '../styles/globals.scss';
import hero from '../../public/hero/yeshi-kangrang-iuqxv7kFj64-unsplash.jpg';
import { useState } from 'react';

const brygada = Brygada_1918({ subsets: ['latin'] });

export type Theme = 'mytheme' | 'dark'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('mytheme');
  const theme2 = localStorage.getItem('theme');
  return (
    <html lang='en' className={brygada.className} data-theme={theme}>
      <head />
      <body>
        <Header theme={theme} setTheme={setTheme} />
        <main
          style={{ backgroundImage: `url(${hero.src})` }}
          className='main-height bg-cover bg-no-repeat bg-center'>
          {children}
        </main>
      </body>
    </html>
  );
}
