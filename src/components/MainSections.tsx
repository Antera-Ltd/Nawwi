'use client';
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export const TrustSection = () => {
  return (
    <section className="bg-white border-b border-black text-black font-sans antialiased w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex flex-col lg:flex-row items-stretch w-full"
      >
        
        {/* Left Side Label Block */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:w-4/12 p-8 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-black bg-white flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-1.5 mb-8 select-none">
              {/* Pixel Badge Graphic */}
              <svg width="20" height="20" viewBox="0 0 10 10" fill="none" className="text-[#FA520F]">
                <path d="M1 1h8v2H1V1zm1 4h6v1H2V5zm2 3h2v1H4V8z" fill="currentColor"/>
              </svg>

            </div>
            <h3 className="text-3xl font-normal tracking-tight uppercase leading-[0.95] mb-4">
              System Performance Integrity
            </h3>
            <p className="text-neutral-500 text-xs leading-relaxed max-w-xs font-normal">
              Continuous infrastructure verification parameters across active engagement channels and core telemetry distribution layers.
            </p>
          </div>
        </motion.div>

        {/* Right Side Content Grid matching Mistral asymmetric column rules */}
        <div className="lg:w-8/12 p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch bg-neutral-50/10">
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-8 bg-white flex flex-col justify-between min-h-[220px] group relative border-4 border-black transition-all duration-75 shadow-[4px_4px_0px_0px_#000000]"
          >
            {/* 3D block shadows and orange indicators */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#FA520F]" />
            <span className="absolute inset-0 border-t-2 border-l-2 border-black/5 pointer-events-none" />
            <span className="absolute inset-0 border-b-2 border-r-2 border-black/20 pointer-events-none" />

            <div className="pt-6 relative">
              <h4 className="text-lg font-bold uppercase tracking-wider text-black mb-2 font-mono group-hover:text-[#FA520F] transition-colors">
                Maximum Availability
              </h4>
              <p className="text-neutral-500 text-xs leading-relaxed">
                Engineered for strict operational uptime loops to maintain persistent connection states across all regional carrier gateways.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="p-8 bg-white flex flex-col justify-between min-h-[220px] group relative border-4 border-black transition-all duration-75 shadow-[4px_4px_0px_0px_#000000]"
          >
            <span className="absolute inset-0 border-t-2 border-l-2 border-black/5 pointer-events-none" />
            <span className="absolute inset-0 border-b-2 border-r-2 border-black/20 pointer-events-none" />

            <div className="pt-6 relative">
              <h4 className="text-lg font-bold uppercase tracking-wider text-black mb-2 font-mono group-hover:text-[#FA520F] transition-colors">
                Zero Compromise
              </h4>
              <p className="text-neutral-500 text-xs leading-relaxed">
                Isolated sandbox boundaries ensuring complete transaction protection, customer confidentiality, and regulatory alignment.
              </p>
            </div>
          </motion.div>

        </div>

      </motion.div>
    </section>
  )
}

export const ServicesSection = () => {
  const keyHighlights = [
    {
      title: 'Neural Optimization',
      desc: 'Deep parameter tuning loops engineered specifically to handle massive scale distributed enterprise learning pipelines safely.',
      accent: true,
      pixelIcon: (
        <svg width="28" height="28" viewBox="0 0 16 16" fill="none" className="text-black group-hover:text-[#FA520F] transition-colors mb-8">
          <path d="M2 2h4v4H2V2zm8 0h4v4h-4V2zM2 10h4v4H2v-4zm8 0h4v4h-4v-4z" fill="currentColor"/>
          <path d="M6 4h4v1H6V4zm0 8h4v1H6v-1zM4 6h1v4H4V6zm7 0h1v4h-1V6z" fill="currentColor" opacity="0.3"/>
        </svg>
      )
    },
    {
      title: 'Secure Compute',
      desc: 'Isolated container boundaries configured directly for sensitive operations, encryption protocols, and sovereign infrastructure storage.',
      accent: false,
      pixelIcon: (
        <svg width="28" height="28" viewBox="0 0 16 16" fill="none" className="text-black group-hover:text-[#FA520F] transition-colors mb-8">
          <path d="M4 2h8v2H4V2zm-2 4h12v6H2V6zm3 3h6v1H5V9z" fill="currentColor"/>
          <path d="M5 4h6v2H5V4z" fill="currentColor" opacity="0.2"/>
        </svg>
      )
    },
    {
      title: 'Global Delivery',
      desc: 'Edge-synchronized routing routers designed to safely pipeline system transactional instructions with zero latency degradation risks.',
      accent: false,
      pixelIcon: (
        <svg width="28" height="28" viewBox="0 0 16 16" fill="none" className="text-black group-hover:text-[#FA520F] transition-colors mb-8">
          <path d="M1 5h14v6H1V5zm3 2h8v2H4V7z" fill="currentColor"/>
          <path d="M6 2h4v3H6V2zm0 9h4v3H6v-3z" fill="currentColor" opacity="0.4"/>
        </svg>
      )
    },
  ]

  return (
    <section id="products" className="bg-white border-b border-black text-black font-sans antialiased w-full overflow-hidden">
      <div className="mx-auto flex flex-col lg:flex-row items-stretch w-full">
        
        {/* Core Capabilities Descriptive Panel */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:w-4/12 p-8 md:p-12 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-black bg-white"
        >
          <div className="max-w-xs">
            <div className="flex items-center gap-1.5 mb-8 select-none">
              <svg width="20" height="20" viewBox="0 0 10 10" fill="none" className="text-black">
                <path d="M1 2h8v6H1V2zm2 2h4v2H3V4z" fill="currentColor"/>
              </svg>
            </div>
            
            <h2 className="text-4xl font-normal tracking-tight uppercase leading-[0.9] mb-6">
              Core Technological <span className="text-[#FA520F] block font-bold">Framework.</span>
            </h2>
            <p className="text-neutral-500 text-xs leading-relaxed font-normal">
              We design specialized software components built to integrate cleanly into complex operational environments and automated messaging setups.
            </p>
          </div>
          
        </motion.div>

        {/* Content Slots Matrix Cards Grid Row Layout */}
        <div className="lg:w-8/12 grid grid-cols-1 md:grid-cols-3 items-stretch divide-y md:divide-y-0 md:divide-x divide-black bg-neutral-50/20">
          {keyHighlights.map((item, i) => (
            <motion.div
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="p-8 lg:p-10 bg-white flex flex-col justify-between min-h-[380px] relative group hover:bg-neutral-50/40 transition-colors"
            >
              {/* Asymmetric orange accent flag at top of highlighted item */}
              {item.accent && <div className="absolute top-0 left-0 right-0 h-1 bg-[#FA520F]" />}
              
              <div>
                <div className="flex items-center justify-between w-full mb-6">
                  {item.pixelIcon}
                </div>
                
                <h3 className="text-sm font-bold uppercase tracking-wider text-black mb-3 group-hover:text-[#FA520F] transition-colors font-mono">
                  {item.title}
                </h3>
                <p className="text-neutral-500 text-xs leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}