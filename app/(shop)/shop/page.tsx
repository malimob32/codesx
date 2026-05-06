const products = [
  { id: '1', name: 'Neo-Tribal Pack', price: '$69', tag: 'Digital' },
  { id: '2', name: 'RIOMO Black Tee', price: '$89', tag: 'Merch' },
  { id: '3', name: 'Shader Pro Kit', price: '$249', tag: 'Equipment' }
];

export default function ShopPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-4xl font-black">Shop</h1>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {products.map((product) => (
          <article key={product.id} className="glass rounded-2xl p-6 transition hover:scale-[1.02] hover:shadow-neon">
            <p className="text-xs uppercase tracking-[0.25em] text-white/60">{product.tag}</p>
            <h2 className="mt-2 text-xl font-bold">{product.name}</h2>
            <p className="mt-4 text-neon-purple">{product.price}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
