'use client';
import React from 'react';
import styles from './page.module.css';
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
};

export default function Home() {
  return (
    <div className={styles.page}>
      <AnimatePresence>
        <motion.ul
          variants={container}
          initial={'hidden'}
          animate={'show'}
          className='flex flex-auto flex-col justify-center font-primary text-8xl font-bold'
        >
          <div className='flex flex-row gap-10'>
            <li className='h-[110px] overflow-hidden'>
              <motion.span variants={item} className='inline-block'>
                Murilo{' '}
              </motion.span>
            </li>
            <li className='inline-block h-[110px] overflow-hidden'>
              <motion.span variants={item} className='inline-block'>
                <span className='font-thin'>Augusto</span>
              </motion.span>
            </li>
          </div>
          <div className='flex flex-row gap-10'>
            <li className='inline-block h-[110px] overflow-hidden'>
              <motion.span variants={item} className='inline-block'>
                <span className='font-thin'>Pereira </span>
              </motion.span>
            </li>
            <li className='inline-block h-[110px] overflow-hidden'>
              <motion.span variants={item} className='inline-block'>
                Nascimento
              </motion.span>
            </li>
          </div>
        </motion.ul>
      </AnimatePresence>
    </div>
  );
}
