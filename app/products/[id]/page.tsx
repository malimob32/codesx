import Image from 'next/image';
import { products } from '@/components/shop/data';
import { Button } from '@/components/ui/button';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((item) => item.id === params.id) ?? products[0];

  return (
    <main className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-2">
      <div className="glass blue-ring relative h-[420px] overflow-hidden rounded-3xl">
        <Image src={product.image} alt={product.name} fill className="object-cover" />
      </div>
      <section className="glass blue-ring rounded-3xl p-8">
        <p className="text-xs uppercase tracking-[0.2em] text-sky-200/70">{product.category}</p>
        <h1 className="mt-2 text-4xl font-black">{product.name}</h1>
        <p className="mt-4 text-white/70">High-fidelity premium tattoo product with instant checkout, wishlist support, and artist attribution.</p>
        <p className="mt-6 text-3xl font-black text-sky-300">${product.price}</p>
        <div className="mt-6 flex gap-3">
          <Button size="lg">Add to Cart</Button>
          <Button size="lg" variant="ghost">Buy Now</Button>
        </div>
      </section>
    </main>
  );
}
