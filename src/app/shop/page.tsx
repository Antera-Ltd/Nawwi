'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Search, Grid, List, Star, ChevronRight, Heart, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ShopPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [view, setView] = useState<'grid' | 'list'>('grid');

  const categories = ['All', 'Floral & Sweet', 'Woody & Earthy', 'Fresh & Crisp', 'Warm & Spicy', 'Diffusers', 'Gift Sets'];

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      let query = supabase.from('products').select('*');
      if (category !== 'All') query = query.eq('category', category);
      const { data } = await query.order('created_at', { ascending: false });
      setProducts(data || []);
      setLoading(false);
    }
    fetchProducts();
  }, [category]);

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#fffaeb] pt-16">
      {/* Hero Banner for Shop */}
      <div className="bg-[#b47878] text-white py-16 px-6 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 mistral-grid" />
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-6xl font-serif italic mb-4">The Scent Collection</h1>
            <p className="text-white/80 text-lg">Handcrafted in Dar es Salaam, delivered to your sanctuary.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 border border-white/20 rounded-3xl hidden lg:block">
            <div className="text-sm font-bold uppercase tracking-widest mb-2">Free Delivery</div>
            <p className="text-xs text-white/60">On orders over $100 within Dar es Salaam.</p>
          </div>
        </div>
      </div>

      {/* Control Bar */}
      <div className="bg-white border-b border-black/5 sticky top-16 z-30 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search scents, notes, vibes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-6 py-2.5 rounded-full border border-neutral-100 outline-none focus:border-[#b47878] transition-colors text-sm"
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest whitespace-nowrap transition-all ${category === cat ? 'bg-[#b47878] text-white shadow-md' : 'bg-neutral-50 text-neutral-500 hover:bg-neutral-100'}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="hidden lg:flex items-center gap-2 border-l border-neutral-100 pl-4">
            <button onClick={() => setView('grid')} className={`p-2 rounded-lg transition-colors ${view === 'grid' ? 'bg-neutral-100 text-[#b47878]' : 'text-neutral-400 hover:text-black'}`}>
              <Grid size={18} />
            </button>
            <button onClick={() => setView('list')} className={`p-2 rounded-lg transition-colors ${view === 'list' ? 'bg-neutral-100 text-[#b47878]' : 'text-neutral-400 hover:text-black'}`}>
              <List size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
           <div className="flex items-center gap-2">
            <Link href="/" className="text-xs text-neutral-400 hover:text-[#b47878]">Home</Link>
            <ChevronRight size={12} className="text-neutral-300" />
            <span className="text-xs font-bold uppercase tracking-widest">Shop</span>
          </div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
            Showing {filteredProducts.length} Results
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
              <div key={i} className="animate-pulse space-y-4">
                <div className="aspect-[4/5] bg-neutral-100 rounded-3xl" />
                <div className="h-4 bg-neutral-100 w-3/4 rounded" />
                <div className="h-4 bg-neutral-100 w-1/4 rounded" />
              </div>
            ))}
          </div>
        ) : (
          <motion.div
            layout
            className={view === 'grid' ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12" : "space-y-8"}
          >
            <AnimatePresence>
              {filteredProducts.map((p) => (
                <ProductCard key={p.id} product={p} view={view} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {!loading && filteredProducts.length === 0 && (
          <div className="text-center py-32 bg-white rounded-[40px] border-4 border-black shadow-[12px_12px_0px_0px_#eadada]">
            <div className="w-20 h-20 bg-neutral-50 rounded-full flex items-center justify-center mx-auto mb-6 text-neutral-300">
              <Search size={32} />
            </div>
            <h3 className="text-3xl font-serif mb-2 italic">Nothing matches that vibe</h3>
            <p className="text-neutral-400 mb-8">Try adjusting your filters or search terms.</p>
            <button onClick={() => {setCategory('All'); setSearch('');}} className="btn-primary">Clear all filters</button>
          </div>
        )}
      </div>

      {/* Featured Recommendation Strip */}
      <section className="bg-black text-white py-20 px-6 mt-20 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 pointer-events-none">
           <img src="/Nawwi-logo.png" className="w-full h-full object-contain scale-150 rotate-12 grayscale" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif italic mb-6">Not sure where to start?</h2>
            <p className="text-lg text-neutral-400 mb-10 leading-relaxed">Our AI Scent Concierge can help you find the perfect fragrance for your space and mood in under 2 minutes.</p>
            <Link href="/quiz" className="inline-flex items-center gap-3 bg-[#b47878] text-white px-10 py-5 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
              Take the Scent Quiz
              <ArrowRight size={20} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="aspect-square bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center font-serif text-3xl italic p-8 text-center text-white/40">Mood Science</div>
             <div className="aspect-square bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center font-serif text-3xl italic p-8 text-center text-white/40">Botanical Layers</div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProductCard({ product, view }: { product: any; view: 'grid' | 'list' }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      className={`bg-white rounded-[32px] overflow-hidden border border-black/5 hover:border-[#b47878]/30 hover:shadow-[0_20px_50px_rgba(180,120,120,0.15)] transition-all duration-500 group flex ${view === 'list' ? 'flex-row h-72' : 'flex-col'}`}
    >
      <Link href={`/shop/${product.id}`} className={`${view === 'list' ? 'w-1/3' : 'w-full'} aspect-square relative overflow-hidden bg-neutral-50`}>
        {product.images?.[0] ? (
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center italic text-neutral-200 font-serif">Awaiting Scent</div>
        )}
        <div className="absolute top-4 left-4 flex gap-2">
           {product.stock <= 5 && product.stock > 0 && (
             <div className="bg-[#b47878] text-white px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest shadow-lg">Low Stock</div>
           )}
           {product.stock === 0 && (
             <div className="bg-black text-white px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest shadow-lg">Sold Out</div>
           )}
        </div>
        <button className="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-sm rounded-full text-neutral-400 hover:text-[#b47878] hover:scale-110 transition-all opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300">
          <Heart size={18} />
        </button>
      </Link>

      <div className={`p-8 flex flex-col justify-between ${view === 'list' ? 'flex-1' : ''}`}>
        <div>
          <div className="flex items-center gap-1 mb-3">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={10} className="fill-[#b47878] text-[#b47878]" />)}
            <span className="text-[10px] text-neutral-400 font-bold ml-1.5 uppercase tracking-tighter">Artisan Verified</span>
          </div>
          <Link href={`/shop/${product.id}`}>
            <h3 className="text-2xl font-serif text-black group-hover:text-[#b47878] transition-colors mb-2 leading-tight">{product.name}</h3>
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
             {product.scent_notes?.slice(0, 3).map((note: string, i: number) => (
               <span key={i} className="text-[9px] font-bold text-neutral-400 uppercase border border-neutral-100 px-2 py-0.5 rounded-full">{note}</span>
             ))}
          </div>
          <p className="text-xs text-neutral-400 line-clamp-2 mb-6 leading-relaxed">{product.description}</p>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-neutral-300 uppercase tracking-widest">Price</span>
            <span className="text-2xl font-serif italic text-black">${product.price}</span>
          </div>
          <button
            disabled={product.stock === 0}
            className="bg-black text-white px-6 py-3 rounded-2xl hover:bg-[#b47878] disabled:bg-neutral-100 disabled:text-neutral-300 transition-all shadow-xl active:scale-95 font-bold text-xs uppercase tracking-widest"
          >
            {product.stock === 0 ? 'Notify Me' : 'Quick Add'}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
