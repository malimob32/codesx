'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from '@/lib/store/cart-store';
import { Button } from '@/components/ui/button';

export default function CartPage() {
  const { items, removeItem, clear } = useCartStore();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-4xl font-black">Cart</h1>
      {items.length === 0 ? (
        <p className="mt-4 text-white/70">Your cart is empty. Browse the shop to add tattoo products.</p>
      ) : (
        <div className="mt-8 grid gap-6 md:grid-cols-[1.4fr_.8fr]">
          <section className="space-y-4">
            {items.map((item) => (
              <article key={item.id} className="glass blue-ring flex items-center gap-4 rounded-2xl p-4">
                <div className="relative h-20 w-20 overflow-hidden rounded-lg">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <h2 className="font-bold">{item.name}</h2>
                  <p className="text-sm text-white/60">Qty: {item.quantity}</p>
                </div>
                <p className="font-semibold text-sky-300">${item.price * item.quantity}</p>
                <button onClick={() => removeItem(item.id)} className="text-xs text-red-300">Remove</button>
              </article>
            ))}
          </section>
          <aside className="glass blue-ring rounded-2xl p-5">
            <h3 className="text-lg font-bold">Order Summary</h3>
            <p className="mt-4 text-white/70">Subtotal</p>
            <p className="text-2xl font-black text-sky-300">${total.toFixed(2)}</p>
            <div className="mt-4 flex flex-col gap-3">
              <Link href="/checkout"><Button size="lg">Proceed to Checkout</Button></Link>
              <Button variant="ghost" onClick={clear}>Clear Cart</Button>
            </div>
          </aside>
        </div>
      )}
    </main>
  );
}
