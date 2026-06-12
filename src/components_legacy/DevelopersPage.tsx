'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Terminal, Cpu, Database, Layout } from 'lucide-react';

export const DevelopersPage = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen text-black font-sans antialiased">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-stretch">
          
          {/* Left Documentation Stack Panel */}
          <div className="lg:w-1/2 flex flex-col justify-between py-4">
            <div>
              <h1 className="text-6xl font-normal tracking-tighter mb-8 leading-[0.9] uppercase font-mono">
                Built for <br />
                <span className="text-[#FA520F] font-bold block mt-2">Engineers.</span>
              </h1>
              <p className="text-neutral-600 font-mono text-sm leading-relaxed max-w-lg mb-12 font-normal">
                {t('page.developers.desc')}
              </p>

              <div className="space-y-4 max-w-md">
                {[
                  { title: 'API Reference', icon: Terminal },
                  { title: 'SDK Libraries', icon: Cpu},
                  { title: 'Data Schema', icon: Database },
                  { title: 'UI Components', icon: Layout }
                ].map((item) => (
                  <div 
                    key={item.title} 
                    className="group relative border-4 border-black bg-white px-5 py-4 flex items-center justify-between cursor-pointer shadow-[4px_4px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-75"
                  >
                    {/* Retro 3D plastic rim highlight inside button blocks */}
                    <span className="absolute inset-0 border-t-2 border-l-2 border-neutral-100 pointer-events-none group-hover:border-neutral-200" />
                    <span className="absolute inset-0 border-b-2 border-r-2 border-neutral-200 pointer-events-none" />

                    <div className="flex items-center gap-4 relative z-10">
                      <div className="w-10 h-10 border-4 border-black bg-neutral-50 flex items-center justify-center group-hover:bg-[#FA520F] group-hover:text-white transition-colors">
                        <item.icon className="w-4 h-4 stroke-[2.5px]" />
                      </div>
                      <span className="text-sm font-bold uppercase tracking-wider font-mono">{item.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};export default DevelopersPage;
