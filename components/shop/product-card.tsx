'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/components/shop/data';
import { useCartStore } from '@/lib/store/cart-store';
import { useWishlistStore } from '@/lib/store/wishlist-store';

export function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem);
  const toggleWishlist = useWishlistStore((state) => state.toggle);
  const wished = useWishlistStore((state) => state.has(product.id));

  return (
    <article className="glass blue-ring group rounded-2xl p-4 transition hover:-translate-y-1 hover:shadow-neon">
      <div className="relative h-56 overflow-hidden rounded-xl">
        <Image src={product.image} alt={product.name} fill className="object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="mt-4 flex items-start justify-between gap-2">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-sky-200/70">{product.category}</p>
          <h3 className="mt-1 text-lg font-bold"><Link href={`/products/${product.id}`}>{product.name}</Link></h3>
        </div>
        <button aria-label="Add to wishlist" onClick={() => toggleWishlist(product.id)} className="rounded-full bg-white/10 p-2 hover:bg-white/20">
          <Heart className={`h-4 w-4 ${wished ? 'fill-sky-300 text-sky-300' : ''}`} />
        </button>
      </div>
      <div className="mt-3 flex items-center justify-between text-sm">
        <span className="text-white/75">by {product.artist}</span>
        <span className="flex items-center gap-1 text-sky-300"><Star className="h-4 w-4" /> {product.rating}</span>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <p className="text-xl font-black text-sky-300">${product.price}</p>
        <Button onClick={() => addItem({ id: product.id, name: product.name, image: product.image, price: product.price })}>Add to cart</Button>
      </div>
    </article>
  );
}
