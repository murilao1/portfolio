'use client';
import React, { useEffect, useState } from 'react';
import { motion, stagger, useAnimate, useInView } from 'motion/react';
import { Typer } from '@/app/components/typer';

export default function Header() {
  const [shouldType, setShouldType] = useState(false);
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  const run = async () => {
    await animate(
      'li span',
      { opacity: [0, 1], y: [90, 0] },
      {
        type: 'spring',
        bounce: 0.5,
        visualDuration: 0.3,
        delay: stagger(0.075),
      },
    );
    await animate('ul', { scale: 0.5 }, { duration: 0.3, ease: 'easeInOut' });

    setShouldType(true);
  };

  useEffect(() => {
    if (!isInView) return;

    run();
  }, [isInView]);

  return (
    <section
      ref={scope}
      id='header'
      className='relative flex min-h-[100dvh] min-w-[100dvw] items-center justify-start gap-16 p-20'
    >
      <motion.ul className='absolute left-32 flex w-full origin-left flex-col justify-center font-primary font-bold md:text-6xl lg:text-7xl xl:text-8xl'>
        <div className='flex flex-row md:gap-8 lg:gap-9 xl:gap-10'>
          <li className='h-[110px] overflow-hidden'>
            <motion.span className='inline-block'>
              <span className='transition-all duration-500 ease-in-out hover:font-black'>
                Murilo
              </span>
            </motion.span>
          </li>
          <li className='inline-block h-[110px] overflow-hidden'>
            <motion.span className='inline-block'>
              <span className='font-thin transition-all duration-500 ease-in-out hover:font-medium'>
                Augusto
              </span>
            </motion.span>
          </li>
        </div>
        <div className='flex flex-row gap-10'>
          <li className='inline-block h-[110px] overflow-hidden'>
            <motion.span className='inline-block'>
              <span className='font-thin transition-all duration-500 ease-in-out hover:font-normal'>
                Pereira{' '}
              </span>
            </motion.span>
          </li>
          <li className='inline-block h-[110px] overflow-hidden'>
            <motion.span className='inline-block'>
              <span className='transition-all duration-500 ease-in-out hover:font-extrabold'>
                Nascimento
              </span>
            </motion.span>
          </li>
        </div>
      </motion.ul>
      <div className='2xl:2-1/2 absolute right-32 flex w-1/3 flex-col 2xl:w-1/2'>
        <Typer
          className='opacity-1 flex flex-1 font-secondary text-xl'
          shouldType={shouldType}
        >
          Hello!\n I am a web developer based in São Paulo, SP - Brazil.\n I
          really enjoy building good looking and well animated websites.\n Know
          more about me and my projects below.
        </Typer>
      </div>
    </section>
  );
}
