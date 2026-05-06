import { ProductCard } from '@/components/shop/product-card';
import { products } from '@/components/shop/data';

export default function ShopPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <header className="glass blue-ring rounded-3xl p-6 md:p-8">
        <h1 className="text-4xl font-black md:text-5xl">Shop Premium Tattoo Essentials</h1>
        <p className="mt-3 max-w-3xl text-white/70">Advanced filtering, trending styles, and curated artist drops in a modern blue UI experience.</p>
        <div className="mt-6 grid gap-3 md:grid-cols-4">
          {['All', 'Digital Design', 'Equipment', 'Merch'].map((filter) => (
            <button key={filter} className="rounded-full border border-sky-300/25 bg-sky-500/10 px-4 py-2 text-sm hover:bg-sky-400/20">{filter}</button>
          ))}
        </div>
      </header>

      <section className="mt-8 grid gap-6 md:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}
