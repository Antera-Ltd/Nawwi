'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Target, Users, Landmark, Globe, ChevronRight } from 'lucide-react';

const MagneticButton = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.3);
    y.set((e.clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: useSpring(x, { stiffness: 150, damping: 15 }), y: useSpring(y, { stiffness: 150, damping: 15 }) }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const ScrambleText = ({ text, className = "" }: { text: string; className?: string }) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) return text[index];
            if (char === " ") return " ";
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);
    return () => clearInterval(interval);
  }, [text]);

  return <span className={className}>{displayText}</span>;
};

const GrainOverlay = () => (
  <div 
    className="fixed inset-0 pointer-events-none z-[9998] opacity-[0.03]"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
    }}
  />
);

export const CompanyPage = () => {
  const { t } = useLanguage();
  const [hoveredBlock, setHoveredBlock] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const headerY = useTransform(scrollYProgress, [0, 0.1], [0, -100]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const principles = [
    { title: 'Mission', desc: 'Accelerating digital independence through high-performance engineering.', icon: Target },
    { title: 'Global Reach', desc: 'Deploying edge infrastructure across multiple continents.', icon: Globe },
    { title: 'Governance', desc: 'Absolute compliance with international data safety standards.', icon: Landmark },
    { title: 'Talent', desc: 'A collective of rigorous technical minds.', icon: Users },
  ];

  const matrixBlocks = Array.from({ length: 16 });

  return (
    <div ref={containerRef} className="relative pt-24 pb-20 bg-white min-h-screen text-black font-sans antialiased w-full overflow-hidden">
      <GrainOverlay />
      
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-[#FA520F] z-[9997] origin-left"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch mb-24"
          style={{ y: headerY, opacity: headerOpacity }}
        >
          
          <motion.div 
            className="border border-black bg-white p-8 md:p-12 flex flex-col justify-center relative shadow-[2px_2px_0px_0px_#000000]"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="absolute inset-0 border-t border-l border-neutral-100 pointer-events-none" />
            <span className="absolute inset-0 border-b border-r border-neutral-200 pointer-events-none" />
            
            <motion.h1 
              className="text-5xl md:text-7xl font-normal uppercase tracking-tighter leading-[0.9] mb-8 font-mono"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Agency <br /> of <span className="text-neutral-400 font-bold">Scale.</span>
            </motion.h1>
            
            <motion.p 
              className="text-neutral-600 font-mono text-xs md:text-sm leading-relaxed font-normal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {t('page.company.desc')}
            </motion.p>

            <MagneticButton>
              <motion.button
                className="group flex items-center gap-2 bg-black text-white px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider border border-black hover:bg-[#FA520F] transition-colors mt-8 w-fit"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </MagneticButton>
          </motion.div>

          <motion.div 
            className="min-h-[300px] lg:h-auto border border-black bg-neutral-50 relative overflow-hidden shadow-[4px_4px_0px_0px_#FA520F] p-8 flex items-center justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <span className="absolute inset-0 border-t-2 border-l-2 border-white pointer-events-none" />
            <span className="absolute inset-0 border-b-2 border-r-2 border-neutral-300 pointer-events-none" />
            
            <motion.div 
              className="grid grid-cols-4 gap-2 bg-white border border-black p-4 shadow-[2px_2px_0px_0px_#000000]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {matrixBlocks.map((_, index) => {
                const isShapeA = [1, 5, 9, 10].includes(index);
                const isShapeB = [12, 13, 14].includes(index);
                
                return (
                  <motion.div
                    key={index}
                    onMouseEnter={() => setHoveredBlock(index)}
                    onMouseLeave={() => setHoveredBlock(null)}
                    className={`w-10 h-10 border border-black transition-all duration-100 cursor-crosshair relative ${
                      isShapeA 
                        ? 'bg-black text-white' 
                        : isShapeB 
                        ? 'bg-[#FA520F]' 
                        : 'bg-neutral-100 hover:bg-neutral-200'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    animate={{
                      scale: hoveredBlock === index ? 0.95 : 1,
                    }}
                  >
                    <span className="absolute inset-0 border-t border-l border-white/20 pointer-events-none" />
                    <span className="absolute inset-0 border-b border-r border-black/20 pointer-events-none" />
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {principles.map((item, i) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5 }}
              className="bg-white border border-black p-6 md:p-8 flex flex-col justify-between group shadow-[2px_2px_0px_0px_#000000] relative"
            >
              <span className="absolute inset-0 border-t border-l border-neutral-100 pointer-events-none group-hover:border-neutral-200" />
              <span className="absolute inset-0 border-b border-r border-neutral-200 pointer-events-none" />
              
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.2, type: "spring", stiffness: 200 }}
              >
                <div className="w-10 h-10 border border-black bg-neutral-50 text-black group-hover:bg-[#FA520F] group-hover:text-white flex items-center justify-center mb-6 shadow-[1px_1px_0px_0px_#000000] transition-colors duration-100 shrink-0">
                  <item.icon className="w-4 h-4 stroke-[2.5px]" />
                </div>
              </motion.div>
              
              <motion.h3 
                className="text-base font-bold uppercase mb-3 font-mono tracking-wider text-neutral-900"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3 }}
              >
                <ScrambleText text={item.title} />
              </motion.h3>
              
              <motion.p 
                className="text-neutral-600 font-mono text-xs leading-relaxed font-normal"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.4 }}
              >
                {item.desc}
              </motion.p>

              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FA520F] origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.5, duration: 0.6 }}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default CompanyPage;