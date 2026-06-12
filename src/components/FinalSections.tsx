'use client';
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Box, Grid } from 'lucide-react'

export const OperationSection = () => {
  const [activeStep, setActiveStep] = useState('discover')

  const steps = [
    { id: 'discover', name: 'Discover', label: 'Phase One', desc: 'Comprehensive discovery loops targeting organizational data dependencies, channel constraints, and workflow pipeline vulnerabilities.' },
    { id: 'analyze', name: 'Analyze', label: 'Phase Two', desc: 'Deep model ingestion validation. We analyze message volume trends, user interaction telemetry, and payload constraints systematically.' },
    { id: 'design', name: 'Design', label: 'Phase Three', desc: 'Engineering exact functional layout plans, localized custom training weights, and rigid multi-tenant transaction routing.' },
    { id: 'build', name: 'Build', label: 'Phase Four', desc: 'Full stack implementation phase. Deploying customized cloud nodes, responsive UI dashboards, and edge-synchronized native endpoints.' },
    { id: 'deploy', name: 'Deploy', label: 'Phase Five', desc: 'Secure execution across isolated enterprise containers, distributed live clouds, or air-gapped secure corporate systems.' },
    { id: 'optimize', name: 'Optimize', label: 'Phase Six', desc: 'Continuous learning calibration cycles. Automated performance tuning to consistently drop latencies and expand edge processing throughput.' },
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
        {/* Tetris Decorative Block Left */}
        <div className="absolute left-6 top-6 hidden md:grid grid-cols-2 gap-1 opacity-20">
          <div className="w-4 h-4 bg-white border-2 border-black"></div>
          <div className="w-4 h-4 bg-white border-2 border-black"></div>
          <div className="w-4 h-4 bg-white border-2 border-black"></div>
          <div className="w-4 h-4 transparent"></div>
        </div>

        <div className="flex items-center gap-3 mb-6 select-none">
          {/* Custom Pixel Running Cog Asset */}
          <svg width="28" height="28" viewBox="0 0 16 16" fill="none" className="text-[#FA520F]">
            <path d="M6 1h4v2H6V1zm5 3h2v2h-2V4zM3 4h2v2H3V4zm5 5h2v2H8V9zm5 2h2v2h-2v-2zM1 11h2v2H1v-2zM6 13h4v2H6v-2z" fill="currentColor"/>
          </svg>
        </div>
        <h2 className="text-3xl md:text-5xl font-normal tracking-tight max-w-4xl text-white uppercase leading-tight font-mono">
          Rigid operational phases engineered for maximum certainty.
        </h2>
      </motion.div>

      {/* Main Multi-tiered Structural Grid Blocks */}
      <div className="mx-auto flex flex-col lg:flex-row items-stretch w-full min-h-[480px] bg-neutral-100">
        
        {/* Left Side Tab Matrix Filter Menu */}
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
                      ? 'bg-[#FA520F] text-white translate-x-[4px] translate-y-[4px] shadow-none' 
                      : 'bg-white text-neutral-500 hover:text-black shadow-[4px_4px_0px_0px_#000000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none'
                  }`}
                >
                  {/* 3D Bevel Highlights for retro-hardware feel */}
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

        {/* Right Dynamic Focus Block Side */}
        <div className="flex-1 p-6 md:p-12 bg-neutral-100 flex flex-col justify-center items-stretch relative">
          {/* Tetris Background Accent Block */}
          <div className="bg-white border-4 border-black p-8 md:p-12 min-h-[300px] flex flex-col justify-center relative shadow-[8px_8px_0px_0px_#000000]">
            {/* Real 3D Edge Beveling */}
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
                <h3 className="text-4xl font-bold uppercase tracking-tight text-neutral-900 mb-4 font-mono">
                  {currentData?.name}.
                </h3>
                <p className="text-neutral-700 text-sm md:text-base leading-relaxed font-normal font-mono">
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
    { title: 'Customer Profiling', desc: 'Understanding distinct user interaction trajectories, identity validation, and customized cluster segment tracking.', accent: true},
    { title: 'CRM Systems', desc: 'Custom core relationship storage blocks tailored explicitly to manage cross-platform enterprise state trees.', accent: false },
    { title: 'Systems Design', desc: 'High-performance computing topologies engineered for low latency drop rates and extreme concurrent traffic.', accent: false},
    { title: 'Systems Development', desc: 'Full-cycle advanced application programming across highly reliable processing vectors and backend nodes.', accent: false },
    { title: 'Systems Analysis', desc: 'Comprehensive technical system audits, compliance validation metrics, and security leak vulnerability reviews.', accent: false},
    { title: 'Digital Infrastructure', desc: 'Unified high-throughput messaging conduits supporting distributed transactional automation rulesets.', accent: true },
    { title: 'App Ecosystems', desc: 'Scalable distributed client software environments customized around real-time ledger auditing tools.', accent: false},
    { title: 'Strategic Consulting', desc: 'Tailored technology alignment roadmaps mapping enterprise raw file layers directly to intelligence workflows.', accent: false},
  ]

  return (
    <section className="bg-white border-b-4 border-black text-black font-sans antialiased w-full overflow-hidden">
      
      {/* Asymmetric Header Structure Ribbon Block */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full border-b-4 border-black bg-white"
      >
        <div className="w-full mx-auto px-8 md:px-12 py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold uppercase tracking-tight leading-none font-mono">
              Data Science & Consulting
            </h2>
          </div>
          <p className="text-black/50 text-xs max-w-md leading-relaxed font-normal font-mono">
            Tailored, domain-specialized technical engineering: from localized tuning models to comprehensive operational field support.
          </p>
        </div>
      </motion.div>

      {/* Grid Framework Content Slots with responsive border configuration */}
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
            {/* Simulated 3D block rim */}
            <span className="absolute inset-0 border-t-2 border-l-2 border-neutral-100 pointer-events-none group-hover:border-white" />
            
            <div className="relative">
              {s.accent && <div className="absolute -top-8 -left-8 -right-8 h-2 bg-[#FA520F]" />}
              
              <div className="flex items-center justify-between mb-8 pt-2">
                <svg width="20" height="20" viewBox="0 0 10 10" fill="none" className="text-black/30 group-hover:text-[#FA520F] transition-colors">
                  <path d="M1 1h8v1H1V1zm0 3h8v1H1V4zm0 3h6v1H1V7z" fill="currentColor"/>
                </svg>
              </div>
              
              <h3 className="text-sm font-bold tracking-wider text-black mb-3 uppercase group-hover:text-[#FA520F] transition-colors font-mono">
                {s.title}
              </h3>
              <p className="text-neutral-600 text-xs leading-relaxed font-normal max-w-[210px] font-mono">
                {s.desc}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t-2 border-black/5 flex items-center justify-between w-full text-[10px] font-mono text-neutral-400 group-hover:text-black transition-colors uppercase font-bold">
              <ArrowRight className="w-3 h-3 text-neutral-300 group-hover:text-[#FA520F] transform group-hover:translate-x-0.5 transition-all stroke-[2.5px]" />
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  )
}

export const WhySection = () => {
  const reasons = [
    { title: 'Enterprise-grade Solutions', desc: 'Architectures engineered strictly for high-fidelity uptime, fault tolerance, and absolute processing capacity.' },
    { title: 'AI-first Core Design', desc: 'System layers built natively around machine learning data parameters and active optimization logic structures.' },
    { title: 'Scalable Architecture', desc: 'Fully decoupled multi-tenant compute frameworks configured to absorb explosive throughput scale smoothly.' },
    { title: 'Secure Infrastructure', desc: 'Isolated sandbox deployment environments ensuring complete regulatory and structural boundary protections.' },
    { title: 'Data-driven Decisions', desc: 'Real-time telemetry pipelines translating raw activities immediately into sharp actionable parameters.' },
    { title: 'Rapid Edge Deployment', desc: 'Pre-evaluated framework blueprints and container systems to minimize time-to-market cycles.' },
    { title: 'Long-term Partnership', desc: 'Dedicated solutions engineering access aligning codebases continuously to shifting internal priorities.' },
    { title: 'Custom Codebases', desc: 'We Develop Zero debt softwares engineered uniquely around exact execution tasks.' }
  ]

  return (
    <section className="bg-white border-b-4 border-black text-black font-sans antialiased w-full overflow-hidden">
      <div className="mx-auto flex flex-col lg:flex-row items-stretch w-full">
        
        {/* Left Side Static Title Info Panel */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:w-4/12 p-8 md:p-12 lg:p-16 flex flex-col justify-between border-b-4 lg:border-b-0 lg:border-r-4 border-black bg-[#111113] text-white relative"
        >
          {/* Subtle Retro Tetris Corner Framing Blocks */}
          <div className="absolute right-4 bottom-4 w-8 h-8 opacity-20 border-r-4 border-b-4 border-white"></div>
          
          <div>
            <div className="flex items-center gap-1.5 mb-8 select-none">
              <svg width="24" height="24" viewBox="0 0 12 12" fill="none" className="text-[#FA520F]">
                <path d="M2 2h8v2H2V2zm0 3h8v2H2V5zm0 3h8v2H2V8z" fill="currentColor"/>
              </svg>
            </div>
            <h2 className="text-4xl font-normal tracking-tight uppercase leading-[0.9] text-white font-mono">
              Why Teams Choose <span className="text-[#FA520F] block font-bold">Antera.</span>
            </h2>
          </div>
        </motion.div>

        {/* Right Twin-Column Tetris Block Layout */}
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
              {/* 3D Beveled Plastic Component Effect */}
              <span className="absolute inset-0 border-t-2 border-l-2 border-neutral-100 pointer-events-none group-hover:border-white" />
              <span className="absolute inset-0 border-b-2 border-r-2 border-neutral-200 pointer-events-none" />
              
              {/* Tetris geometric node marker in corner */}
              <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-neutral-200 group-hover:bg-[#FA520F] transition-colors" />

              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-[9px] bg-black text-white px-1.5 py-0.5 font-bold border border-black group-hover:bg-[#FA520F] transition-colors">
                  0{i + 1}
                </span>
                <h4 className="font-bold text-sm uppercase tracking-wider text-neutral-900 transition-colors font-mono">
                  {reason.title}
                </h4>
              </div>
              <p className="text-neutral-600 text-xs leading-relaxed max-w-sm font-mono font-normal">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}