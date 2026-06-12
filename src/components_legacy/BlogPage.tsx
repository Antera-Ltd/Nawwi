'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface BlogPost {
  title: string;
  category: string;
  date: string;
}

export const BlogPage = () => {
  const { t } = useLanguage();

  const posts: BlogPost[] = [

    /* We will add blog posts here when we integrate with supabase backend for posting our blogs
    For Now that is not our purpose.. 
    */
  ];

  const hasPosts = posts && posts.length > 0;

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen text-black font-sans antialiased w-full overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Aggressive Brutalist Header Banner */}
        <div className="w-full border-4 border-black bg-[#111113] p-8 md:p-12 mb-16 relative shadow-[4px_4px_0px_0px_#000000] text-center">
          <span className="absolute inset-0 border-t-2 border-l-2 border-white/10 pointer-events-none" />
          <span className="absolute inset-0 border-b-2 border-r-2 border-black/40 pointer-events-none" />
          
          <h1 className="text-4xl md:text-6xl font-normal uppercase tracking-tighter text-white font-mono leading-none">
            Our <span className="text-[#FA520F] font-bold">Insights.</span>
          </h1>
        </div>

        {/* Dynamic State Node Switch */}
        {hasPosts ? (
          <div className="space-y-6">
            {posts.map((post, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative border-4 border-black bg-white p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-[4px_4px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-75 cursor-pointer"
              >
                <span className="absolute inset-0 border-t-2 border-l-2 border-neutral-100 pointer-events-none" />
                <span className="absolute inset-0 border-b-2 border-r-2 border-neutral-200 pointer-events-none" />
                
                <div className="max-w-2xl relative z-10">
                  <div className="flex items-center gap-3 text-[10px] font-mono font-bold uppercase text-[#FA520F] mb-3">
                    <span className="bg-black text-white px-1.5 py-0.5">{post.category}</span>
                    <span className="text-neutral-400 font-normal font-sans">//</span>
                    <span className="text-neutral-500">{post.date}</span>
                  </div>
                  
                  <h2 className="text-xl md:text-2xl font-bold uppercase tracking-tight group-hover:text-[#FA520F] transition-colors font-mono">
                    {post.title}
                  </h2>
                </div>

                <div className="flex items-center gap-2 bg-neutral-50 border-2 border-black group-hover:bg-black group-hover:text-white p-3 font-mono text-xs font-bold uppercase tracking-wider transition-colors shrink-0">
                  <span>Read Post</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5px] text-[#FA520F]" />
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          /* Empty State Block */
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full border-4 border-black bg-neutral-50 p-8 md:p-16 text-center relative shadow-[8px_8px_0px_0px_#000000] flex flex-col items-center justify-center min-h-[280px]"
          >
            <span className="absolute inset-0 border-t-4 border-l-4 border-white pointer-events-none" />
            <span className="absolute inset-0 border-b-4 border-r-4 border-neutral-300 pointer-events-none" />
            
            {/* Structural corner accents */}
            <div className="absolute top-3 right-3 w-2 h-2 bg-neutral-300 border border-black" />
            <div className="absolute top-3 right-6 w-2 h-2 bg-neutral-300 border border-black" />

            <h3 className="text-xl font-bold uppercase font-mono tracking-wider mb-2">
              No articles found
            </h3>
            
            <p className="text-neutral-600 font-mono text-xs max-w-xs leading-relaxed font-normal">
              We haven't published any briefings or tech papers just yet. Check back soon for updates.
            </p>
          </motion.div>
        )}

      </div>
    </div>
  );
};export default BlogPage;
