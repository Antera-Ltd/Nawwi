'use client';
import React from 'react'
import { motion } from 'framer-motion'

export const NetworkVisualization = () => {
  const nodes = [
    { label: 'Intelligence', x: 20, y: 30 },
    { label: 'Automation', x: 80, y: 25 },
    { label: 'Data Hub', x: 50, y: 15 },
    { label: 'Gateways', x: 70, y: 70 },
    { label: 'Interfaces', x: 30, y: 75 },
    { label: 'Channels', x: 50, y: 85 },
    { label: 'Execution', x: 15, y: 55 },
    { label: 'Core Engine', x: 85, y: 50 },
  ]

  const connections = [
    [0, 2], [1, 2], [2, 7], [7, 3], [3, 5], [5, 4], [4, 6], [6, 0], [0, 7], [1, 3]
  ]

  return (
    <div className="absolute inset-0 z-0 opacity-15 pointer-events-none overflow-hidden bg-white">
      {/* Structural SVG Blueprint Traces */}
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {connections.map(([start, end], i) => (
          <motion.line
            key={i}
            x1={nodes[start].x}
            y1={nodes[start].y}
            x2={nodes[end].x}
            y2={nodes[end].y}
            stroke="#000000"
            strokeWidth="0.08"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{
              duration: 5,
              delay: i * 0.2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          />
        ))}
      </svg>

      {/* Rigid Grid Matrix Nodes */}
      {nodes.map((node, i) => (
        <div
          key={i}
          className="absolute flex items-center justify-center bg-white border border-black px-2 py-1 h-6 select-none"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div className="flex items-center gap-2 text-black">
            {/* Custom Code-Driven Pixel Art Dot Graphic */}
            <div className="w-1.5 h-1.5 bg-[#b47878]" />
            <span className="text-[8px] font-mono tracking-widest uppercase font-bold text-neutral-500">
              {node.label}
            </span>
          </div>
        </div>
      ))}

      {/* Data Signal Waves */}
      {[...Array(3)].map((_, i) => (
        <DataParticle key={i} delay={i * 3.3} />
      ))}
    </div>
  )
}

const DataParticle = ({ delay }: { delay: number }) => {
  return (
    <motion.div
      className="absolute w-1 h-1 bg-[#b47878]"
      initial={{ left: "50%", top: "15%", opacity: 0 }}
      animate={{
        left: ["50%", "85%", "70%", "50%", "15%", "50%"],
        top: ["15%", "50%", "70%", "85%", "55%", "15%"],
        opacity: [0, 1, 1, 1, 1, 0]
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        delay,
        ease: "linear"
      }}
    />
  )
}