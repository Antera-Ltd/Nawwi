'use client';

import React, { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { FinalCTAAndFooter } from '@/components/Footer';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function QuizPage() {
  return (
    <main className="min-h-screen bg-[#eadada]">
      <Navbar />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#b47878]/10 text-[#b47878] text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-3 h-3" />
            AI Scent Concierge
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif text-black mb-8 italic"
          >
            Find Your Signature Scent
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto"
          >
            Our AI-powered scent quiz analyzes your mood, environment, and preferences to recommend the perfect Nawwi Wellness candle for your space.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-12 rounded-3xl border border-black shadow-[8px_8px_0px_0px_#b47878] inline-block"
          >
            <h3 className="text-2xl font-bold text-black mb-4 uppercase tracking-tight">Ready to begin?</h3>
            <p className="text-gray-500 mb-8">Click the chat icon in the bottom right corner to start your personalized journey.</p>
            <div className="flex justify-center">
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-[#b47878]"
              >
                <ArrowRight className="w-8 h-8 rotate-45" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <FinalCTAAndFooter />
    </main>
  );
}
