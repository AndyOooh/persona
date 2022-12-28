import React from 'react';
import TestProvider from './context/test-provider';

type Props = {
  children: React.ReactNode;
};

export default async function TestLayout({ children }: Props) {
  const baseUrl = 'http://localhost:8080';
  const res = await fetch(`${baseUrl}/questions`, {});
  const data = await res.json();
  return (
    <section className='main-height flex justify-center items-center'>
      <TestProvider questions={data}>{children}</TestProvider>
    </section>
  );
}
