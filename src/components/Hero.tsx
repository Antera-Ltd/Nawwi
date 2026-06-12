'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export const Hero = () => {
  const { t } = useLanguage();
  const heroBackgroundUrl = new URL('../assets/hero.jpg', import.meta.url).href;

  return (
    <section className="relative min-h-screen w-full bg-black font-sans antialiased overflow-hidden">
      {/* Background Image with Sunset Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackgroundUrl})` }}
        />
        {/* Sunset-inspired gradient overlay: dark -> nawwi accent -> cream-yellow */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-[#b47878]/30 to-[#eadada]/20" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          {/* Editorial-Style Headline (Near-Serif) */}
          <h1 className="mb-6 text-5xl font-light leading-[1.2] tracking-tight text-white md:text-7xl lg:text-8xl font-serif">
            The Scent of
            <br />
            Serenity
          </h1>

          {/* Supporting Copy */}
          <p className="mb-12 max-w-xl text-base leading-relaxed text-white/80 md:text-lg font-light">
            Luxury scent-led wellness from the heart of Tanzania. Discover handcrafted candles and immersive sensory experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-6">
            {/* Tetris Block Style Button */}
            <button className="group relative border-4 border-black bg-[#b47878] px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider text-white shadow-[4px_4px_0px_0px_#000000] transition-all duration-75 active:translate-x-[4px] active:translate-y-[4px] active:shadow-none">
              {/* Top/Left inner highlight for 3D brick look */}
              <span className="absolute inset-0 border-t-2 border-l-2 border-white/40 pointer-events-none" />
              {/* Bottom/Right inner shadow */}
              <span className="absolute inset-0 border-b-2 border-r-2 border-black/40 pointer-events-none" />

              <span className="relative flex items-center gap-2">
                Shop Candles
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </button>

            {/* Tetris Secondary Style Button */}
            <Link href="/events" className="group relative border-4 border-black bg-zinc-800 px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider text-white shadow-[4px_4px_0px_0px_#000000] transition-all duration-75 active:translate-x-[4px] active:translate-y-[4px] active:shadow-none hover:bg-zinc-700">
              <span className="absolute inset-0 border-t-2 border-l-2 border-white/20 pointer-events-none" />
              <span className="absolute inset-0 border-b-2 border-r-2 border-black/60 pointer-events-none" />

              <span className="relative">
                View Events
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};