'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function OurStoryPage() {
  const timeline = [
    { year: '2023', title: 'The Ethobotanical Search', desc: 'Nawwi began as a small research exploration through coastal and rural Tanzania, mapping indigenous essential oils, local clove reserves, and zero-paraffin carrier alternatives.', img: '/story-1.png' },
    { year: '2024', title: 'The First Hand-Pour', desc: 'Establishing our workshop footprint in Dar es Salaam. We deployed our custom algorithm-driven scent matching profile to calibrate wax blends to personal atmospheric preferences.', img: '/story-2.png' },
    { year: '2025', title: 'Community Sourcing Systems', desc: 'Formalizing fair-wage commercial pipelines directly alongside agricultural cooperatives to source wild Tanzanian lemongrass and organic cold-pressed botanicals.', img: '/story-3.png' }
  ];

  return (
    <main className="bg-white min-h-screen pt-24 text-neutral-900 font-sans antialiased selection:bg-neutral-900 selection:text-white">
      
      {/* Editorial Title Block */}
      <section className="px-6 md:px-12 py-20 border-b border-neutral-200 max-w-7xl mx-auto">
        <span className="font-mono text-xs tracking-widest uppercase text-neutral-400 font-bold">Our Narrative</span>
        <h1 className="text-5xl md:text-8xl font-light tracking-tight mt-4 mb-8 leading-none">
          Tracing lines from <br />
          <span className="font-serif italic font-normal">origin to atmosphere.</span>
        </h1>
        <div className="max-w-2xl text-neutral-500 text-base md:text-lg font-light leading-relaxed space-y-4">
          <p>
            The sensory journey shouldn't be synthetic. Nawwi emerged from a specific desire to bring real, uncompromised botanical integrity into urban architectural environments.
          </p>
        </div>
      </section>

      {/* Chronological Grid Stream */}
      <section className="divide-y divide-neutral-200 border-b border-neutral-200">
        {timeline.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={item.year} className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              {/* Year Label Frame */}
              <div className="lg:col-span-2 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-neutral-200 flex items-start justify-between bg-[#fcfcfc]">
                <span className="font-mono text-2xl font-bold tracking-tight text-neutral-900">{item.year}</span>
                <span className="font-mono text-[10px] text-neutral-300 font-bold">PART 0{index + 1}</span>
              </div>

              {/* Text Focus Area */}
              <div className={`lg:col-span-5 p-8 md:p-16 flex flex-col justify-center border-b lg:border-b-0 border-neutral-200 ${isEven ? 'lg:border-r' : 'lg:order-last lg:border-l'}`}>
                <h3 className="text-xl font-medium tracking-tight mb-4 text-neutral-900">{item.title}</h3>
                <p className="text-neutral-500 text-sm font-light leading-relaxed">{item.desc}</p>
              </div>

              {/* Graphical Context Framing */}
              <div className="lg:col-span-5 min-h-[350px] bg-neutral-50 relative overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover filter grayscale contrast-115 mix-blend-multiply hover:scale-105 transition-transform duration-700 ease-out" 
                />
              </div>

            </div>
          );
        })}
      </section>

      {/* Fine-lined Epilogue Statement */}
      <section className="py-32 px-6 md:px-12 max-w-4xl mx-auto text-center space-y-6">
        <p className="font-serif italic text-2xl text-neutral-800 font-light">
          "We remain deliberately small, patient, and highly structured—ensuring every compound that leaves our studio honors its geological root."
        </p>
        <div className="w-8 h-[1px] bg-neutral-300 mx-auto" />
        <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest block font-bold">Nawwi Laboratory Studio, Dar es Salaam</span>
      </section>

    </main>
  );
}