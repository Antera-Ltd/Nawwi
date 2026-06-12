'use client';

import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Lock, Mail, UserPlus, LogIn } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const router = useRouter();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (isRegistering) {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) {
        setError(error.message);
        setLoading(false);
      } else {
        alert('Check your email for confirmation link!');
        setIsRegistering(false);
        setLoading(false);
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError(error.message);
        setLoading(false);
      } else {
        // Check if admin or normal user redirect
        const { data: { user } } = await supabase.auth.getUser();
        if (user?.email === 'admin@nawwi.com' || user?.email?.endsWith('@nawwi.com')) {
          router.push('/admin');
        } else {
          router.push('/shop');
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#fffaeb] flex items-center justify-center px-6 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white border-4 border-black p-10 shadow-[12px_12px_0px_0px_#000000]"
      >
        <div className="flex flex-col items-center mb-10 text-center">
          <img src="/Nawwi-logo.png" alt="Nawwi Logo" className="h-12 w-auto mb-4" />
          <h1 className="text-2xl font-serif">{isRegistering ? 'Create Your Account' : 'Welcome Back'}</h1>
          <p className="text-xs text-neutral-400 mt-2">Join the Nawwi Wellness community.</p>
        </div>

        <form onSubmit={handleAuth} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-300 w-4 h-4" />
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-6 py-4 rounded-xl border border-neutral-100 outline-none focus:border-[#b47878] transition-colors"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-300 w-4 h-4" />
              <input
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-6 py-4 rounded-xl border border-neutral-100 outline-none focus:border-[#b47878] transition-colors"
                placeholder="••••••••"
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-xs font-bold text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-5 font-bold uppercase tracking-widest hover:bg-[#b47878] transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none flex items-center justify-center gap-2"
          >
            {isRegistering ? <UserPlus size={18} /> : <LogIn size={18} />}
            {loading ? 'Processing...' : (isRegistering ? 'Register' : 'Login')}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-neutral-100 text-center">
          <button
            onClick={() => setIsRegistering(!isRegistering)}
            className="text-xs font-bold text-[#b47878] hover:underline uppercase tracking-widest"
          >
            {isRegistering ? 'Already have an account? Login' : 'New here? Create an account'}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
