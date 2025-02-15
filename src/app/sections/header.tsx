'use client';
import React from 'react';
import styles from '../page.module.css';
import { AnimatePresence, motion, Variants } from 'motion/react';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 90 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
  hover: {
    y: -8,
    transition: { ease: 'easeInOut' },
  },
};

export default function Header() {
  console.log(`renderizou`);

  return (
    <section className={styles.page}>
      <AnimatePresence>
        <motion.ul
          variants={container}
          initial={'hidden'}
          animate={'show'}
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
      </AnimatePresence>
    </section>
  );
}
