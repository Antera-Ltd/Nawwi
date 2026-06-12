'use client';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export const TrustSection = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

  const images = [
    '/src/assets/pexels-irina-anastasiu-10540-54512.jpg',
    '/src/assets/pexels-mike-art-visual-creator-photography-and-video-2159421235-36547455.jpg',
    '/src/assets/spa-treatment-dark.jpg',
    '/src/assets/mountain.jpg'
  ];

  return (
    <section ref={containerRef} className="relative bg-white overflow-hidden py-32">
      <motion.div style={{ y, opacity }} className="absolute inset-0 pointer-events-none">
        <div className="relative w-full h-full">
          <div className="absolute top-20 right-10 w-96 h-96 rounded-full overflow-hidden opacity-20">
            <Image src={images[0]} alt="" fill className="object-cover" />
          </div>
          <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full overflow-hidden opacity-15">
            <Image src={images[2]} alt="" fill className="object-cover" />
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <div className="inline-block mb-6">
            <div className="text-[11px] font-mono tracking-[0.2em] text-[#b47878] font-semibold">01 — PHILOSOPHY</div>
            <div className="h-px w-12 bg-[#b47878] mt-2" />
          </div>
          <h2 className="text-7xl md:text-8xl lg:text-9xl font-light tracking-tight text-gray-900 leading-[0.9]">
            Sensory
            <br />
            <span className="font-bold bg-gradient-to-r from-[#b47878] to-[#d4a0a0] bg-clip-text text-transparent">Wellness.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-20">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group cursor-pointer"
            >
              <div className="flex items-start gap-6">
                <div className="text-8xl font-black text-gray-200 group-hover:text-[#b47878] transition-colors duration-300">01</div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Artisanal Quality</h3>
                  <p className="text-gray-500 text-lg leading-relaxed font-light">
                    Every candle is hand-poured in small batches using premium coconut-soy wax and locally sourced essential oils.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group cursor-pointer"
            >
              <div className="flex items-start gap-6">
                <div className="text-8xl font-black text-gray-200 group-hover:text-[#b47878] transition-colors duration-300">02</div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Sustainable Sourcing</h3>
                  <p className="text-gray-500 text-lg leading-relaxed font-light">
                    Commitment to the environment through plastic-free packaging and supporting local ethical agriculture in Tanzania.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group cursor-pointer"
            >
              <div className="flex items-start gap-6">
                <div className="text-8xl font-black text-gray-200 group-hover:text-[#b47878] transition-colors duration-300">03</div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Ancient Wisdom</h3>
                  <p className="text-gray-500 text-lg leading-relaxed font-light">
                    Drawing from generations of Tanzanian botanical knowledge passed down through healers and elders.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
            style={{ perspective: 1000 }}
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
              <Image
                src="/src/assets/Gemini_Generated_Image_f4szfzf4szfzf4sz.png"
                alt=""
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full overflow-hidden shadow-xl rotate-12">
              <Image
                src="/src/assets/56142.jpg"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const ServicesSection = () => {
  const services = [
    {
      title: "Aromatherapy",
      description: "Blends designed to target specific emotional states: from calming the mind to revitalizing the body.",
      image: "/src/assets/spa-treatment-dark.jpg"
    },
    {
      title: "Home Sanctuary",
      description: "Minimalist designs that complement any space, transforming your home into a high-end wellness retreat.",
      image: "/src/assets/pexels-irina-anastasiu-10540-54512.jpg"
    },
    {
      title: "Mindful Rituals",
      description: "Curated sets and workshops that help you build consistent wellness practices into your daily life.",
      image: "/src/assets/pexels-mike-art-visual-creator-photography-and-video-2159421235-36547455.jpg"
    }
  ];

  return (
    <section className="relative bg-gray-50 overflow-hidden py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <div className="inline-block mb-6">
            <div className="text-[11px] font-mono tracking-[0.2em] text-[#b47878] font-semibold">02 — SERVICES</div>
            <div className="h-px w-12 bg-[#b47878] mt-2" />
          </div>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-gray-900 leading-[1.1]">
            The Essence of
            <br />
            <span className="font-bold bg-gradient-to-r from-[#b47878] to-[#d4a0a0] bg-clip-text text-transparent">Wellness.</span>
          </h2>
          <p className="mt-8 text-gray-500 text-xl max-w-2xl leading-relaxed font-light">
            We create sensory products that facilitate deep connection with oneself and the surrounding environment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -16 }}
              className="group cursor-pointer"
            >
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src={service.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="text-[#b47878] text-sm font-mono mb-3">0{index + 1}</div>
                  <h3 className="text-3xl font-semibold mb-3 tracking-tight">{service.title}</h3>
                  <p className="text-white/80 text-base leading-relaxed font-light">
                    {service.description}
                  </p>
                  <motion.div 
                    className="mt-6 w-12 h-px bg-white/40 group-hover:w-24 transition-all duration-500"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};