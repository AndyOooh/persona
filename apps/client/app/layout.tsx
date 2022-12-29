import { Brygada_1918, Noto_Nastaliq_Urdu, Chivo_Mono } from '@next/font/google';

import Header from '../components/header/Header';
import './globals.scss';

// import hero from '../public/hero/brett-jordan-D44kHt8Ex14-unsplash.jpg';
import hero from '../public/hero/yeshi-kangrang-iuqxv7kFj64-unsplash.jpg';
// import hero from '../public/hero/cropped_rishabh-butola-XUCo6yXaV8g-unsplash.jpg';
// import hero from '../public/hero/cropped_rostyslav-savchyn-E2zvqyY5zUY-unsplash.jpg';
// import hero from '../public/hero/cropped_joshua-fuller-ZWZDQVpmfIY-unsplash.jpg';

const brygada = Brygada_1918({ subsets: ['latin'] })
const chivo = Chivo_Mono({ subsets: ['latin'] })


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={brygada.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header />
        <main 
        style={{ backgroundImage: `url(${hero.src})` }}
        className='main-height bg-cover bg-no-repeat bg-center'
         >{children}</main>
      </body>
    </html>
  );
}
