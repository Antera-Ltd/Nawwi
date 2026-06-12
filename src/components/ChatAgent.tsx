'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mic, ChevronDown, Wifi, Battery, Signal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getAnteraResponse } from '@/lib/gemini';
import Image from 'next/image';

type Msg = { role: 'user' | 'model'; text: string; time: string };

const getTime = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

/* ── Clean markdown symbols ── */
const cleanMarkdown = (text: string): string => {
  if (!text) return text;

  let cleaned = text
    // Remove bold **text** -> text
    .replace(/\*\*(.*?)\*\*/g, '$1')
    // Remove italic *text* -> text (but not list markers at line start)
    .replace(/(?<!\*)\*(?!\*)(.*?)(?<!\*)\*(?!\*)/g, '$1')
    // Remove inline `code` -> code
    .replace(/`(.*?)`/g, '$1')
    // Convert markdown links [text](url) -> text
    .replace(/\[(.*?)\]\(.*?\)/g, '$1')
    // Remove bullet list markers (* , - , +) at beginning of lines
    .replace(/^[\*\-+]\s+/gm, '')
    // Remove extra spaces that may appear after cleaning
    .replace(/\s{2,}/g, ' ')
    .trim();

  return cleaned;
};

/* ── Typing dots (Antera orange) ── */
const TypingDots = () => (
  <div className="flex items-center gap-[5px] px-1 py-0.5">
    {[0, 1, 2].map(i => (
      <motion.div
        key={i}
        className="w-[7px] h-[7px] rounded-full"
        style={{ background: '#FA520F' }}
        animate={{ y: [0, -5, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 0.9, delay: i * 0.15, ease: 'easeInOut' }}
      />
    ))}
  </div>
);

/* ── Avatar with rotating ring ── */
const Avatar = ({ size = 36 }: { size?: number }) => (
  <div className="relative shrink-0" style={{ width: size, height: size }}>
    <motion.div
      className="absolute inset-0 rounded-full"
      style={{ background: 'conic-gradient(from 0deg, #000000 0%, rgba(250,82,15,0.5) 50%, #000000 100%)' }}
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
    />
    <div
      className="absolute inset-[2px] rounded-full flex items-center justify-center overflow-hidden"
      style={{ background: '#000000', backdropFilter: 'blur(8px)' }}
    >
      <Image
        src="/Nawwi-logo.png"
        alt="Antera AI"
        width={size - 6}
        height={size - 6}
        className="object-cover rounded-full"
      />
    </div>
  </div>
);

/* ── Message bubble (exact same style as Simba) ── */
const Bubble = ({ msg, isLast }: { msg: Msg; isLast: boolean }) => {
  const isUser = msg.role === 'user';
  // Clean assistant messages only
  const displayText = !isUser ? cleanMarkdown(msg.text) : msg.text;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.38, ease: [0.23, 1, 0.32, 1] }}
      className={cn('flex items-end gap-2', isUser ? 'justify-end' : 'justify-start')}
    >
      {!isUser && <Avatar size={28} />}
      <div className={cn('flex flex-col gap-0.5', isUser ? 'items-end' : 'items-start', 'flex-1', isUser ? 'max-w-[85%]' : 'max-w-[85%]')}>
        <div
          className="px-4 py-2.5 text-[13.5px] leading-[1.55] shadow-sm w-full"
          style={
            isUser
              ? {
                  background: '#FA520F',
                  color: 'white',
                  borderRadius: '20px 20px 5px 20px',
                }
              : {
                  background: 'transparent',
                  color: '#1a1108',
                  borderRadius: '20px 20px 20px 5px',
                  padding: '4px 4px 4px 0',
                }
          }
        >
          <div className="whitespace-pre-wrap break-words">{displayText}</div>
        </div>
        <div className="flex items-center gap-1 px-1">
          <span className="text-[10px]" style={{ color: 'rgba(0,0,0,0.3)' }}>{msg.time}</span>
          {isUser && isLast && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-[10px]"
              style={{ color: '#FA520F' }}
            >✓✓</motion.span>
          )}
        </div>
      </div>
      {isUser && (
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-[12px]"
          style={{ background: 'rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.1)' }}
        >
          👤
        </div>
      )}
    </motion.div>
  );
};

const quickPrompts = [
  { emoji: '🤖', label: 'AI Solutions' },
  { emoji: '💻', label: 'Web & App Dev' },
  { emoji: '⚙️', label: 'Custom Infrastructure' },
  { emoji: '🚀', label: 'How we operate' },
  { emoji: '📊', label: 'Data pipelines' },
  { emoji: '🔒', label: 'Security & compliance' },
];

const ChatAgent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Msg[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [clockTime, setClockTime] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const tick = () => setClockTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    tick();
    const t = setInterval(tick, 30000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 500);
  }, [isOpen]);

  const handleSend = async (text?: string) => {
    const msg = (text ?? input).trim();
    if (!msg || isLoading) return;
    setInput('');

    const userMsg: Msg = { role: 'user', text: msg, time: getTime() };
    const currentMessages = [...messages, userMsg];
    setMessages(prev => [...prev, userMsg]);
    setIsLoading(true);

    try {
      const apiHistoryPayload = currentMessages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      let replyText = await getAnteraResponse(apiHistoryPayload);
      // Clean the response before storing
      replyText = cleanMarkdown(replyText);

      setMessages(prev => [...prev, { role: 'model', text: replyText, time: getTime() }]);
    } catch (err) {
      console.error("Antera AI Error:", err);
      setMessages(prev => [...prev, { role: 'model', text: 'Antera AI is currently recalibrating. Please try again in a moment.', time: getTime() }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* ── FAB (Antera style) ── */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            key="fab"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl flex items-center justify-center"
            style={{ background: '#000000' }}
          >
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ background: '#FA520F' }}
              animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
            />
            <span className="relative text-xl md:text-2xl">
              <Image src="/Nawwi-logo.png" alt="Antera" width={28} height={28} className="rounded-full" />
            </span>
            <div className="absolute -top-0.5 -right-0.5 w-3 h-3 md:w-4 md:h-4 bg-[#FA520F] rounded-full border-2 border-white" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── Chat window ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop for mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/20 md:hidden"
            />

            <motion.div
              key="chat"
              initial={{ opacity: 0, scale: 0.85, y: 60 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 60 }}
              transition={{ type: 'spring', damping: 26, stiffness: 300 }}
              className="chat-window fixed bottom-0 left-0 right-0 md:bottom-8 md:right-8 md:left-auto z-50 flex flex-col overflow-hidden mx-auto"
              style={{
                width: '100%',
                maxWidth: '100%',
                height: '90vh',
                maxHeight: '90vh',
                borderTopLeftRadius: 32,
                borderTopRightRadius: 32,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                border: 'none',
                boxShadow: '0 -10px 40px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.06) inset',
                background: 'rgba(255,255,255,0.55)',
                backdropFilter: 'blur(40px)',
                WebkitBackdropFilter: 'blur(40px)',
              }}
            >
              {/* Desktop phone shape */}
              <style>{`
                @media (min-width: 768px) {
                  .chat-window {
                    width: 390px !important;
                    max-width: 390px !important;
                    height: min(780px, calc(100vh - 7rem)) !important;
                    max-height: min(780px, calc(100vh - 7rem)) !important;
                    border-radius: 52px !important;
                    border: 10px solid #0F0F0F !important;
                    box-shadow:
                      0 0 0 1px rgba(255,255,255,0.08) inset,
                      0 50px 120px rgba(0,0,0,0.6),
                      0 20px 60px rgba(0,0,0,0.35) !important;
                    bottom: 2rem !important;
                    right: 2rem !important;
                    left: auto !important;
                    top: auto !important;
                    margin: 0 !important;
                    overflow: hidden !important;
                  }
                }
              `}</style>

              {/* Glass background blobs */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ borderRadius: 'inherit', zIndex: 0 }}>
                <div className="absolute -top-8 -left-8 w-48 h-48 rounded-full opacity-15" style={{ background: '#FA520F', filter: 'blur(40px)' }} />
                <div className="absolute -bottom-8 -right-8 w-56 h-56 rounded-full opacity-10" style={{ background: '#000000', filter: 'blur(50px)' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full opacity-5" style={{ background: '#FA520F', filter: 'blur(60px)' }} />
              </div>

              {/* Drag handle (mobile) */}
              <div className="flex justify-center pt-2 pb-1 md:hidden relative z-10">
                <div className="w-12 h-1.5 rounded-full bg-gray-400/50" />
              </div>

              {/* Dynamic Island / Notch */}
              <div className="relative z-10 flex justify-center pt-3 pb-1 shrink-0">
                <motion.div
                  className="flex items-center justify-between px-4"
                  style={{
                    width: 126,
                    height: 34,
                    background: '#000000',
                    borderRadius: 20,
                  }}
                  whileHover={{ width: 180 }}
                  transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                >
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-[#FA520F]"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                </motion.div>
              </div>

              {/* Status Bar */}
              <div className="relative z-10 flex items-center justify-between px-7 py-1 shrink-0">
                <span className="text-black text-[12px] font-bold tracking-tight">{clockTime}</span>
                <div className="flex items-center gap-1.5">
                  <Signal size={12} style={{ color: '#000000' }} />
                  <Wifi size={12} style={{ color: '#000000' }} />
                  <Battery size={14} style={{ color: '#000000' }} />
                </div>
              </div>

              {/* Messages area */}
              <div
                ref={scrollRef}
                className="relative z-10 flex-1 overflow-y-auto px-4 py-4 space-y-3"
                style={{ scrollbarWidth: 'none' }}
              >
                <div className="flex justify-end mb-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-all"
                    style={{ background: 'rgba(0,0,0,0.07)' }}
                  >
                    <ChevronDown size={16} style={{ color: '#000000' }} />
                  </motion.button>
                </div>

                {/* Welcome state */}
                {messages.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="flex flex-col items-center pt-2 pb-2 space-y-5"
                  >
                    <Avatar size={64} />
                    <div className="text-center space-y-1.5">
                      <p className="font-bold text-[17px]" style={{ color: '#000000' }}>Hello, I'm Antera 🤖</p>
                      <p className="text-[12.5px] leading-relaxed max-w-[280px] mx-auto" style={{ color: 'rgba(0,0,0,0.45)' }}>
                        Your AI partner for intelligent automation, web & app development, and infrastructure.
                      </p>
                    </div>

                    {/* Date pill */}
                    <div
                      className="px-4 py-1.5 text-[10px] tracking-widest uppercase"
                      style={{
                        background: 'rgba(0,0,0,0.06)',
                        borderRadius: 20,
                        color: 'rgba(0,0,0,0.35)',
                      }}
                    >
                      Today
                    </div>

                    {/* Assistant opening bubble */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.45 }}
                      className="flex items-end gap-2 w-full max-w-[85%]"
                    >
                      <Avatar size={28} />
                      <div
                        className="px-4 py-2.5 text-[13.5px] leading-relaxed flex-1"
                        style={{
                          background: 'transparent',
                          color: '#1a1108',
                          padding: '4px 4px 4px 0',
                        }}
                      >
                        What can I help you build or optimise today? 🚀
                      </div>
                    </motion.div>

                    {/* Quick prompts grid */}
                    <div className="grid grid-cols-2 gap-2 w-full">
                      {quickPrompts.map((q, i) => (
                        <motion.button
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.55 + i * 0.06 }}
                          whileHover={{ scale: 1.03, y: -1 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => handleSend(q.label)}
                          className="flex items-center gap-2 px-3 py-2.5 text-left text-[11.5px] font-medium transition-all"
                          style={{
                            background: 'rgba(255,255,255,0.7)',
                            backdropFilter: 'blur(12px)',
                            WebkitBackdropFilter: 'blur(12px)',
                            borderRadius: 14,
                            border: '1px solid rgba(0,0,0,0.09)',
                            color: '#000000',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                          }}
                        >
                          <span className="text-[16px]">{q.emoji}</span>
                          <span className="leading-tight">{q.label}</span>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Date pill when messages exist */}
                {messages.length > 0 && (
                  <div className="flex justify-center">
                    <div
                      className="px-4 py-1.5 text-[10px] tracking-widest uppercase"
                      style={{ background: 'rgba(0,0,0,0.06)', borderRadius: 20, color: 'rgba(0,0,0,0.35)' }}
                    >
                      Today
                    </div>
                  </div>
                )}

                {messages.map((msg, idx) => (
                  <Bubble key={idx} msg={msg} isLast={idx === messages.length - 1} />
                ))}

                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-end gap-2"
                  >
                    <Avatar size={28} />
                    <div className="px-2 py-2">
                      <TypingDots />
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Input area with home bar */}
              <div
                className="relative z-10 px-4 pt-3 shrink-0"
                style={{
                  background: 'rgba(255,255,255,0.6)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  borderTop: '1px solid rgba(0,0,0,0.07)',
                  paddingBottom: 'max(12px, env(safe-area-inset-bottom, 12px))',
                }}
              >
                <div
                  className="flex items-center gap-2 px-3 py-2"
                  style={{
                    background: 'rgba(0,0,0,0.05)',
                    borderRadius: 26,
                    border: '1px solid rgba(0,0,0,0.09)',
                  }}
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-7 h-7 flex items-center justify-center"
                    style={{ color: 'rgba(0,0,0,0.3)' }}
                  >
                    <Mic size={16} />
                  </motion.button>

                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && !e.shiftKey && handleSend()}
                    placeholder="Message Antera..."
                    className="flex-1 bg-transparent text-[13.5px] outline-none"
                    style={{ color: '#000000' }}
                  />

                  <AnimatePresence mode="wait">
                    {input.trim() ? (
                      <motion.button
                        key="send"
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 45 }}
                        transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                        whileHover={{ scale: 1.12 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleSend()}
                        disabled={isLoading}
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white shadow-md"
                        style={{ background: '#000000' }}
                      >
                        <Send size={14} />
                      </motion.button>
                    ) : (
                      <motion.span
                        key="idle"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="text-[17px] select-none"
                      >
                        🤖
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>

                {/* Home bar indicator */}
                <div className="flex justify-center mt-3 mb-1">
                  <div
                    className="w-28 h-[5px] rounded-full"
                    style={{ background: 'rgba(0,0,0,0.18)' }}
                  />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatAgent;