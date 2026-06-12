'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const CommunicationSection = () => {
  const categories = [
    { name: 'Floral & Sweet', count: '01' },
    { name: 'Woody & Earthy', count: '02' },
    { name: 'Fresh & Crisp', count: '03' },
    { name: 'Warm & Spicy', count: '04' },
    { name: 'Citrus & Energizing', count: '05' },
    { name: 'Calming Herbs', count: '06' },
  ];

  return (
    <section id="solutions" className="bg-[#fcfcfc] py-24 px-6 border-b border-gray-100 font-sans antialiased w-full overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-16">
        
        {/* Left Side: Clean Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:w-5/12 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-4 text-gray-400 font-mono text-xs mb-6 tracking-widest uppercase">
              <span>@collections</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full" />
              <span>@sanctuary</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-[1.15] mb-6">
              Curated Scent <br />
              <span className="text-gray-400 font-light italic">Collections</span>
            </h2>
            
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm font-light">
              Explore our diverse range of fragrance families, each designed to evoke a specific memory, mood, or atmosphere in your sanctuary.
            </p>
          </div>
        </motion.div>

        {/* Right Side: Elegant Minimalist Matrix Links */}
        <div className="lg:w-7/12 w-full grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
          {categories.map((category, i) => (
            <motion.a
              href={`/shop?category=${encodeURIComponent(category.name)}`}
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group flex flex-col justify-between border-t border-gray-100 pt-6 relative transition-all"
            >
              <div className="flex items-center justify-between text-gray-300 font-mono text-xs mb-4">
                <span>{category.count}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-black transition-colors" />
              </div>

              <div className="flex items-center justify-between gap-4 mt-2">
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
                  {category.name}
                </h3>
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-black transition-all duration-300">
                  <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors transform -translate-x-0.5 group-hover:translate-x-0" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

export const ApplicationSection = () => {
  return (
    <section className="bg-white py-24 px-6 border-b border-gray-100 text-black font-sans antialiased w-full flex flex-col overflow-hidden">
      
      {/* Structural Sub-header Horizontal Banner */}
      <div className="max-w-6xl mx-auto w-full mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-8 border-b border-gray-100"
        >
          <div className="max-w-xl">
            <div className="text-xs font-mono tracking-widest text-gray-400 uppercase mb-3">02 / Experiences</div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Immersive Experiences
            </h2>
          </div>
          <p className="text-gray-500 text-sm max-w-sm leading-relaxed font-light">
            Beyond products, we offer guided workshops and retreats that teach you the art of scent-making and mindful living in beautiful Tanzanian settings.
          </p>
        </motion.div>
      </div>

      {/* Main Split Grid Block Layout */}
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Slot: Workshops */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-between group"
        >
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Scent-Making Workshops
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-md font-light">
              Learn to blend botanical extracts and pour your own signature candles in our monthly intimate workshops.
            </p>
          </div>
          
          <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-gray-50 shadow-sm mt-4">
            <Image 
              src="/src/assets/spa-treatment-dark.jpg" 
              alt="Workshops" 
              fill 
              className="object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
            />
            {/* Screenshot 2 style pill labels overlay */}
            <span className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-[10px] font-medium tracking-wide shadow-sm text-black">
              Monthly
            </span>
          </div>
        </motion.div>

        {/* Right Slot: Retreats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col justify-between group lg:mt-12"
        >
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Wellness Retreats
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-md font-light">
              Escape to our partner venues for multi-day sensory journeys focused on meditation, aromatherapy, and grounding.
            </p>
          </div>
          
          <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-gray-50 shadow-sm mt-4">
            <Image 
              src="/src/assets/pexels-irina-anastasiu-10540-54512.jpg" 
              alt="Retreats" 
              fill 
              className="object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
            />
            <span className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-[10px] font-medium tracking-wide shadow-sm text-black">
              Guided
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export const DataIntelligenceSection = () => {
  const pillars = [
    { title: 'Mood Enhancement' },
    { title: 'Focus & Clarity' },
    { title: 'Stress Relief' },
    { title: 'Sensory Grounding' },
    { title: 'Sleep Optimization' },
    { title: 'Energy Boost' },
  ];

  return (
    <section id="models" className="bg-[#fcfcfc] py-24 px-6 border-b border-gray-100 text-black font-sans antialiased w-full overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Clean Horizontal Strip Grid for Pillars */}
        <div className="lg:w-7/12 w-full order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="p-6 bg-white rounded-xl border border-gray-100 flex items-center justify-between group hover:shadow-md hover:border-gray-200 transition-all duration-300"
            >
              <h4 className="text-base font-medium text-gray-800 group-hover:text-black transition-colors">
                {p.title}
              </h4>
              <span className="w-1.5 h-1.5 bg-gray-200 rounded-full group-hover:bg-black transition-colors" />
            </motion.div>
          ))}
        </div>

        {/* Right Side: Copy Block & Pill CTA */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:w-5/12 w-full order-1 lg:order-2 flex flex-col"
        >
          <div>
            <div className="flex items-center gap-4 text-gray-400 font-mono text-xs mb-6 tracking-widest uppercase">
              <span>@neurology</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full" />
              <span>@concierge</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-[1.15] mb-6">
              Science of <br />
              <span className="text-gray-400 font-light italic">Scent Healing</span>
            </h2>
            
            <p className="text-gray-500 text-sm leading-relaxed mb-10 font-light">
              Our AI-driven scent concierge leverages neurological data to recommend the exact fragrance profiles needed to balance your energy and atmosphere.
            </p>
            
            <Link 
              href="/quiz" 
              className="inline-flex items-center justify-between bg-[#141414] text-white px-6 py-4 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-black transition-all shadow-md group w-full sm:max-w-xs"
            >
              <span>Start Scent Quiz</span>
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
};