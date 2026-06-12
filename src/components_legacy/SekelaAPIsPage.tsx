'use client';
import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Zap, Shield, MessageSquare, Phone, ArrowRight } from 'lucide-react';

const GrainOverlay = () => (
  <div 
    className="fixed inset-0 pointer-events-none z-[9998] opacity-[0.03]"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
    }}
  />
);

export const SekelaAPIsPage = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const headerY = useTransform(scrollYProgress, [0, 0.1], [0, -80]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const apis = [
    { title: 'SMS Gateway', desc: 'Global SMS delivery with sub-second latency.', icon: MessageSquare },
    { title: 'USSD Engine', desc: 'Build interactive menus for offline users.', icon: Phone },
    { title: 'Voice API', desc: 'Automated infrastructure and IVR systems.', icon: Zap },
    { title: 'Verification', desc: 'Secure 2FA and OTP services.', icon: Shield },
  ];

  return (
    <div ref={containerRef} className="relative pt-24 pb-20 bg-white min-h-screen text-black font-sans antialiased w-full overflow-hidden">
      <GrainOverlay />
      
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-[#FA520F] z-[9997] origin-left"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div 
          className="border border-black bg-white p-8 md:p-12 mb-16 relative shadow-[2px_2px_0px_0px_#000000]"
          style={{ y: headerY, opacity: headerOpacity }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="absolute inset-0 border-t border-l border-neutral-100 pointer-events-none" />
          <span className="absolute inset-0 border-b border-r border-neutral-200 pointer-events-none" />
          
          <motion.h1 
            className="text-4xl md:text-7xl font-normal uppercase tracking-tighter leading-none mb-6 font-mono"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Sekela <span className="text-[#FA520F] font-bold">APIs.</span>
          </motion.h1>
          
          <motion.p 
            className="text-neutral-600 font-mono text-xs md:text-sm max-w-3xl leading-relaxed font-normal"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {t('page.sekela.desc')}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {apis.map((api, i) => (
            <motion.div
              key={api.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5 }}
              className="p-8 md:p-10 border border-black bg-neutral-50 flex flex-col justify-between group shadow-[3px_3px_0px_0px_#000000] hover:shadow-[1px_1px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-75 relative"
            >
              <span className="absolute inset-0 border-t border-l border-white pointer-events-none" />
              <span className="absolute inset-0 border-b border-r border-neutral-200 pointer-events-none" />
              
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.2, type: "spring", stiffness: 200 }}
              >
                <div className="w-12 h-12 border border-black bg-white text-black group-hover:bg-[#FA520F] group-hover:text-white flex items-center justify-center mb-8 shadow-[1px_1px_0px_0px_#000000] transition-colors duration-100 shrink-0">
                  <api.icon className="w-5 h-5 stroke-[2.5px]" />
                </div>
              </motion.div>
              
              <motion.h3 
                className="text-xl font-bold uppercase mb-4 font-mono tracking-tight text-neutral-900 group-hover:text-[#FA520F] transition-colors"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3 }}
              >
                {api.title}
              </motion.h3>
              
              <motion.p 
                className="text-neutral-600 font-mono text-xs leading-relaxed font-normal mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.4 }}
              >
                {api.desc}
              </motion.p>

              <motion.div 
                className="pt-4 border-t border-neutral-200/60 flex items-center justify-start"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.5 }}
              >
                <button className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-black group-hover:text-[#FA520F] transition-colors">
                  <span>View Documentation</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5px]" />
                </button>
              </motion.div>

              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FA520F] origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.6, duration: 0.6 }}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default SekelaAPIsPage;