'use client';
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export const OperationSection = () => {
  const [activeStep, setActiveStep] = useState('harvest')

  const steps = [
    { id: 'harvest', name: 'Ethical Harvest', label: 'Phase One', desc: 'Sourcing the finest Tanzanian botanicals directly from local ethical farmers and wild harvesters.' },
    { id: 'extract', name: 'Pure Extraction', label: 'Phase Two', desc: 'Traditional steam distillation and cold-pressing to preserve the full potency and therapeutic profile of every oil.' },
    { id: 'blend', name: 'Master Blending', label: 'Phase Three', desc: 'Guided by aromatherapy principles, we create intricate scent layers that balance the mind and body.' },
    { id: 'pour', name: 'Hand Poured', label: 'Phase Four', desc: 'Crafted in small batches using our signature coconut-soy wax blend for a clean, sustainable, and long-lasting burn.' },
    { id: 'cure', name: 'Patient Curing', label: 'Phase Five', desc: 'Every candle is cured for three weeks to ensure maximum scent throw and perfect wax stability before leaving our studio.' },
    { id: 'ritual', name: 'Sensory Ritual', label: 'Phase Six', desc: 'Integrating your purchase into a daily wellness ritual designed to ground your space and elevate your mood.' },
  ]

  const currentData = steps.find(s => s.id === activeStep)

  return (
    <section id="company" className="bg-white border-b-4 border-black text-black font-sans antialiased w-full overflow-hidden">
      
      {/* Top Retro Pixel Indicator Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full bg-[#111113] border-b-4 border-black py-16 px-8 text-center flex flex-col items-center relative"
      >
        <div className="flex items-center gap-3 mb-6 select-none">
          <svg width="28" height="28" viewBox="0 0 16 16" fill="none" className="text-[#b47878]">
            <path d="M6 1h4v2H6V1zm5 3h2v2h-2V4zM3 4h2v2H3V4zm5 5h2v2H8V9zm5 2h2v2h-2v-2zM1 11h2v2H1v-2zM6 13h4v2H6v-2z" fill="currentColor"/>
          </svg>
        </div>
        <h2 className="text-3xl md:text-5xl font-normal tracking-tight max-w-4xl text-white uppercase leading-tight font-serif">
          Crafting tranquility through patient, artisanal processes.
        </h2>
      </motion.div>

      {/* Main Multi-tiered Structural Grid Blocks */}
      <div className="mx-auto flex flex-col lg:flex-row items-stretch w-full min-h-[480px] bg-neutral-100">
        
        <div className="w-full lg:w-80 flex flex-col justify-start border-b-4 lg:border-b-0 lg:border-r-4 border-black p-6 lg:p-8 bg-white">
          <div className="flex flex-col gap-3 w-full">
            {steps.map((step) => {
              const isActive = activeStep === step.id
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`group relative border-4 border-black px-4 py-4 font-mono text-xs font-bold uppercase tracking-wider transition-all duration-75 text-left ${
                    isActive 
                      ? 'bg-[#b47878] text-white translate-x-[4px] translate-y-[4px] shadow-none'
                      : 'bg-white text-neutral-500 hover:text-black shadow-[4px_4px_0px_0px_#000000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none'
                  }`}
                >
                  <span className="absolute inset-0 border-t-2 border-l-2 border-white/30 pointer-events-none" />
                  <span className="absolute inset-0 border-b-2 border-r-2 border-black/30 pointer-events-none" />
                  
                  <span className="relative flex items-center justify-between w-full">
                    <span className="flex items-center gap-3">
                      <span className={`text-[9px] font-mono ${isActive ? 'text-white font-extrabold' : 'text-neutral-400 group-hover:text-black'}`}>
                        {step.label}
                      </span>
                      <span className={isActive ? 'font-extrabold' : ''}>
                        {step.name}
                      </span>
                    </span>
                    {isActive && <ArrowRight className="w-3.5 h-3.5 text-white" />}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        <div className="flex-1 p-6 md:p-12 bg-neutral-100 flex flex-col justify-center items-stretch relative">
          <div className="bg-white border-4 border-black p-8 md:p-12 min-h-[300px] flex flex-col justify-center relative shadow-[8px_8px_0px_0px_#000000]">
            <span className="absolute inset-0 border-t-4 border-l-4 border-white pointer-events-none" />
            <span className="absolute inset-0 border-b-4 border-r-4 border-neutral-300 pointer-events-none" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.15 }}
                className="max-w-xl relative"
              >
                <h3 className="text-4xl font-serif text-neutral-900 mb-4 italic">
                  {currentData?.name}.
                </h3>
                <p className="text-neutral-700 text-sm md:text-base leading-relaxed font-normal">
                  {currentData?.desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  )
}

export const DataScienceSection = () => {
  const services = [
    { title: 'Scent Matching', desc: 'Personalized fragrance consultation using our AI engine to find your emotional scent signature.', accent: true},
    { title: 'Subscription Box', desc: 'Monthly wellness deliveries featuring new seasonal candles, crystals, and Tanzanian tea blends.', accent: false },
    { title: 'Custom Gifting', desc: 'Bespoke candle designs and scent profiles for weddings, corporate events, and special celebrations.', accent: false},
    { title: 'Home Consultation', desc: 'Expert guidance on how to layer scents throughout your home to create distinct atmospheric zones.', accent: false },
    { title: 'Diffuser Blends', desc: 'Highly concentrated pure essential oil blends for ultrasonic and nebulizing diffusers.', accent: false},
    { title: 'Wellness Coaching', desc: 'Holistic support to integrate sensory practices into a comprehensive self-care routine.', accent: true },
    { title: 'Studio Tours', desc: 'Go behind the scenes at our Dar es Salaam studio to see our artisanal process in person.', accent: false},
    { title: 'Partner Venues', desc: 'Experience Nawwi scents at the finest luxury hotels and spas across Tanzania and Zanzibar.', accent: false},
  ]

  return (
    <section className="bg-white border-b-4 border-black text-black font-sans antialiased w-full overflow-hidden">
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full border-b-4 border-black bg-white"
      >
        <div className="w-full mx-auto px-8 md:px-12 py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl font-serif uppercase tracking-tight leading-none italic">
              Wellness Services & Bespoke Scenting
            </h2>
          </div>
          <p className="text-black/50 text-xs max-w-md leading-relaxed font-normal font-mono">
            Beyond the candle: comprehensive sensory support for your personal sanctuary or commercial space.
          </p>
        </div>
      </motion.div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch bg-black gap-[4px]">
        {services.map((s, i) => (
          <motion.div
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="p-8 pb-10 bg-white flex flex-col justify-between group transition-colors hover:bg-neutral-50 relative"
          >
            <span className="absolute inset-0 border-t-2 border-l-2 border-neutral-100 pointer-events-none group-hover:border-white" />
            
            <div className="relative">
              {s.accent && <div className="absolute -top-8 -left-8 -right-8 h-2 bg-[#b47878]" />}
              
              <div className="flex items-center justify-between mb-8 pt-2">
                <svg width="20" height="20" viewBox="0 0 10 10" fill="none" className="text-black/30 group-hover:text-[#b47878] transition-colors">
                  <path d="M1 1h8v1H1V1zm0 3h8v1H1V4zm0 3h6v1H1V7z" fill="currentColor"/>
                </svg>
              </div>
              
              <h3 className="text-sm font-bold tracking-wider text-black mb-3 uppercase group-hover:text-[#b47878] transition-colors font-mono">
                {s.title}
              </h3>
              <p className="text-neutral-600 text-xs leading-relaxed font-normal max-w-[210px]">
                {s.desc}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t-2 border-black/5 flex items-center justify-between w-full text-[10px] font-mono text-neutral-400 group-hover:text-black transition-colors uppercase font-bold">
              <ArrowRight className="w-3 h-3 text-neutral-300 group-hover:text-[#b47878] transform group-hover:translate-x-0.5 transition-all stroke-[2.5px]" />
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  )
}

export const WhySection = () => {
  const reasons = [
    { title: 'Tanzanian Botanicals', desc: 'Using local ingredients like Zanzibar clove, Lemongrass, and Baobab oil for authentic scent profiles.' },
    { title: 'AI Scent Concierge', desc: 'Scientific approach to wellness through personalized scent recommendations based on your unique mood.' },
    { title: 'Pure Ingredients', desc: 'No synthetic phthalates, parabens, or paraffin. Just clean-burning coconut-soy wax and therapeutic oils.' },
    { title: 'Artisanal Studio', desc: 'Every product is hand-crafted in our Dar es Salaam workshop with obsessive attention to detail.' },
    { title: 'Eco-Conscious Packaging', desc: 'Plastic-free shipping and reusable glass vessels that can be repurposed throughout your home.' },
    { title: 'Community Support', desc: 'A portion of every sale supports women-led agricultural cooperatives across rural Tanzania.' },
    { title: 'Immersive Events', desc: 'Monthly workshops and retreats that foster deep connection and sensory mindfulness.' },
    { title: 'Luxury Standard', desc: 'Crafted to compete with the finest international fragrance houses while remaining rooted in African heritage.' }
  ]

  return (
    <section className="bg-white border-b-4 border-black text-black font-sans antialiased w-full overflow-hidden">
      <div className="mx-auto flex flex-col lg:flex-row items-stretch w-full">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:w-4/12 p-8 md:p-12 lg:p-16 flex flex-col justify-between border-b-4 lg:border-b-0 lg:border-r-4 border-black bg-[#111113] text-white relative"
        >
          <div>
            <div className="flex items-center gap-1.5 mb-8 select-none">
              <svg width="24" height="24" viewBox="0 0 12 12" fill="none" className="text-[#b47878]">
                <path d="M2 2h8v2H2V2zm0 3h8v2H2V5zm0 3h8v2H2V8z" fill="currentColor"/>
              </svg>
            </div>
            <h2 className="text-4xl font-serif italic tracking-tight uppercase leading-[0.9] text-white">
              Why Choose <span className="text-[#b47878] block font-bold not-italic">Nawwi Wellness.</span>
            </h2>
          </div>
        </motion.div>

        <div className="lg:w-8/12 grid grid-cols-1 md:grid-cols-2 items-stretch bg-black gap-[4px]">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="p-8 lg:p-10 flex flex-col justify-start group bg-white hover:bg-neutral-50 transition-all relative shadow-[inset_0_0_0_2px_rgba(0,0,0,0.05)]"
            >
              <span className="absolute inset-0 border-t-2 border-l-2 border-neutral-100 pointer-events-none group-hover:border-white" />
              <span className="absolute inset-0 border-b-2 border-r-2 border-neutral-200 pointer-events-none" />
              
              <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-neutral-200 group-hover:bg-[#b47878] transition-colors" />

              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-[9px] bg-black text-white px-1.5 py-0.5 font-bold border border-black group-hover:bg-[#b47878] transition-colors">
                  0{i + 1}
                </span>
                <h4 className="font-bold text-sm uppercase tracking-wider text-neutral-900 transition-colors font-mono">
                  {reason.title}
                </h4>
              </div>
              <p className="text-neutral-600 text-xs leading-relaxed max-w-sm font-normal">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
