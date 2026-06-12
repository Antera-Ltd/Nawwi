'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { StaticImageData } from 'next/image';
import { ArrowRight } from 'lucide-react';
import mobileAppImage from '../assets/mobile-app.png';
import webCommandImage from '../assets/web-command.png';
import businessIntelligenceImage from '../assets/Business-Intelligence.png';
import predictiveAnalyticsImage from '../assets/Predictive-Analytics.png';
import realTimeDashboardsImage from '../assets/Real-Time-Dashboards.png';
import customerInsightsImage from '../assets/Customer-Insights.png';
import performanceMonitoringImage from '../assets/Performance-Monitoring.png';
import decisionSupportSystemsImage from '../assets/Decision-Support-Systems.png';

export const CommunicationSection = () => {
  const channels = [
    { name: 'SMS Communication' },
    { name: 'USSD Solutions'},
    { name: 'Social Media Integration'},
    { name: 'Robo Calls' },
    { name: 'Email Campaigns' },
    { name: 'Customer Messaging'},
  ];

  return (
    <section id="solutions" className="bg-white border-b border-black text-black font-sans antialiased w-full overflow-hidden">
      <div className="mx-auto flex flex-col lg:flex-row items-stretch">
        
        {/* Left Core Structural Copy Block */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:w-5/12 p-8 md:p-12 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-black bg-white"
        >
          <div>
            {/* Custom Pixel Art Icon Combo Header Block */}
            <div className="flex items-center gap-1.5 mb-8 select-none">
              <svg width="20" height="20" viewBox="0 0 10 10" fill="none" className="text-[#FA520F]">
                <path d="M2 1h6v1H2V1zm-1 2h8v4H1V3zm2 5h4v1H3V8z" fill="currentColor"/>
              </svg>
              <svg width="20" height="20" viewBox="0 0 10 10" fill="none" className="text-black">
                <path d="M1 2h8v6H1V2zm2 2h4v2H3V4z" fill="currentColor"/>
              </svg>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase leading-[0.9] mb-6">
              Unified Customer <span className="text-neutral-400 block">Communication.</span>
            </h2>
            <p className="text-black/60 text-xs md:text-sm leading-relaxed max-w-md">
              Bring all operational engagement systems under a singular endpoint matrix. Capture and dispatch user events across SMS, USSD, and custom distributed social channels safely.
            </p>
          </div>
          
          <div className="mt-16 pt-6 border-t border-black/10 flex items-center justify-between font-mono text-[9px] text-neutral-400 tracking-wider uppercase font-bold">
          </div>
        </motion.div>

        {/* Right Side: Mistral-Style Grid Links Matrix */}
        <div className="lg:w-7/12 p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch bg-neutral-50/40">
          {channels.map((channel, i) => (
            <motion.a
              href="#" 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 bg-white flex flex-col justify-between group relative border-4 border-black transition-all duration-75 min-h-[180px] shadow-[4px_4px_0px_0px_#000000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
            >
              {/* Inner 3D highlight / shadow accents */}
              <span className="absolute inset-0 border-t-2 border-l-2 border-black/5 pointer-events-none" />
              <span className="absolute inset-0 border-b-2 border-r-2 border-black/20 pointer-events-none" />

              <div className="relative flex items-center justify-between w-full mb-12">
                {/* Pixel Icon Box Replacement */}
                <svg width="18" height="18" viewBox="0 0 10 10" fill="none" className="text-black group-hover:text-[#FA520F] transition-colors">
                  <path d="M2 2h6v1H2V2zm0 3h4v1H2V5zm0 3h5v1H2V8z" fill="currentColor"/>
                </svg>
              </div>

              <div className="relative flex items-center justify-between gap-4 mt-auto">
                <h3 className="text-sm font-bold uppercase tracking-wider text-black group-hover:text-[#FA520F] transition-colors font-mono">
                  {channel.name}
                </h3>
                <ArrowRight className="w-3.5 h-3.5 text-[#FA520F] transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all stroke-[2.5px]" />
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

export const ApplicationSection = () => {
  return (
    <section className="bg-white border-b border-black text-black font-sans antialiased w-full flex flex-col overflow-hidden">
      
      {/* Structural Sub-header Horizontal Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border-b border-black bg-white w-full"
      >
        <div className="max-w-7xl mx-auto px-8 md:p-12 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold uppercase tracking-tight leading-none">
              Custom Application Ecosystems
            </h2>
          </div>
          <p className="text-black/50 text-xs max-w-md leading-relaxed font-normal">
            We architect and build tailored web dashboards and mobile channels designed to streamline multi-tenant processing flows and real-time operational ledger metrics.
          </p>
        </div>
      </motion.div>

      {/* Main Structural Grid Block Layout */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-black">
        
        {/* Left Slot: Mobile Framework UI */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 md:p-12 lg:p-16 flex flex-col justify-between bg-white group hover:bg-neutral-50/20 transition-colors"
        >
          <div className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <svg width="24" height="24" viewBox="0 0 12 12" fill="none" className="text-black group-hover:text-[#FA520F] transition-colors">
                <path d="M3 1h6v10H3V1zm1 1v6h4V2H4z" fill="currentColor"/>
              </svg>
            </div>
            <h3 className="text-lg font-bold uppercase tracking-tight text-black mb-3">
              Native Mobile Development
            </h3>
            <p className="text-black/60 text-xs md:text-sm leading-relaxed max-w-md">
              Secure client applications optimized for real-time edge synchronization, absolute off-grid validation caching, and robust interface operations.
            </p>
          </div>
          
          {/* Mobile App Image */}
          <div className="border border-black bg-white overflow-hidden">
            <img 
              src={(mobileAppImage as any).src || mobileAppImage}
              alt="Mobile App Interface"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>

        {/* Right Slot: Web Engine UI */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 md:p-12 lg:p-16 flex flex-col justify-between bg-white group hover:bg-neutral-50/20 transition-colors"
        >
          <div className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <svg width="24" height="24" viewBox="0 0 12 12" fill="none" className="text-black group-hover:text-[#FA520F] transition-colors">
                <path d="M1 2h10v7H1V2zm1 2v4h8V4H2z" fill="currentColor"/>
              </svg>
            </div>
            <h3 className="text-lg font-bold uppercase tracking-tight text-black mb-3">
              Web Command Dashboards
            </h3>
            <p className="text-black/60 text-xs md:text-sm leading-relaxed max-w-md">
              Highly responsive back-office interfaces designed to safely orchestrate complex workflow pipelines, permission monitoring, and centralized client statistics.
            </p>
          </div>
          
          {/* Web Command Image */}
          <div className="border border-black bg-white overflow-hidden">
            <img 
              src={(webCommandImage as any).src || webCommandImage}
              alt="Web Command Dashboard"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export const DataIntelligenceSection = () => {
  const features = [
    { 
      title: 'Business Intelligence', 
      image: businessIntelligenceImage
    },
    { 
      title: 'Predictive Analytics', 
      image: predictiveAnalyticsImage
    },
    { 
      title: 'Real-Time Dashboards', 
      image: realTimeDashboardsImage
    },
    { 
      title: 'Customer Insights', 
      image: customerInsightsImage
    },
    { 
      title: 'Performance Monitoring', 
      image: performanceMonitoringImage
    },
    { 
      title: 'Decision Support Systems', 
      image: decisionSupportSystemsImage
    },
  ];

  return (
    <section id="models" className="bg-white border-b border-black text-black font-sans antialiased w-full overflow-hidden">
      <div className="mx-auto flex flex-col lg:flex-row items-stretch">
        
        {/* Left Side: Matrix Link Grid layout */}
        <div className="lg:w-7/12 order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 bg-white divide-y sm:divide-y-0 sm:divide-x divide-black border-t lg:border-t-0 border-black items-stretch">
          <div className="divide-y divide-black flex flex-col justify-between h-full">
            {features.slice(0, 3).map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <DataFeatureCard title={f.title} image={f.image} />
              </motion.div>
            ))}
          </div>
          <div className="divide-y divide-black flex flex-col justify-between h-full sm:border-t-0">
            {features.slice(3, 6).map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i + 3) * 0.1 }}
              >
                <DataFeatureCard title={f.title} image={f.image} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Copy block details */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:w-5/12 order-1 lg:order-2 p-8 md:p-12 lg:p-16 flex flex-col justify-between lg:border-l border-black bg-white"
        >
          <div>
            {/* Custom Pixel Art Icon Combo Header Block */}
            <div className="flex items-center gap-1.5 mb-8 select-none">
              <svg width="20" height="20" viewBox="0 0 10 10" fill="none" className="text-black">
                <path d="M1 1h8v1H1V1zm0 3h8v1H1V4zm0 3h5v1H1V7zm7 0h2v1H8V7z" fill="currentColor"/>
              </svg>
              <svg width="20" height="20" viewBox="0 0 10 10" fill="none" className="text-[#FA520F]">
                <path d="M4 1h2v8H4V1zM1 4h8v2H1V4z" fill="currentColor"/>
              </svg>

            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase leading-[0.9] mb-6">
              Turn Raw Data <span className="text-neutral-400 block">Into Actions.</span>
            </h2>
            <p className="text-black/60 text-xs md:text-sm leading-relaxed mb-10">
              We engineer safe analytical warehouses and aggregation loops that systematically empower teams to audit traffic logs, analyze predictions, and extract real insights instantly.
            </p>
            
            <button className="relative border-4 border-black px-5 py-3.5 text-xs font-mono font-bold uppercase tracking-wider bg-black text-white hover:bg-[#FA520F] transition-all duration-75 flex items-center justify-between gap-6 w-full sm:max-w-xs group shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none">
              <span>Explore Platforms</span> 
              <ArrowRight className="w-4 h-4 text-white transform -translate-x-1 group-hover:translate-x-0 transition-transform stroke-[2.5px]" />
            </button>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

/* Data intelligence component card box matching structural columns perfectly */
const DataFeatureCard = ({ title, image }: { title: string; image: string | StaticImageData }) => (
  <div className="p-8 lg:p-12 bg-white flex flex-col justify-between group hover:bg-neutral-50/40 transition-colors h-auto w-full relative">
    <div className="flex items-center justify-between w-full mb-6">
    </div>
    
    {/* Feature Image */}
    <div className="mb-6 overflow-hidden">
      <img 
        src={(image as any).src || image}
        alt={title}
        className="w-full h-auto object-cover transition-transform group-hover:scale-105 duration-300"
      />
    </div>
    
    <div className="flex items-end justify-between w-full gap-4">
      <h4 className="text-xs font-bold uppercase tracking-wider text-black max-w-[180px] leading-tight group-hover:text-[#FA520F] transition-colors">
        {title}
      </h4>
      <div className="w-1.5 h-1.5 bg-black/10 group-hover:bg-[#FA520F] transition-colors" />
    </div>
  </div>
);