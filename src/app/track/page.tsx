'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Package, Truck, Search } from 'lucide-react';

function TrackContent() {
  const searchParams = useSearchParams();
  const [orderId, setOrderId] = useState(searchParams.get('id') || '');
  const [email, setEmail] = useState(searchParams.get('email') || '');
  const [order, setOrder] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleTrack = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!orderId || !email) return;

    setLoading(true);
    setError('');

    const { data, error: err } = await supabase
      .from('orders')
      .select('*')
      .eq('id', orderId)
      .eq('customer_email', email)
      .single();

    if (err) {
      setError('Order not found. Please check your ID and email.');
      setOrder(null);
    } else {
      setOrder(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (orderId && email) handleTrack();
  }, []);

  const steps = [
    { key: 'pending', label: 'Confirmed', icon: CheckCircle2 },
    { key: 'processing', label: 'Processing', icon: Clock },
    { key: 'ready', label: 'Ready', icon: Package },
    { key: 'delivered', label: 'Delivered', icon: Truck },
  ];

  const currentStepIndex = steps.findIndex(s => s.key === order?.status) || 0;

  return (
    <div className="pt-32 pb-20 px-6 max-w-3xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-serif mb-4">Track Order</h1>
        <p className="text-gray-500">Enter your order details to see real-time status.</p>
      </motion.div>

      <form onSubmit={handleTrack} className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm mb-12 flex flex-col md:flex-row gap-4">
        <input
          required
          type="text"
          placeholder="Order ID"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          className="flex-1 px-6 py-4 rounded-xl border border-neutral-100 focus:border-[#b47878] outline-none transition-colors"
        />
        <input
          required
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-6 py-4 rounded-xl border border-neutral-100 focus:border-[#b47878] outline-none transition-colors"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-[#b47878] transition-colors flex items-center justify-center gap-2"
        >
          <Search size={18} />
          {loading ? 'Searching...' : 'Track'}
        </button>
      </form>

      {error && (
        <div className="text-center text-red-500 font-bold p-4 bg-red-50 rounded-xl mb-12">
          {error}
        </div>
      )}

      {order && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="space-y-8"
        >
          <div className="bg-neutral-50 p-8 rounded-3xl border border-neutral-200">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-1">Status</h3>
                <p className="text-2xl font-serif capitalize">{order.status}</p>
              </div>
              <div className="text-right">
                <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-1">Last Updated</h3>
                <p className="text-sm font-bold">{new Date(order.created_at).toLocaleDateString()}</p>
              </div>
            </div>

            {/* Stepper */}
            <div className="relative flex justify-between">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-neutral-200 -translate-y-1/2 z-0" />
              <div
                className="absolute top-1/2 left-0 h-0.5 bg-[#b47878] -translate-y-1/2 z-0 transition-all duration-1000"
                style={{ width: `${(currentStepIndex / (steps.length - 1)) * 100}%` }}
              />

              {steps.map((step, idx) => {
                const Icon = step.icon;
                const isCompleted = idx <= currentStepIndex;
                const isActive = idx === currentStepIndex;

                return (
                  <div key={step.key} className="relative z-10 flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-500 ${isCompleted ? 'bg-[#b47878] text-white' : 'bg-white border-2 border-neutral-200 text-neutral-300'}`}
                    >
                      <Icon size={20} />
                    </div>
                    <span className={`absolute -bottom-8 whitespace-nowrap text-[10px] font-bold uppercase tracking-widest ${isActive ? 'text-black' : 'text-neutral-400'}`}>
                      {step.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6">Order Details</h3>
            <div className="space-y-4">
              {order.items?.map((item: any, idx: number) => (
                <div key={idx} className="flex justify-between text-sm">
                  <span>{item.name} x {item.quantity}</span>
                  <span className="font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t border-neutral-100 pt-4 flex justify-between font-serif text-xl">
                <span>Total</span>
                <span>${order.total}</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default function TrackPage() {
  return (
    <Suspense fallback={<div className="pt-40 text-center font-serif text-2xl">Loading tracker...</div>}>
      <TrackContent />
    </Suspense>
  );
}
