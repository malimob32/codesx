import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'RIOMO — Premium Tattoo Commerce',
  description: 'High-end tattoo marketplace for designs, artists, and exclusive drops.',
  openGraph: {
    title: 'RIOMO',
    description: 'Luxury tattoo eCommerce and artist marketplace.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
