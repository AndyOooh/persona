import { Brygada_1918 } from '@next/font/google';

import Header from '../components/Header';
import '../styles/globals.scss';
import hero from '../../public/hero/yeshi-kangrang-iuqxv7kFj64-unsplash.jpg';

const brygada = Brygada_1918({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={brygada.className}>
      <head />
      <body>
        <Header />
        <main
          style={{ backgroundImage: `url(${hero.src})` }}
          className='main-height bg-cover bg-no-repeat bg-center'>
          {children}
        </main>
      </body>
    </html>
  );
}
