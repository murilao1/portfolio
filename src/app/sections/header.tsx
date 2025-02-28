'use client';
import React, { useEffect } from 'react';
import { motion, stagger, useAnimate, useInView } from 'motion/react';

export default function Header() {
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
  };

  useEffect(() => {
    if (!isInView) return;

    run();
  }, [isInView]);

  return (
    <section
      ref={scope}
      className='relative flex min-h-[100dvh] min-w-[100dvw] items-center justify-start gap-16 p-20'
    >
      <motion.ul className='flex flex-auto origin-left flex-col justify-center font-primary text-8xl font-bold'>
        <div className='flex flex-row gap-10'>
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
    </section>
  );
}
