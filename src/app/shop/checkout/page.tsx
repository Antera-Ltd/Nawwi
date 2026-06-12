'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, CreditCard, Smartphone, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function CheckoutPage() {
  const router = useRouter();
  const [cart, setCart] = useState<any[]>([]);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'stripe' | 'mixbyyas'>('stripe');
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(savedCart);
    const t = savedCart.reduce((acc: number, item: any) => acc + (item.price * item.quantity), 0);
    setTotal(t);
  }, []);

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          name,
          items: cart,
          total,
          paymentMethod
        }),
      });

      const data = await response.json();

      if (paymentMethod === 'stripe' && data.url) {
        window.location.href = data.url;
      } else {
        // Success for Mix by yas or other methods
        localStorage.removeItem('cart');
        router.push(`/track?id=${data.orderId}&email=${email}`);
      }
    } catch (err) {
      console.error(err);
      alert('Checkout failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0 && !loading) {
    return (
      <div className="pt-40 text-center px-6">
        <h1 className="text-4xl font-serif mb-8">Your cart is empty</h1>
        <Link href="/shop" className="bg-[#b47878] text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-black transition-colors">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <Link href="/shop" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider mb-12 hover:text-[#b47878] transition-colors">
        <ArrowLeft size={16} /> Back to Shop
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left: Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-serif mb-8">Guest Checkout</h1>
          <form onSubmit={handleCheckout} className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400">Contact Information</h3>
              <input
                required
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-4 rounded-xl border border-neutral-100 focus:border-[#b47878] outline-none transition-colors"
              />
              <input
                required
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-6 py-4 rounded-xl border border-neutral-100 focus:border-[#b47878] outline-none transition-colors"
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400">Payment Method</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('stripe')}
                  className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${paymentMethod === 'stripe' ? 'border-[#b47878] bg-[#b47878]/5' : 'border-neutral-100 hover:border-neutral-200'}`}
                >
                  <CreditCard className={paymentMethod === 'stripe' ? 'text-[#b47878]' : 'text-neutral-400'} />
                  <div className="text-left">
                    <div className="font-bold text-sm">Stripe</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-wider">Visa, Mastercard</div>
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('mixbyyas')}
                  className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${paymentMethod === 'mixbyyas' ? 'border-[#b47878] bg-[#b47878]/5' : 'border-neutral-100 hover:border-neutral-200'}`}
                >
                  <Smartphone className={paymentMethod === 'mixbyyas' ? 'text-[#b47878]' : 'text-neutral-400'} />
                  <div className="text-left">
                    <div className="font-bold text-sm">Mix by yas</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-wider">Lipa Namba (TZ)</div>
                  </div>
                </button>
              </div>
            </div>

            <button
              disabled={loading}
              type="submit"
              className="w-full bg-black text-white py-5 font-bold uppercase tracking-widest hover:bg-[#b47878] transition-colors flex items-center justify-center gap-3"
            >
              {loading ? 'Processing...' : `Pay $${total.toFixed(2)}`}
            </button>
          </form>
        </motion.div>

        {/* Right: Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-neutral-50 rounded-3xl p-8 h-fit"
        >
          <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6">Order Summary</h3>
          <div className="space-y-6 mb-8">
            {cart.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center">
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-neutral-200 rounded-lg overflow-hidden shrink-0">
                    {item.images?.[0] && <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />}
                  </div>
                  <div>
                    <div className="font-bold text-sm">{item.name}</div>
                    <div className="text-xs text-neutral-400">Qty: {item.quantity}</div>
                  </div>
                </div>
                <div className="font-bold text-sm">${(item.price * item.quantity).toFixed(2)}</div>
              </div>
            ))}
          </div>
          <div className="border-t border-neutral-200 pt-6 space-y-2">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Shipping</span>
              <span className="text-green-600 font-bold uppercase text-[10px] tracking-widest">Calculated at next step</span>
            </div>
            <div className="flex justify-between text-xl font-serif pt-4">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
