import { useAnimate, useInView } from 'motion/react';
import React, { useEffect } from 'react';

export default function Intro() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { margin: '100px 0px 0px 0px' });

  useEffect(() => {
    if (!isInView) return;

    animate(scope.current, { opacity: 1 }, { duration: 0.5 });
  }, [isInView]);

  return (
    <section
      id='intro'
      className='flex min-h-[100dvh] min-w-[100dvw] items-center justify-center gap-16 p-20'
    >
      <p className='font-secondary text-3xl opacity-0' ref={scope}>
        Hello! I am a web developer based in São Paulo, SP - Brazil.
        <br />
        I really enjoy building good looking and well animated websites.
        <br />
        Know more about me and my projects below.
      </p>
    </section>
  );
}
