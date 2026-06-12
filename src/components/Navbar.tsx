'use client';
import React, { useState } from 'react'
import { Menu, X, ChevronDown, ArrowRight, Globe, Layers, Building2, Terminal, BriefcaseBusiness } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '../context/LanguageContext'

interface BlogLink {
  title: string
  href: string
}

interface CategoryItem {
  name: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [showLangs, setShowLangs] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const pathname = usePathname()

  const languages: { code: 'en' | 'sw' | 'pl'; name: string }[] = [
    { code: 'en', name: 'EN' },
    { code: 'sw', name: 'SW' },
    { code: 'pl', name: 'PL' }
  ]

  const blogLatestPosts: BlogLink[] = [
    { title: 'Antera Group Office', href: '/blog' },
    { title: 'Solutions.', href: '/solutions' },
    { title: 'Introducing Search Toolkit', href: '/developers' },
  ]

  const blogCategories: CategoryItem[] = [
    { name: t('nav.products'), href: '/products', icon: Layers },
    { name: t('nav.company'), href: '/company', icon: Building2 },
    { name: t('nav.developers'), href: '/developers', icon: Terminal },
    { name: t('nav.solutions'), href: '/solutions', icon: BriefcaseBusiness },
  ]

  const navLinks: { name: string; href: string; isDropdown?: boolean }[] = [
    { name: 'Shop', href: '/shop' },
    { name: 'Events', href: '/events' },
    { name: 'Quiz', href: '/quiz' },
    { name: 'Track Order', href: '/track' },
    { name: 'Admin', href: '/admin' },
  ]

  return (
    <>
      {/* Top Header */}
      <nav 
        className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black text-xs font-mono font-bold antialiased uppercase tracking-wider"
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="mx-auto flex items-stretch justify-between h-16">
          
          {/* Left Navigation Block */}
          <div className="flex items-stretch">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 px-6 border-r border-black hover:bg-neutral-50 transition-colors flex-shrink-0 relative">
              <span className="absolute inset-0 border-t border-l border-neutral-100 pointer-events-none" />
              <img src="/Nawwi-logo.png" alt="Nawwi Wellness Logo" className="h-6 w-6 object-contain" />
              <span className="font-black text-black tracking-tighter">NAWWI</span>
            </Link>

            {/* Nav Items */}
            <div className="hidden lg:flex items-stretch">
              {navLinks.map((link) => (
                link.isDropdown ? (
                  <div
                    key={link.name}
                    onMouseEnter={() => setActiveMenu('Blog')}
                    className="flex items-stretch"
                  >
                    <Link
                      href={link.href}
                      className={`px-5 border-r border-black transition-colors flex items-center gap-1.5 ${
                        activeMenu === 'Blog' || pathname === link.href ? 'bg-[#FA520F] text-white' : 'text-black hover:bg-neutral-50'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-3 h-3 stroke-[2.5px] transition-transform duration-100 ${activeMenu === 'Blog' ? 'rotate-180' : ''}`} />
                    </Link>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-5 border-r border-black transition-colors flex items-center ${
                      pathname === link.href ? 'bg-neutral-100 text-black' : 'text-black hover:bg-neutral-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* Right Action Block */}
          <div className="hidden lg:flex items-stretch">
            {/* Language Switcher */}
            <div className="relative flex items-stretch border-l border-black">
              <button
                id="lang-selector"
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
                    className="absolute right-0 top-[60px] bg-white border border-black shadow-[2px_2px_0px_0px_#000000] w-24 flex flex-col divide-y divide-black"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        id={`lang-${lang.code}`}
                        onClick={() => {
                          setLanguage(lang.code)
                          setShowLangs(false)
                        }}
                        className={`w-full px-4 py-2.5 text-left text-xs font-bold transition-colors ${
                          language === lang.code ? 'bg-[#FA520F] text-white' : 'text-black hover:bg-neutral-50'
                        }`}
                      >
                        {lang.code}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button className="px-6 flex items-center gap-2 border-l border-black text-black hover:bg-neutral-50 transition-colors">
              <span>{t('nav.start_building')}</span>
              <ChevronDown className="w-3 h-3 stroke-[2.5px] opacity-60" />
            </button>
            
            <Link href="https://wa.me/255760984921" target="_blank" className="px-6 bg-[#FA520F] text-white font-bold flex items-center justify-center hover:bg-black border-l border-black transition-colors gap-2 relative group">
              <span className="absolute inset-0 border-t border-l border-white/20 pointer-events-none group-hover:border-white/10" />
              <span>{t('nav.contact_sales')}</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5px]" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden px-6 flex items-center justify-center text-black border-l border-black hover:bg-neutral-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 stroke-[2.5px]" /> : <Menu className="w-5 h-5 stroke-[2.5px]" />}
          </button>
        </div>

        {/* The Rigid Structural Dropdown Panel */}
        <AnimatePresence>
          {activeMenu === 'Blog' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.05 }}
              className="hidden lg:block absolute left-0 right-0 top-full bg-white border-b border-black z-40"
            >
              <div className="flex max-w-4xl border-r border-black">
                
                {/* Left Column: Latest Posts */}
                <div className="w-7/12 border-r border-black flex flex-col bg-white">
                  <div className="px-6 py-3 text-[10px] uppercase font-bold tracking-wider text-neutral-400 bg-neutral-50 border-b border-black">
                    Latest Briefings
                  </div>
                  <div className="flex flex-col divide-y divide-black">
                    {blogLatestPosts.map((post, i) => (
                      <Link
                        key={i} 
                        href={post.href}
                        className="px-6 py-4 flex items-center justify-between text-black hover:bg-neutral-50 font-bold transition-colors group"
                      >
                        <span className="truncate pr-4">{post.title}</span>
                        <ArrowRight className="w-4 h-4 stroke-[2.5px] text-neutral-300 group-hover:text-[#FA520F] transition-colors shrink-0" />
                      </Link>
                    ))}
                  </div>
                  <Link href="/blog" className="px-6 py-4 mt-auto border-t border-black bg-neutral-50 text-xs font-bold text-[#FA520F] flex items-center gap-1.5 hover:bg-black hover:text-white transition-colors">
                    <span>Read all news</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5px]" />
                  </Link>
                </div>

                {/* Right Column: Categories */}
                <div className="w-5/12 bg-neutral-50 flex flex-col">
                  <div className="px-6 py-3 text-[10px] uppercase font-bold tracking-wider text-neutral-400 bg-neutral-50 border-b border-black">
                    Categories
                  </div>
                  <div className="p-6 flex flex-col gap-4 font-bold text-black">
                    {blogCategories.map((category, i) => (
                      <Link
                        key={i} 
                        href={category.href}
                        className="hover:text-[#FA520F] flex items-center gap-3 transition-colors group"
                      >
                        <div className="w-8 h-8 border border-black bg-white flex items-center justify-center shadow-[1px_1px_0px_0px_#000000] group-hover:bg-[#FA520F] group-hover:text-white transition-colors duration-75 shrink-0">
                          <category.icon className="w-4 h-4 stroke-[2.5px]" />
                        </div>
                        <span>{category.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1 }}
            className="fixed inset-0 top-16 bg-white z-40 lg:hidden flex flex-col divide-y-4 divide-black border-t border-black overflow-y-auto font-mono font-bold text-xs uppercase tracking-wider"
          >
            <div className="flex flex-col divide-y-2 divide-black text-black">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-6 py-4 hover:bg-neutral-50 ${pathname === link.href ? 'bg-[#FA520F] text-white' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Mobile Language Selector Node */}
              <div className="px-6 py-4 bg-neutral-50 flex items-center gap-4 border-b border-black">
                <Globe className="w-4 h-4 stroke-[2.5px] text-neutral-400" />
                {languages.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`px-2 py-0.5 border border-black ${language === lang.code ? 'bg-[#FA520F] text-white shadow-[1px_1px_0px_0px_#000000]' : 'bg-white text-black'}`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mt-auto bg-neutral-50 flex flex-col divide-y-2 divide-black border-t border-black">
              <button className="p-4 font-bold text-center text-black hover:bg-neutral-100 transition-colors">
                {t('nav.start_building')}
              </button>
              <Link 
                href="https://wa.me/255760984921"
                target="_blank"
                onClick={() => setIsMobileMenuOpen(false)} 
                className="p-4 font-bold text-center bg-[#FA520F] text-white hover:bg-black transition-colors"
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