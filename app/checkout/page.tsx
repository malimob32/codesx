'use client';

import { useCartStore } from '@/lib/store/cart-store';
import { Button } from '@/components/ui/button';

export default function CheckoutPage() {
  const items = useCartStore((state) => state.items);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-4xl font-black">Checkout</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <section className="glass blue-ring rounded-2xl p-6">
          <h2 className="text-2xl font-bold">Shipping & Contact</h2>
          <div className="mt-4 grid gap-3">
            <input className="rounded-xl border border-sky-300/20 bg-white/5 px-4 py-3" placeholder="Full name" />
            <input className="rounded-xl border border-sky-300/20 bg-white/5 px-4 py-3" placeholder="Email" />
            <input className="rounded-xl border border-sky-300/20 bg-white/5 px-4 py-3" placeholder="Address" />
          </div>
        </section>
        <section className="glass blue-ring rounded-2xl p-6">
          <h2 className="text-2xl font-bold">Payment Summary</h2>
          <p className="mt-4 text-white/70">Items: {items.length}</p>
          <p className="mt-1 text-3xl font-black text-sky-300">${total.toFixed(2)}</p>
          <p className="mt-4 text-sm text-white/60">Stripe integration placeholder: replace this with Stripe Elements/Checkout session in next step.</p>
          <Button size="lg" className="mt-6 w-full">Pay Securely</Button>
        </section>
      </div>
    </main>
  );
}
