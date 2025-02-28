'use client';
import React, { useEffect } from 'react';
import { motion, stagger, useAnimate, useInView, Variants } from 'motion/react';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 90 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'circInOut',
    },
  },
  hover: {
    y: -8,
    transition: { ease: 'easeIn' },
  },
};

export default function Header() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  const run = async () => {
    // tentando recriar a funcionalidade das variants e stagger com o hook animate()
    await animate('ul', { opacity: 1, y: 0 });
    await animate(
      'li span',
      { opacity: 1, y: 0 },
      {
        type: 'spring',
        bounce: 0.5,
        visualDuration: 0.3,
        delay: stagger(0.075),
      },
    );
  };

  useEffect(() => {
    if (!isInView) return;

    run();
  }, [isInView]);

  return (
    <section
      ref={scope}
      className='flex min-h-[100dvh] min-w-[100dvw] items-center justify-center gap-16 p-20'
    >
      <motion.ul
        variants={container}
        initial={'hidden'}
        // animate={'show'}
        className='flex flex-auto flex-col justify-center font-primary text-8xl font-bold'
      >
        <div className='flex flex-row gap-10'>
          <li className='h-[110px] overflow-hidden'>
            <motion.span
              variants={item}
              // whileHover={'hover'}
              className='inline-block'
            >
              <span className='transition-all duration-500 ease-in-out hover:font-black'>
                Murilo
              </span>
            </motion.span>
          </li>
          <li className='inline-block h-[110px] overflow-hidden'>
            <motion.span
              variants={item}
              // whileHover={'hover'}
              className='inline-block'
            >
              <span className='font-thin transition-all duration-500 ease-in-out hover:font-medium'>
                Augusto
              </span>
            </motion.span>
          </li>
        </div>
        <div className='flex flex-row gap-10'>
          <li className='inline-block h-[110px] overflow-hidden'>
            <motion.span
              variants={item}
              // whileHover={'hover'}
              className='inline-block'
            >
              <span className='font-thin transition-all duration-500 ease-in-out hover:font-normal'>
                Pereira{' '}
              </span>
            </motion.span>
          </li>
          <li className='inline-block h-[110px] overflow-hidden'>
            <motion.span
              variants={item}
              // whileHover={'hover'}
              className='inline-block'
            >
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
