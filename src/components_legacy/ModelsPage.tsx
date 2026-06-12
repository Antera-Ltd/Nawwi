'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const divisionData = [
  { name: 'I', value: 342, fill: '#FA520F' },
  { name: 'II', value: 215, fill: '#111113' },
  { name: 'III', value: '#A3A3A3', fill: '#A3A3A3' },
  { name: 'IV', value: 204, fill: '#E5E5E5' },
  { name: '0', value: 59, fill: '#000000' },
];

const subjectData = [
  { subject: 'Math', fail: 58 },
  { subject: 'English', fail: 22 },
  { subject: 'Science', fail: 35 },
  { subject: 'History', fail: 28 },
  { subject: 'Kiswahili', fail: 12 },
];

const genderData = [
  { name: 'Female', value: 82.5 },
  { name: 'Male', value: 85.1 },
];

export const ModelsPage = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen text-black font-sans antialiased w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="border-4 border-black bg-white p-8 md:p-12 mb-16 relative shadow-[4px_4px_0px_0px_#000000]">
          <span className="absolute inset-0 border-t-2 border-l-2 border-neutral-100 pointer-events-none" />
          <span className="absolute inset-0 border-b-2 border-r-2 border-neutral-200 pointer-events-none" />
          
          <h1 className="text-4xl md:text-7xl font-normal uppercase tracking-tighter leading-none mb-6 font-mono">
            Data <span className="text-[#FA520F] font-bold">Intelligence.</span>
          </h1>
          <p className="text-neutral-600 font-mono text-xs md:text-sm max-w-3xl leading-relaxed font-normal">
            {t('page.models.desc')}
          </p>
        </div>

        {/* Case Study Grid Node */}
        <div className="mb-16">
          <div className="flex items-center justify-between border-b-4 border-black pb-4 mb-8">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#FA520F]">
              Case Study: NECTA FTNA 2020
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Division Distribution Chart */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-neutral-50 border-4 border-black p-6 md:p-8 relative shadow-[6px_6px_0px_0px_#000000]"
            >
              <span className="absolute inset-0 border-t-2 border-l-2 border-white pointer-events-none" />
              <span className="absolute inset-0 border-b-2 border-r-2 border-neutral-200 pointer-events-none" />
              
              <h3 className="text-base font-bold uppercase mb-8 font-mono">Performance by Division</h3>
              <div className="h-[300px] w-full font-mono text-[10px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={divisionData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                    <CartesianGrid stroke="#E5E5E5" strokeDasharray="0" vertical={false} />
                    <XAxis dataKey="name" tickLine={false} stroke="#000000" />
                    <YAxis tickLine={false} stroke="#000000" />
                    <Tooltip
                      cursor={{ fill: 'rgba(0,0,0,0.04)' }}
                      contentStyle={{ backgroundColor: '#000000', border: '4px solid #000000', borderRadius: '0px', color: '#ffffff', fontFamily: 'monospace' }}
                      itemStyle={{ color: '#FA520F' }}
                    />
                    <Bar dataKey="value" radius={[0, 0, 0, 0]} maxBarSize={60}>
                      {divisionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} stroke="#000000" strokeWidth={2} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Overall Pass Rate Chart */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="bg-[#111113] text-white p-6 md:p-8 border-4 border-black relative shadow-[6px_6px_0px_0px_#FA520F]"
            >
              <span className="absolute inset-0 border-t-2 border-l-2 border-white/10 pointer-events-none" />
              <span className="absolute inset-0 border-b-2 border-r-2 border-black/40 pointer-events-none" />
              
              <h3 className="text-base font-bold uppercase mb-8 font-mono text-[#FA520F]">Overall Pass Rate</h3>
              <div className="h-[300px] w-full relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { name: 'Pass', value: 941 },
                        { name: 'Fail', value: 59 }
                      ]}
                      innerRadius={70}
                      outerRadius={90}
                      paddingAngle={0}
                      dataKey="value"
                      startAngle={90}
                      endAngle={-270}
                    >
                      <Cell fill="#FA520F" stroke="#111113" strokeWidth={4} />
                      <Cell fill="#262626" stroke="#111113" strokeWidth={4} />
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-4xl font-black font-mono tracking-tight">94.1%</span>
                  <span className="text-[9px] uppercase font-mono tracking-widest text-neutral-400 mt-1">Qualified</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Secondary Analytical Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6 items-stretch">
            
            {/* Gender Parity Progress Bars */}
            <div className="bg-white border-4 border-black p-6 relative shadow-[4px_4px_0px_0px_#000000]">
              <span className="absolute inset-0 border-t-2 border-l-2 border-neutral-100 pointer-events-none" />
              <span className="absolute inset-0 border-b-2 border-r-2 border-neutral-200 pointer-events-none" />
              
              <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-neutral-400 mb-6">Gender Parity</h4>
              <div className="space-y-6">
                {genderData.map((g) => (
                  <div key={g.name}>
                    <div className="flex justify-between text-xs font-bold font-mono uppercase mb-2">
                      <span>{g.name}</span>
                      <span>{g.value}%</span>
                    </div>
                    <div className="h-4 bg-neutral-100 border-2 border-black p-[2px]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${g.value}%` }}
                        viewport={{ once: true }}
                        className="h-full bg-[#FA520F]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Subject Failure Rates Block Panel */}
            <div className="bg-white border-4 border-black p-6 lg:col-span-2 relative shadow-[4px_4px_0px_0px_#000000]">
              <span className="absolute inset-0 border-t-2 border-l-2 border-neutral-100 pointer-events-none" />
              <span className="absolute inset-0 border-b-2 border-r-2 border-neutral-200 pointer-events-none" />
              
              <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-neutral-400 mb-6">Subject Failure Rates</h4>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {subjectData.map((s) => (
                  <div key={s.subject} className="flex flex-col justify-between p-4 bg-neutral-50 border-2 border-black">
                    <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase">{s.subject}</span>
                    <div className="mt-4">
                      <span className={`text-2xl font-black font-mono ${s.fail > 30 ? 'text-[#FA520F]' : 'text-black'}`}>
                        {s.fail}%
                      </span>
                      <span className="text-[8px] font-mono uppercase tracking-tight block text-neutral-400 mt-1">Failure Rate</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Lower Action Block */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#111113] text-white p-8 md:p-12 text-left border-4 border-black relative shadow-[8px_8px_0px_0px_#000000] flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        >
          <span className="absolute inset-0 border-t-2 border-l-2 border-white/10 pointer-events-none" />
          <span className="absolute inset-0 border-b-2 border-r-2 border-black/40 pointer-events-none" />
          
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-normal uppercase font-mono tracking-tight">Ready to deploy clean data modules?</h2>
          </div>
          
          <button className="bg-[#FA520F] text-white border-2 border-black px-8 py-4 font-mono text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black shadow-[4px_4px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-75 shrink-0">
            Contact Engineering
          </button>
        </motion.div>

      </div>
    </div>
  );
};export default ModelsPage;
