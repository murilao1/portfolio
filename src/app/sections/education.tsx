import React from 'react';

export default function Education() {
  return (
    <section
      className='relative flex min-h-[100dvh] min-w-[100dvw] flex-col items-center justify-center gap-40 p-20'
      id='education'
    >
      <h1 className='w-full text-left font-primary text-6xl'>Education</h1>
      <main className='flex flex-row gap-32 pr-20'>
        <img src='/fiap.png' alt='' />
        <div className='flex flex-col justify-center gap-16'>
          <div className='font-primary'>
            <h3 className='text-4xl'>
              FIAP + Alura: Pos Tech - Front-end Engineering
            </h3>
            <span className='text-xl'>2025</span>
          </div>
          <p className='font-secondary text-2xl'>
            Currently in grad school for specialization in front-end development
            by FIAP + Alura, the biggest tech education ecossystem in Brazil
          </p>
        </div>
      </main>
    </section>
  );
}
