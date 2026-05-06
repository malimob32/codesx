'use client';

import { motion } from 'framer-motion';

const features = [
  { title: 'Artist Marketplace', desc: 'Discover portfolios, ratings, and instant booking slots.' },
  { title: 'Digital Tattoo Vault', desc: 'Buy licensed tattoo design packs with secure downloads.' },
  { title: 'Luxury Merch', desc: 'Limited merch, premium tools, and exclusive collaborations.' }
];

export function FeatureGrid() {
  return (
    <section className="mx-auto grid max-w-6xl gap-5 px-6 pb-24 md:grid-cols-3">
      {features.map((feature, i) => (
        <motion.article
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="glass rounded-2xl p-6"
        >
          <h3 className="text-xl font-bold">{feature.title}</h3>
          <p className="mt-3 text-white/70">{feature.desc}</p>
        </motion.article>
      ))}
    </section>
  );
}
