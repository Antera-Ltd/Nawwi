'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const TrustSection = () => {
  // Overlapping cards data to match the artwork presentation in Screenshot 1
  const cards = [
    { image: '/src/assets/spa-treatment-dark.jpg', rotate: '-12deg', x: -60, y: 15, zIndex: 10 },
    { image: '/src/assets/pexels-irina-anastasiu-10540-54512.jpg', rotate: '-6deg', x: -20, y: 5, zIndex: 20 },
    { image: '/src/assets/pexels-mike-art-visual-creator-photography-and-video-2159421235-36547455.jpg', rotate: '4deg', x: 20, y: 0, zIndex: 30 },
    { image: '/src/assets/spa-treatment-dark.jpg', rotate: '12deg', x: 60, y: 10, zIndex: 10 },
  ];

  return (
    <section className="bg-[#fcfcfc] py-28 px-6 overflow-hidden relative selection:bg-black selection:text-white">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Hero Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight text-gray-900 leading-[1.1] mb-8 font-sans">
            A place to display your <br className="hidden md:inline" />
            <span className="relative inline-block">
              masterpiece.
              {/* Floating @coplin-style pill badge */}
              <span className="absolute -top-8 -left-16 bg-[#2563eb] text-white px-4 py-1.5 rounded-full text-xs font-medium tracking-wide shadow-md transform -rotate-6 hidden md:block">
                @artisanal
              </span>
              {/* Floating @andrea-style pill badge */}
              <span className="absolute -bottom-6 -right-16 bg-[#16a34a] text-white px-4 py-1.5 rounded-full text-xs font-medium tracking-wide shadow-md transform rotate-6 hidden md:block">
                @sustainable
              </span>
            </span>
          </h1>
        </motion.div>

        {/* Floating Overlapping Showcase Deck */}
        <div className="relative w-full max-w-3xl h-64 md:h-80 my-16 flex items-center justify-center">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, y: 40, rotate: 0 }}
              whileInView={{ opacity: 1, scale: 1, y: card.y, rotate: card.rotate }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ zIndex: card.zIndex }}
              className="absolute w-40 h-52 md:w-52 md:h-64 rounded-2xl overflow-hidden bg-gray-100 shadow-xl border-4 border-white transform transition-transform duration-300 hover:scale-105 hover:z-50"
            >
              <Image 
                src={card.image} 
                alt="Sensory presentation" 
                fill 
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Subtext description underneath the deck */}
        <p className="text-gray-500 text-xs md:text-sm max-w-xl leading-relaxed tracking-wide font-light mb-10">
          Combining ancient Tanzanian botanical knowledge with modern wellness practices to create scents that heal. Artists can display their masterpieces, and buyers can discover and enjoy.
        </p>


        {/* 3 Pillars - Clean minimal footers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-32 w-full border-t border-gray-100 pt-16 text-left">
          {[
            { title: 'Artisanal Quality', desc: 'Every candle is hand-poured in small batches using premium coconut-soy wax and locally sourced essential oils.' },
            { title: 'Sustainable Sourcing', desc: 'Commitment to the environment through plastic-free packaging and supporting local ethical agriculture in Tanzania.' },
            { title: 'Intentional Craft', desc: 'Small-batch production ensures every candle meets our uncompromising standards of excellence.' }
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export const ServicesSection = () => {
  return (
    <section className="bg-white py-28 px-6 border-t border-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side: Editorial Typography & Content */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full py-4">
          <div>
            {/* Architectural minimalist line art placeholder */}
            <div className="w-16 h-10 mb-8 flex flex-col justify-between opacity-40">
              <div className="w-full h-[2px] bg-black rounded-full" />
              <div className="w-3/4 h-[2px] bg-black rounded-full" />
              <div className="w-1/2 h-[2px] bg-black rounded-full" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-[1.15] mb-6 font-sans">
              Bringing your <br />community together
            </h2>
            
            <p className="text-gray-500 text-base leading-relaxed font-light mb-8 max-w-md">
              We create sensory products that facilitate deep connection with oneself and the surrounding environment. Blends designed to target specific emotional states.
            </p>

            <button className="px-8 py-3.5 bg-[#141414] text-white rounded-full text-sm font-medium hover:bg-black transition-all shadow-md">
              Get started
            </button>
          </div>

          {/* Outlined Testimonial Card matching Screenshot 2 */}
          <div className="mt-16 p-6 border border-gray-200 rounded-lg bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.05)] relative">
            <p className="text-xs font-mono italic text-gray-600 leading-relaxed">
              "The standard chunk of premium aromas used since the 1500s is reproduced below for those interested. Cultivated thoughtfully from deep within Tanzania."
            </p>
            
            {/* Social Icons row */}
            <div className="flex gap-3 mt-6 text-gray-400">
              <span className="w-4 h-4 rounded-full bg-gray-200 inline-block" />
              <span className="w-4 h-4 rounded-full bg-gray-200 inline-block" />
              <span className="w-4 h-4 rounded-full bg-gray-200 inline-block" />
            </div>
          </div>
        </div>

        {/* Right Side: Editorial Bento Layout Grid (Screenshot 2 Style) */}
        <div className="lg:col-span-7 grid grid-cols-3 grid-rows-3 gap-3 aspect-square w-full max-w-xl mx-auto">
          
          {/* Box 1: Abstract Graphic */}
          <div className="bg-[#eab308] opacity-90 rounded-none flex items-center justify-center p-4 relative overflow-hidden group">
            <div className="w-20 h-20 rounded-full border-2 border-dashed border-white/40 flex items-center justify-center animate-spin-slow">
              <span className="text-white text-[10px] tracking-widest uppercase font-bold">Love</span>
            </div>
          </div>

          {/* Box 2: Image 1 */}
          <div className="col-span-2 relative overflow-hidden bg-gray-100">
            <Image src="/src/assets/spa-treatment-dark.jpg" alt="Aromatherapy" fill className="object-cover" />
            <span className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-[10px] font-medium tracking-wide shadow-sm text-black">
              Inclusive
            </span>
          </div>

          {/* Box 3: Big Image 2 */}
          <div className="row-span-2 relative overflow-hidden bg-gray-100">
            <Image src="/src/assets/pexels-irina-anastasiu-10540-54512.jpg" alt="Home Sanctuary" fill className="object-cover" />
            <span className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-[10px] font-medium tracking-wide shadow-sm text-black">
              Creative
            </span>
          </div>

          {/* Box 4: Center Profile Grid Image */}
          <div className="col-span-2 relative overflow-hidden bg-gray-100">
            <Image src="/src/assets/pexels-mike-art-visual-creator-photography-and-video-2159421235-36547455.jpg" alt="Mindful Rituals" fill className="object-cover" />
          </div>

          {/* Box 5: Image 3 */}
          <div className="relative overflow-hidden bg-gray-100">
            <Image src="/src/assets/spa-treatment-dark.jpg" alt="Atmosphere" fill className="object-cover" />
            <span className="absolute bottom-3 left-3 bg-white px-3 py-1 rounded-full text-[10px] font-medium tracking-wide shadow-sm text-black">
              Diverse
            </span>
          </div>

          {/* Box 6: Graphic Element */}
          <div className="bg-[#38bdf8] flex items-center justify-center p-4">
            <span className="text-white text-4xl font-extralight">✦</span>
          </div>

          {/* Box 7: Image 4 */}
          <div className="relative overflow-hidden bg-gray-100">
            <Image src="/src/assets/pexels-irina-anastasiu-10540-54512.jpg" alt="Sensory" fill className="object-cover" />
            <span className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-[10px] font-medium tracking-wide shadow-sm text-black">
              Caring
            </span>
          </div>

          {/* Box 8: Abstract Shape Geometry */}
          <div className="bg-[#6366f1] flex items-center justify-center relative overflow-hidden">
            <div className="w-16 h-16 bg-white rounded-full mix-blend-screen opacity-40 translate-x-4" />
            <div className="w-16 h-16 bg-white rounded-full mix-blend-screen opacity-40 -translate-x-4" />
          </div>

        </div>

      </div>
    </section>
  );
};