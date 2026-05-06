import { FeatureGrid } from '@/components/landing/feature-grid';
import { GsapShowcase } from '@/components/landing/gsap-showcase';
import { Hero } from '@/components/landing/hero';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeatureGrid />
      <GsapShowcase />
    </main>
  );
}
