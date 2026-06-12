'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Database, Cpu, Radio, Terminal, ArrowRight } from 'lucide-react';

const GrainOverlay = () => (
  <div 
    className="fixed inset-0 pointer-events-none z-[9998] opacity-[0.03]"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
    }}
  />
);

export const SolutionsPage = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const headerY = useTransform(scrollYProgress, [0, 0.1], [0, -80]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const solutions = [
    {
      title: 'Communication Hub',
      desc: 'Centralized management of SMS, USSD, and Social channels for multi-region operations.',
      icon: Radio,
    },
    {
      title: 'Big Data Pipeline',
      desc: 'Ingesting and cleaning high-volume transactional data for real-time auditing.',
      icon: Database,
    },
    {
      title: 'Neural Networks',
      desc: 'Deploying predictive models to forecast demand and automate logistical routing.',
      icon: Cpu,
    },
    {
      title: 'Technical Consulting',
      desc: 'Advisive services for legacy system modernization and digital transformation.',
      icon: Terminal,
    }
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
          
          <motion.span 
            className="text-[#FA520F] font-mono text-xs font-bold uppercase tracking-wider mb-4 block"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Enterprise Solutions 
          </motion.span>
          
          <motion.h1 
            className="text-4xl md:text-7xl font-normal uppercase tracking-tighter leading-[0.9] mb-8 font-mono"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Engineering <br /> 
            <span className="text-neutral-900 font-bold block mt-2">The Future.</span>
          </motion.h1>
          
          <motion.p 
            className="text-neutral-600 font-mono text-sm max-w-2xl leading-relaxed font-normal"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {t('page.solutions.desc')}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5 }}
              className="bg-white border border-black p-8 flex flex-col justify-between group shadow-[2px_2px_0px_0px_#000000] hover:shadow-[1px_1px_0px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all duration-75 relative"
            >
              <span className="absolute inset-0 border-t border-l border-neutral-100 pointer-events-none group-hover:border-neutral-200" />
              <span className="absolute inset-0 border-b border-r border-neutral-200 pointer-events-none" />
              
              <div>
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                >
                  <div className="w-12 h-12 border border-black bg-[#FA520F] text-white flex items-center justify-center mb-8 shadow-[1px_1px_0px_0px_#000000]">
                    <s.icon className="w-5 h-5 stroke-[2.5px]" />
                  </div>
                </motion.div>
                
                <motion.h3 
                  className="text-base font-bold uppercase mb-4 tracking-wider font-mono text-neutral-900 group-hover:text-[#FA520F] transition-colors"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                >
                  {s.title}
                </motion.h3>
                
                <motion.p 
                  className="text-neutral-600 font-mono text-xs leading-relaxed font-normal"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.4 }}
                >
                  {s.desc}
                </motion.p>
              </div>

              <motion.div 
                className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-end"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.5 }}
              >
                <ArrowRight className="w-4 h-4 text-neutral-300 group-hover:text-[#FA520F] transition-colors stroke-[2.5px] group-hover:translate-x-1 transition-transform" />
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

        <motion.div 
          className="mt-20 border border-black bg-neutral-50 flex flex-col md:flex-row items-stretch justify-between relative shadow-[4px_4px_0px_0px_#000000]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="absolute inset-0 border-t-2 border-l-2 border-white pointer-events-none" />
          <span className="absolute inset-0 border-b-2 border-r-2 border-neutral-300 pointer-events-none" />

          <div className="p-8 md:p-12 max-w-xl flex flex-col justify-center relative z-10">
            <motion.h2 
              className="text-2xl md:text-3xl font-bold uppercase mb-4 font-mono tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              From Idea to Impact. Together.
            </motion.h2>
            <motion.p 
              className="text-neutral-600 font-mono text-xs leading-relaxed font-normal"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
Behind every successful product is a team that actually enjoys working together. We build Softwares, the workflows, and the tooling that turn chaos into clarity. Whether you're shipping your first feature or scaling across the country, our platform keeps everyone aligned, informed, and moving forward from whiteboard to deploy.
            </motion.p>
          </div>

          <motion.div 
            className="w-full md:w-1/2 min-h-[200px] border-t md:border-t-0 md:border-l border-black bg-white relative overflow-hidden select-none flex items-center justify-center p-8 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] opacity-70"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 0.7, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.div 
              className="w-16 h-16 border border-black bg-[#FA520F] transform rotate-12 shadow-[2px_2px_0px_0px_#000000]"
              animate={{ rotate: [12, 24, 12] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="w-12 h-12 border border-black bg-white absolute top-8 right-12 transform -rotate-12 shadow-[1px_1px_0px_0px_#000000]"
              animate={{ rotate: [-12, -24, -12] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
};

export default SolutionsPage;