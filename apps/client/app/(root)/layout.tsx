'use client';

import { useEffect, useState } from 'react';
import { Brygada_1918 } from '@next/font/google';

import '../styles/globals.scss';
import Header from '../components/Header';
import hero from '../../public/hero/yeshi-kangrang-iuqxv7kFj64-unsplash.jpg';

const brygada = Brygada_1918({ subsets: ['latin'] });

export type Theme = 'business' | 'mytheme';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('mytheme');

  useEffect(() => {
    const fetchedTheme = localStorage.getItem('theme');
    if (fetchedTheme) {
      setTheme(fetchedTheme as Theme);
    }
  }, []);

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
