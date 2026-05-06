export type Product = {
  id: string;
  name: string;
  category: 'Digital Design' | 'Equipment' | 'Merch';
  price: number;
  rating: number;
  artist: string;
  image: string;
  popular?: boolean;
};

export const products: Product[] = [
  {
    id: 'neo-tribal-pack',
    name: 'Neo Tribal Signature Pack',
    category: 'Digital Design',
    price: 69,
    rating: 4.9,
    artist: 'Riko Flux',
    image: 'https://images.unsplash.com/photo-1542727365-19732a80dcfd?auto=format&fit=crop&w=1400&q=80',
    popular: true
  },
  {
    id: 'cyber-realism-kit',
    name: 'Cyber Realism Tool Kit',
    category: 'Equipment',
    price: 249,
    rating: 4.8,
    artist: 'Mika Void',
    image: 'https://images.unsplash.com/photo-1590246814883-57f8c0f6f331?auto=format&fit=crop&w=1400&q=80',
    popular: true
  },
  {
    id: 'riomo-oversized-hoodie',
    name: 'RIOMO Oversized Studio Hoodie',
    category: 'Merch',
    price: 119,
    rating: 4.7,
    artist: 'RIOMO Lab',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1400&q=80'
  }
];
