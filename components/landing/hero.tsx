'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-36">
      <div className="absolute inset-0 -z-10 bg-mesh" />
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="glass rounded-3xl p-8 md:p-14"
        >
          <p className="text-neon-red mb-4 text-xs uppercase tracking-[0.3em]">RIOMO Collective</p>
          <h1 className="max-w-4xl text-4xl font-black leading-tight md:text-7xl">
            Premium Tattoo Commerce for the Urban Avant-Garde.
          </h1>
          <p className="mt-6 max-w-2xl text-base text-white/70 md:text-lg">
            Shop elite tattoo designs, book world-class artists, and access exclusive digital art drops in one bold experience.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button size="lg">Explore Shop <ArrowRight className="ml-2 h-4 w-4" /></Button>
            <Button size="lg" variant="ghost">Book an Artist</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
