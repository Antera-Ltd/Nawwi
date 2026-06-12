'use client';
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, Phone, MessageSquare } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'

export const FinalCTAAndFooter = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="w-full bg-white text-black font-sans antialiased border-t border-black flex flex-col overflow-hidden">
      
      {/* SECTION 1: Massive Accent Callout Banner (Rebuilt as a Tetris Brick UI container) */}
      <section className="relative mx-6 my-12 lg:mx-12 border-4 border-black bg-[#b47878] text-white pt-24 pb-20 px-6 lg:px-12 shadow-[8px_8px_0px_0px_#000000] overflow-hidden">
        {/* Tetris 3D Brick Highlights for the whole banner */}
        <span className="absolute inset-0 border-t-4 border-l-4 border-white/30 pointer-events-none" />
        <span className="absolute inset-0 border-b-4 border-r-4 border-black/30 pointer-events-none" />

        {/* High-Fidelity CSS Grain Texture Layer */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.07] mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-12"
        >
          {/* Left: Text Content */}
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-normal tracking-tight leading-[1.1] max-w-2xl">
              {t('hero.description')}
            </h2>
          </div>

          {/* Right: Action Buttons */}
          <div className="flex flex-row items-center gap-4 flex-shrink-0 mb-2">
            {/* Primary White Tetris Block */}
            <button className="group relative border-4 border-black bg-white px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-black shadow-[4px_4px_0px_0px_#000000] transition-all duration-75 active:translate-x-[4px] active:translate-y-[4px] active:shadow-none">
              <span className="absolute inset-0 border-t-2 border-l-2 border-black/10 pointer-events-none" />
              <span className="absolute inset-0 border-b-2 border-r-2 border-black/20 pointer-events-none" />
              
              <span className="relative flex items-center gap-2">
                {t('nav.start_building')}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </button>

            {/* Secondary Dark Tetris Block */}
            <a href="https://wa.me/255760984921" target="_blank" className="group relative border-4 border-black bg-black px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-[4px_4px_0px_0px_#000000] transition-all duration-75 active:translate-x-[4px] active:translate-y-[4px] active:shadow-none hover:bg-neutral-900">
              <span className="absolute inset-0 border-t-2 border-l-2 border-white/20 pointer-events-none" />
              <span className="absolute inset-0 border-b-2 border-r-2 border-black/40 pointer-events-none" />
              
              <span className="relative flex items-center gap-2">
                {t('nav.contact_sales')}
                <ArrowRight className="w-4 h-4 opacity-60" />
              </span>
            </a>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2: Rigid Multi-Column Grid Links Footer */}
      <footer className="bg-white border-b border-black w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch divide-y sm:divide-y-0 sm:divide-x divide-black">
          
          {/* Column 1: Identity / Branding */}
          <div className="p-8 lg:p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <img src="/Nawwi-logo.png" alt="Nawwi Logo" className="h-28 w-28 object-contain filter grayscale" />
                <span className="text-lg font-bold tracking-tight uppercase text-black">Nawwi</span>
              </div>
              <p className="text-black/50 text-xs leading-relaxed max-w-xs font-normal">
                Luxury scent-led wellness from the heart of Tanzania. Discover handcrafted candles and immersive sensory experiences designed for your sanctuary.
              </p>
            </div>
          </div>

          {/* Column 2: Shop & Services */}
          <div className="p-8 lg:p-12">
            <div className="text-[10px] uppercase font-bold tracking-widest text-neutral-400 mb-6">
              Shop
            </div>
            <ul className="space-y-3.5">
              <FooterLink href="/shop">All Candles</FooterLink>
              <FooterLink href="/shop?category=Floral">Floral Collection</FooterLink>
              <FooterLink href="/shop?category=Woody">Woody Collection</FooterLink>
              <FooterLink href="/events">Upcoming Events</FooterLink>
            </ul>
          </div>

          {/* Column 3: Explore */}
          <div className="p-8 lg:p-12">
            <div className="text-[10px] uppercase font-bold tracking-widest text-neutral-400 mb-6">
              Explore
            </div>
            <ul className="space-y-3.5">
              <FooterLink href="/quiz">AI Scent Quiz</FooterLink>
              <FooterLink href="/track">Track Order</FooterLink>
              <FooterLink href="/company">Our Story</FooterLink>
              <FooterLink href="/blog">Wellness Journal</FooterLink>
            </ul>
          </div>

          {/* Column 4: Contact Technical Info */}
          <div className="p-8 lg:p-12">
            <div className="text-[10px] uppercase font-bold tracking-widest text-neutral-400 mb-6">
              Contact
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-black/60 group">
                <Mail className="w-3.5 h-3.5 text-black/40 group-hover:text-[#b47878] transition-colors" />
                <span className="text-xs font-mono select-all group-hover:text-black transition-colors">info@nawwi.group</span>
              </li>
              <li className="flex items-center gap-3 text-black/60 group">
                <Phone className="w-3.5 h-3.5 text-black/40 group-hover:text-[#b47878] transition-colors" />
                <span className="text-xs font-mono select-all group-hover:text-black transition-colors">+255 760 984 921</span>
              </li>
              <a href="https://wa.me/255760984921" target="_blank" className="flex items-center gap-3 text-black/60 group cursor-pointer">
                <MessageSquare className="w-3.5 h-3.5 text-black/40 group-hover:text-[#b47878] transition-colors" />
                <span className="text-xs font-mono group-hover:text-black transition-colors">WhatsApp Support</span>
              </a>
            </ul>
          </div>

        </div>
      </footer>

      {/* SECTION 3: Social Layout and App Download Row */}
      <div className="bg-white pt-12 px-6 lg:px-8 w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left Aligned Clean Social List */}
        <div className="flex items-center gap-5 text-black/80">
          <a href="#" className="hover:text-[#b47878] transition-colors">
            <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href="#" className="hover:text-[#b47878] transition-colors">
            <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="#" className="hover:text-[#b47878] transition-colors">
            <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
          <a href="#" className="hover:text-[#b47878] transition-colors">
            <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* SECTION 4: Replaced Centered Giant Pixel Mascot with Logo */}
      <div className="w-full flex justify-center items-center pt-12 pb-6 bg-white overflow-hidden">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-2"
        >
          <img 
            src="/Nawwi-logo.png" 
            alt="Nawwi Logo" 
            className="h-28 w-28 object-contain"
          />
          <span className="text-xl font-black tracking-tighter text-black font-serif italic">NAWWI</span>
        </motion.div>
      </div>

      {/* SECTION 5: Absolute Bottom Meta Bar */}
      <div className="bg-white border-t border-black/10 py-6 px-6 lg:px-8 w-full">
        <div className="max-w-7xl mx-auto flex flex-row items-center justify-between text-[10px] font-mono text-black/40 font-bold tracking-wider">
          
          <div>
            Nawwi Wellness © {new Date().getFullYear()}
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              {['en', 'sw'].map(lang => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang as any)}
                  className={`uppercase px-2 py-0.5 border border-black/10 transition-colors ${language === lang ? 'bg-[#b47878] text-white border-[#b47878]' : 'bg-neutral-50 hover:text-black'}`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link
      href={href} 
      className="text-xs font-semibold text-black/60 hover:text-[#b47878] transition-colors uppercase tracking-tight block"
    >
      {children}
    </Link>
  </li>
)