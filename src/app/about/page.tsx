'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutUsPage() {
  const principles = [
    { num: '01', title: 'Ethical Sourcing', desc: 'We coordinate directly with small-scale agricultural partners across Tanzania, ensuring complete transaction transparency and fair-trade standards.' },
    { num: '02', title: 'Clean Biochemistry', desc: 'Zero parabens, zero phthalates, and zero paraffin. Our formulations are grounded strictly in plant-derived components.' },
    { num: '03', title: 'Radical Simplicity', desc: 'Stripping out the noise to build focused, intentional atmospheres that help clarify modern mental landscapes.' }
  ];

  return (
    <main className="bg-[#fcfcfc] min-h-screen pt-24 text-neutral-900 font-sans antialiased selection:bg-neutral-900 selection:text-white">
      
      {/* Intro Hero Section */}
      <section className="px-6 md:px-12 py-16 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8 space-y-4">
            <span className="font-mono text-xs tracking-widest uppercase text-neutral-400 font-bold">Who We Are</span>
            <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-[1.05]">
              Engineering sensory spaces for <br />
              <span className="font-semibold text-neutral-900">mindful living.</span>
            </h1>
          </div>
          <div className="lg:col-span-4">
            <p className="text-neutral-500 text-sm md:text-base leading-relaxed font-light max-w-sm">
              Nawwi is a contemporary wellness laboratory creating functional olfactory products that merge clean botanical extraction with deliberate architectural minimalism.
            </p>
          </div>
        </div>
      </section>

      {/* Asymmetric Split Layout with Image */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Left Text Block */}
          <div className="lg:col-span-6 p-8 md:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-neutral-200">
            <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-6">
              Our studio architecture operates on balance, patience, and rigorous standards.
            </h2>
            <div className="space-y-6 text-neutral-500 text-sm font-light leading-relaxed">
              <p>
                Based out of our production facility in Dar es Salaam, we reject the hyper-accelerated cycles of consumer products. We treat scent formulation as an engineering process testing thresholds, optimal oil temperatures, and structural wax performance.
              </p>
              <p>
                Every glass vessel is selected for its lifecycle utility, manufactured to be repurposed cleanly as home storage or botanical jars once your clean coconut-soy candle reaches its end.
              </p>
            </div>
          </div>

          {/* Right Image Block */}
          <div className="lg:col-span-6 min-h-[400px] relative bg-neutral-100 overflow-hidden">
            <img 
              src="../../assets/us-1.jpp" 
              alt="Nawwi Production Laboratory" 
              className="w-full h-full object-cover absoulte inset-0 filter grayscale contrast-125"
            />
          </div>

        </div>
      </section>

      {/* Core Principles Grid Box */}
      <section className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
        <div className="mb-16">
          <h3 className="text-xs font-mono tracking-widest uppercase text-neutral-400 font-bold">Foundational Pillars</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-neutral-200">
          {principles.map((p) => (
            <div key={p.num} className="p-8 border-b border-r border-neutral-200 flex flex-col justify-between aspect-square bg-white hover:bg-[#fcfcfc] transition-colors duration-300">
              <span className="font-mono text-xs text-neutral-300 font-bold">{p.num}</span>
              <div className="space-y-3">
                <h4 className="font-medium text-base tracking-tight">{p.title}</h4>
                <p className="text-neutral-500 text-sm font-light leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Clean Call to Action Row */}
      <section className="border-t border-neutral-200 bg-neutral-950 text-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h4 className="text-xl font-light tracking-tight">Curious about how we develop custom atmospheric layers?</h4>
            <p className="text-neutral-400 text-xs font-mono tracking-wider mt-1 uppercase">Take our personal aroma assessment profile.</p>
          </div>
          <Link href="/quiz" className="flex items-center gap-3 bg-white text-black font-mono font-bold text-xs uppercase px-6 py-4 tracking-wider hover:bg-neutral-100 transition-colors group">
            <span>Begin Scent Quiz</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </section>

    </main>
  );
}