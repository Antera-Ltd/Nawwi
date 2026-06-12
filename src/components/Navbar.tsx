'use client';
import React, { useState } from 'react'
import { Menu, X, ChevronDown, ArrowRight, Globe, ShoppingCart, User } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '../context/LanguageContext'

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showLangs, setShowLangs] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const pathname = usePathname()

  const languages: { code: 'en' | 'sw'; name: string }[] = [
    { code: 'en', name: 'EN' },
    { code: 'sw', name: 'SW' }
  ]

  const navLinks = [
    { name: 'Shop', href: '/shop' },
    { name: 'Events', href: '/events' },
    { name: 'Quiz', href: '/quiz' },
    { name: 'Track Order', href: '/track' },
  ]

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black text-xs font-mono font-bold antialiased uppercase tracking-wider h-16">
        <div className="max-w-7xl mx-auto flex items-stretch justify-between h-full">
          
          <div className="flex items-stretch">
            <Link href="/" className="flex items-center gap-3 px-6 border-r border-black hover:bg-neutral-50 transition-colors">
              <img src="/Nawwi-logo.png" alt="Nawwi Logo" className="h-6 w-6 object-contain" />
              <span className="font-black text-black tracking-tighter text-lg font-serif italic">NAWWI</span>
            </Link>

            <div className="hidden lg:flex items-stretch">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-5 border-r border-black transition-colors flex items-center ${
                    pathname === link.href ? 'bg-[#b47878] text-white' : 'text-black hover:bg-neutral-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-stretch">
            <div className="relative flex items-stretch border-l border-black">
              <button
                onClick={() => setShowLangs(!showLangs)}
                className="px-4 flex items-center gap-2 text-black hover:bg-neutral-50 transition-colors"
              >
                <Globe className="w-4 h-4 stroke-[2.5px]" />
                <span>{language}</span>
              </button>
              <AnimatePresence>
                {showLangs && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    className="absolute right-0 top-16 bg-white border border-black shadow-[4px_4px_0px_0px_#000000] w-24 flex flex-col divide-y divide-black"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code)
                          setShowLangs(false)
                        }}
                        className={`w-full px-4 py-2.5 text-left text-xs font-bold transition-colors ${
                          language === lang.code ? 'bg-[#b47878] text-white' : 'text-black hover:bg-neutral-50'
                        }`}
                      >
                        {lang.code}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/shop/checkout" className="px-6 flex items-center gap-2 border-l border-black text-black hover:bg-neutral-50 transition-colors">
              <ShoppingCart size={18} />
            </Link>

            <Link href="/login" className="px-6 flex items-center gap-2 border-l border-black text-black hover:bg-neutral-50 transition-colors">
              <User size={18} />
            </Link>
            
            <Link href="https://wa.me/255760984921" target="_blank" className="px-6 bg-[#b47878] text-white font-bold flex items-center justify-center hover:bg-black border-l border-black transition-colors gap-2 relative group">
              <span>{t('nav.contact_sales')}</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5px]" />
            </Link>
          </div>

          <button
            className="lg:hidden px-6 flex items-center justify-center text-black border-l border-black hover:bg-neutral-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 stroke-[2.5px]" /> : <Menu className="w-5 h-5 stroke-[2.5px]" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 top-16 bg-white z-40 lg:hidden flex flex-col divide-y-4 divide-black border-t border-black overflow-y-auto font-mono font-bold text-xs uppercase tracking-wider"
          >
            <div className="flex flex-col divide-y-2 divide-black text-black">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-6 py-4 hover:bg-neutral-50 ${pathname === link.href ? 'bg-[#b47878] text-white' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-4 hover:bg-neutral-50">Account</Link>
            </div>
            
            <div className="mt-auto bg-neutral-50 flex flex-col divide-y-2 divide-black border-t border-black">
              <Link href="/shop" onClick={() => setIsMobileMenuOpen(false)} className="p-4 font-bold text-center text-black hover:bg-neutral-100 transition-colors">
                {t('nav.start_building')}
              </Link>
              <Link 
                href="https://wa.me/255760984921"
                target="_blank"
                onClick={() => setIsMobileMenuOpen(false)} 
                className="p-4 font-bold text-center bg-[#b47878] text-white hover:bg-black transition-colors"
              >
                {t('nav.contact_sales')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
