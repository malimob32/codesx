'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const nav = [
  { href: '/shop', label: 'Shop' },
  { href: '/artists/featured-artist', label: 'Artists' },
  { href: '/booking', label: 'Booking' },
  { href: '/dashboard', label: 'Dashboard' }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-black tracking-widest text-neon-purple">RIOMO</Link>
        <nav className="hidden gap-6 md:flex">
          {nav.map((item) => (
            <motion.div key={item.href} whileHover={{ y: -2 }}>
              <Link href={item.href} className="text-sm text-white/75 transition hover:text-white">{item.label}</Link>
            </motion.div>
          ))}
        </nav>
      </div>
    </header>
  );
}
