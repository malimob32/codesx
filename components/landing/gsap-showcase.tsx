'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function GsapShowcase() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current.querySelectorAll('.reveal'),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%'
        }
      }
    );
  }, []);

  return (
    <section ref={ref} className="mx-auto max-w-6xl px-6 pb-24">
      <div className="reveal glass rounded-3xl p-8 md:p-10">
        <p className="text-neon-blue text-sm uppercase tracking-[0.3em]">Trending now</p>
        <h2 className="mt-2 text-3xl font-extrabold md:text-5xl">Ink Styles Defining 2026</h2>
        <p className="mt-4 max-w-3xl text-white/70">Neo-tribal, cyber realism, and abstract blackout collections from elite global artists.</p>
      </div>
    </section>
  );
}
