'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/app/sections/header';
import Intro from '@/app/sections/intro';
import Education from '@/app/sections/education';
import ReactLenis, { useLenis } from 'lenis/react';

export default function Home() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const lenis = useLenis();

  const sections = ['header', 'intro', 'education'];

  const previousSection = () => {
    if (!(currentSectionIndex <= 0)) setCurrentSectionIndex((prev) => prev - 1);
  };

  const nextSection = () => {
    if (!(currentSectionIndex >= sections.length - 1))
      setCurrentSectionIndex((prev) => prev + 1);
  };

  useEffect(() => {
    console.log(currentSectionIndex);
    console.log(sections[currentSectionIndex]);
    lenis?.scrollTo(`#${sections[currentSectionIndex]}`);
  }, [currentSectionIndex]);

  return (
    <ReactLenis root>
      {/*  */}
      <Header />
      <Intro />
      <Education />
      {/*  */}
      <div className='fixed bottom-4 flex w-full justify-center gap-40'>
        <button onClick={previousSection}>Previous</button>
        <button onClick={nextSection}>Next</button>
      </div>
    </ReactLenis>
  );
}
