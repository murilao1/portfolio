'use client';

import React, { useState, useEffect, useRef } from 'react';
import Header from '@/app/sections/header';
import Intro from '@/app/sections/intro';
import Education from '@/app/sections/education';
import ReactLenis, { useLenis } from 'lenis/react';

export default function Home() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const isManualNavigationRef = useRef(false);
  const sections = ['header', 'intro', 'education'];
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    console.log(currentSectionIndex, ' Current Section');
  }, [currentSectionIndex]);

  // Use the lenis hook with a callback to track scrolling
  const lenis = useLenis((scrollData) => {
    // Skip scroll detection during manual navigation
    if (isManualNavigationRef.current) return;

    const scrollY = scrollData?.scroll || window.scrollY;

    // For top section detection - set to 0 first when near the top
    if (scrollY < 100) {
      setCurrentSectionIndex(0);
      return;
    }

    // Find which section is most visible
    detectVisibleSection();
  });

  // Function to navigate to previous section
  const previousSection = () => {
    if (!(currentSectionIndex <= 0)) {
      isManualNavigationRef.current = true;
      setCurrentSectionIndex((prev) => prev - 1);
    }
  };

  // Function to navigate to next section
  const nextSection = () => {
    if (!(currentSectionIndex >= sections.length - 1)) {
      isManualNavigationRef.current = true;
      setCurrentSectionIndex((prev) => prev + 1);
    }
  };

  // Function to detect which section is most visible
  const detectVisibleSection = () => {
    if (!sectionRefs.current[0] || isManualNavigationRef.current) return;

    const windowHeight = window.innerHeight;

    // Find which section is most visible
    let maxVisibleSection = 0;
    let maxVisibleAmount = 0;

    sectionRefs.current.forEach((section, index) => {
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const visibleHeight =
        Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);

      if (visibleHeight > maxVisibleAmount) {
        maxVisibleAmount = visibleHeight;
        maxVisibleSection = index;
      }
    });

    if (maxVisibleSection !== currentSectionIndex) {
      setCurrentSectionIndex(maxVisibleSection);
    }
  };

  // Scroll to section when currentSectionIndex changes
  useEffect(() => {
    if (lenis && isManualNavigationRef.current) {
      lenis.scrollTo(`#${sections[currentSectionIndex]}`, {
        offset: 0,
        duration: 1,
        // Reset flag after scrolling completes
        onComplete: () => {
          setTimeout(() => {
            isManualNavigationRef.current = false;
          }, 100);
        },
      });
    }
  }, [currentSectionIndex, lenis, sections]);

  // Initialize section refs
  useEffect(() => {
    sectionRefs.current = sections.map((id) => document.getElementById(id));

    // Safety fallback to reset navigation state
    const safetyInterval = setInterval(() => {
      if (isManualNavigationRef.current) {
        console.log('Navigation state reset (safety)');
        isManualNavigationRef.current = false;
      }
    }, 1000);

    return () => {
      clearInterval(safetyInterval);
    };
  }, []);

  return (
    <ReactLenis root options={{ syncTouch: true }}>
      <div id='header'>
        <Header />
      </div>
      <div id='intro'>
        <Intro />
      </div>
      <div id='education'>
        <Education />
      </div>
      <div className='fixed bottom-4 flex w-full justify-center gap-40'>
        <button onClick={previousSection}>Previous</button>
        <button onClick={nextSection}>Next</button>
      </div>
    </ReactLenis>
  );
}
