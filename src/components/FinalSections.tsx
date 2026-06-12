'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const OperationSection = () => {
  const [activeStep, setActiveStep] = useState('harvest');

  const steps = [
    { id: 'harvest', name: 'Ethical Harvest', label: 'Phase One', desc: 'Sourcing the finest Tanzanian botanicals directly from local ethical farmers and wild harvesters.' },
    { id: 'extract', name: 'Pure Extraction', label: 'Phase Two', desc: 'Traditional steam distillation and cold-pressing to preserve the full potency and therapeutic profile of every oil.' },
    { id: 'blend', name: 'Master Blending', label: 'Phase Three', desc: 'Guided by aromatherapy principles, we create intricate scent layers that balance the mind and body.' },
    { id: 'pour', name: 'Hand Poured', label: 'Phase Four', desc: 'Crafted in small batches using our signature coconut-soy wax blend for a clean, sustainable, and long-lasting burn.' },
    { id: 'cure', name: 'Patient Curing', label: 'Phase Five', desc: 'Every candle is cured for three weeks to ensure maximum scent throw and perfect wax stability before leaving our studio.' },
    { id: 'ritual', name: 'Sensory Ritual', label: 'Phase Six', desc: 'Integrating your purchase into a daily wellness ritual designed to ground your space and elevate your mood.' },
  ];

  const currentData = steps.find(s => s.id === activeStep);

  return (
    <section id="company" className="bg-[#fcfcfc] py-24 px-6 border-b border-gray-100 font-sans antialiased w-full overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Typography Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 pb-8 border-b border-gray-100 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="max-w-xl">
            <div className="text-xs font-mono tracking-widest text-gray-400 uppercase mb-3">03 / Process</div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 leading-[1.15]">
              Crafting tranquility through patient processes
            </h2>
          </div>
          <div className="flex items-center gap-4 text-gray-400 font-mono text-xs tracking-wider uppercase">
            <span>@artisanal</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full" />
            <span>@nawwi</span>
          </div>
        </motion.div>

        {/* Dynamic Interactive Layout Grid */}
        <div className="flex flex-col lg:flex-row items-stretch gap-12 w-full mt-12">
          
          {/* Navigation Controls Left Sidebar */}
          <div className="w-full lg:w-72 flex flex-col gap-2 shrink-0">
            {steps.map((step) => {
              const isActive = activeStep === step.id;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className="w-full text-left py-3.5 px-4 rounded-xl flex items-center justify-between transition-all duration-200 group text-sm"
                >
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono tracking-wider uppercase text-gray-400 mb-0.5">
                      {step.label}
                    </span>
                    <span className={`font-medium transition-colors ${isActive ? 'text-black font-semibold' : 'text-gray-500 group-hover:text-gray-900'}`}>
                      {step.name}
                    </span>
                  </div>
                  
                  {isActive ? (
                    <motion.div layoutId="activeStepIndicator" className="w-2 h-2 rounded-full bg-black" />
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-0.5" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Interactive Presentation Screen Block */}
          <div className="flex-1 bg-white border border-gray-100 rounded-2xl p-10 md:p-14 flex flex-col justify-center relative shadow-sm min-h-[320px]">
            {/* Minimalist Top corner accent element inspired by line-art aesthetics */}
            <div className="absolute top-6 left-6 w-8 h-8 opacity-20 border-t-2 border-l-2 border-black" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-xl"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">
                  {currentData?.name}
                </h3>
                <p className="text-gray-500 text-base leading-relaxed font-light">
                  {currentData?.desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export const DataScienceSection = () => {
  const services = [
    { title: 'Scent Matching', desc: 'Personalized fragrance consultation using our AI engine to find your emotional scent signature.', pill: 'AI Powered' },
    { title: 'Subscription Box', desc: 'Monthly wellness deliveries featuring new seasonal candles, crystals, and Tanzanian tea blends.', pill: 'Curated' },
    { title: 'Custom Gifting', desc: 'Bespoke candle designs and scent profiles for weddings, corporate events, and special celebrations.', pill: 'Bespoke' },
    { title: 'Home Consultation', desc: 'Expert guidance on how to layer scents throughout your home to create distinct atmospheric zones.', pill: 'Premium' },
    { title: 'Diffuser Blends', desc: 'Highly concentrated pure essential oil blends for ultrasonic and nebulizing diffusers.', pill: 'Pure Extract' },
    { title: 'Wellness Coaching', desc: 'Holistic support to integrate sensory practices into a comprehensive self-care routine.', pill: 'Holistic' },
    { title: 'Studio Tours', desc: 'Go behind the scenes at our Dar es Salaam studio to see our artisanal process in person.', pill: 'Experience' },
    { title: 'Partner Venues', desc: 'Experience Nawwi scents at the finest luxury hotels and spas across Tanzania and Zanzibar.', pill: 'Luxury' },
  ];

  return (
    <section className="bg-white py-24 px-6 border-b border-gray-100 text-black font-sans antialiased w-full overflow-hidden">
      
      {/* Dynamic Header Block Layout */}
      <div className="max-w-6xl mx-auto w-full mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full pb-8 border-b border-gray-100 flex flex-col md:flex-row items-start md:items-end justify-between gap-6"
        >
          <div className="max-w-xl">
            <div className="text-xs font-mono tracking-widest text-gray-400 uppercase mb-3">04 / Offerings</div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Wellness Services & Bespoke Scenting
            </h2>
          </div>
          <p className="text-gray-400 text-xs max-w-xs leading-relaxed font-light font-mono uppercase tracking-wider">
            Beyond the candle: comprehensive sensory support for your personal sanctuary.
          </p>
        </motion.div>
      </div>

      {/* Grid Layout inspired by Editorial Presentation Panels */}
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        {services.map((s, i) => (
          <motion.div
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group flex flex-col justify-between relative border-t border-gray-100 pt-6"
          >
            <div>
              {/* Floating style label overlay badges mimicking Screenshot 2 */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-mono font-medium tracking-wider text-gray-400 uppercase bg-gray-50 px-2.5 py-1 rounded-full group-hover:bg-black group-hover:text-white transition-colors">
                  {s.pill}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-black transition-colors" />
              </div>
              
              <h3 className="text-base font-semibold tracking-tight text-gray-900 mb-2">
                {s.title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed font-light">
                {s.desc}
              </p>
            </div>

            <div className="mt-8 pt-4 flex items-center justify-between w-full border-t border-dashed border-gray-100 group-hover:border-gray-200 transition-colors">
              <span className="text-[10px] font-mono text-gray-300 group-hover:text-black transition-colors">Explore service</span>
              <div className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-black transition-colors">
                <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-white transition-colors" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

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
  ];

  return (
    <section className="bg-[#fcfcfc] py-24 px-6 border-b border-gray-100 text-black font-sans antialiased w-full overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-16 w-full">
        
        {/* Left Area Content Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:w-4/12 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-4 text-gray-400 font-mono text-xs mb-6 tracking-widest uppercase">
              <span>@philosophy</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full" />
              <span>@values</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-[1.15] mb-6">
              Why Choose <br />
              <span className="text-gray-400 font-light italic">Nawwi Wellness</span>
            </h2>

            <p className="text-gray-500 text-sm leading-relaxed font-light max-w-sm">
              Our uncompromising devotion to pristine raw ingredients and intentional, data-supported design choices balances deep luxury with clean sustainability.
            </p>
          </div>
        </motion.div>

        {/* Right Side Matrix List Elements */}
        <div className="lg:w-8/12 w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="flex flex-col border-t border-gray-100 pt-5 group relative"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-[10px] text-gray-400 font-semibold tracking-wider">
                  0{i + 1}
                </span>
                <h4 className="font-semibold text-sm text-gray-900 tracking-tight transition-colors group-hover:text-gray-600">
                  {reason.title}
                </h4>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed font-light">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};