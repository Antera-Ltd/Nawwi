'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { Calendar, MapPin, Users } from 'lucide-react';

export default function EventsPage() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .gte('date', new Date().toISOString())
        .order('date', { ascending: true });

      if (data) setEvents(data);
      setLoading(false);
    }
    fetchEvents();
  }, []);

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-5xl md:text-7xl font-serif mb-4">Wellness Events</h1>
        <p className="text-lg text-gray-600 max-w-2xl font-light">
          Immersive sensory experiences, scent-making workshops, and wellness retreats across Tanzania.
        </p>
      </motion.div>

      {loading ? (
        <div className="space-y-6">
          {[1, 2].map(i => (
            <div key={i} className="h-48 bg-gray-100 animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="grid gap-8">
          {events.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group border border-neutral-200 hover:border-[#b47878] transition-colors p-8 flex flex-col md:flex-row justify-between items-center gap-8"
            >
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-[#b47878]">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  <span className="flex items-center gap-1"><MapPin size={14} /> {event.venue}</span>
                </div>
                <h3 className="text-3xl font-serif">{event.title}</h3>
                <p className="text-gray-600 max-w-xl">{event.description}</p>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Users size={16} /> {event.seats_remaining} seats remaining
                </div>
              </div>

              <div className="text-center md:text-right space-y-4">
                <p className="text-3xl font-serif">${event.price}</p>
                <Link
                  href={`/events/${event.id}`}
                  className="inline-block bg-black text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-[#b47878] transition-colors"
                >
                  Book Tickets
                </Link>
              </div>
            </motion.div>
          ))}
          {events.length === 0 && (
            <div className="py-20 text-center border border-dashed border-gray-300">
              <p className="text-gray-500 italic">We are curating new experiences. Check back soon for our next wellness event.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
