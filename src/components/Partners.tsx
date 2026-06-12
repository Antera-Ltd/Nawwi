'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { StaticImageData } from 'next/image';

import awsLogo from '../assets/aws.png';
import digitalOceanLogo from '../assets/digital-ocean.png';
import netlifyLogo from '../assets/netlify.png';
import vercelLogo from '../assets/vercel-logo.png';
import supabaseLogo from '../assets/supabase.png';
import kaziboksiLogo from '../assets/kaziboksi.jpg';
import pawaLogo from '../assets/pawa-ai.png';
import sekelaPosLogo from '../assets/sekela-pos.png';
import brevoLogo from '../assets/Brevo.png';


const partners = [
  { name: 'Digital Ocean', logo: digitalOceanLogo },
  { name: 'AWS', logo: awsLogo },
  { name: 'Netlify', logo: netlifyLogo },
  { name: 'Vercel', logo: vercelLogo },
  { name: 'Supabase', logo: supabaseLogo },
  { name: 'kaziboksi', logo: kaziboksiLogo },
  { name: 'Pawa AI', logo: pawaLogo },
  { name: 'Brevo', logo: brevoLogo },
  { name: 'Sekela POS', logo: sekelaPosLogo },
];

export const PartnersSection = () => {

  const tripledPartners = [...partners, ...partners, ...partners];

  return (
    <section className="bg-white border-b border-black py-12 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
      </div>

      <div className="overflow-hidden">
        <motion.div
          className="flex gap-12"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
          style={{ width: "max-content" }}
        >
          {tripledPartners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center flex-shrink-0"
            >
              <img
                src={(partner.logo as any).src || partner.logo}
                alt={partner.name}
                className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};