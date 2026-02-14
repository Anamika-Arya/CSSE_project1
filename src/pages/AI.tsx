import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, MessageCircle } from 'lucide-react'
import { GlassCard } from '../components/GlassCard'
import clsx from 'clsx'

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
}

const recommendations = [
  'Based on your interest in coding, try joining **Coding Club** and attending **Hack Night** on Feb 16.',
  'You might enjoy **Drama Society** events if you like performing arts. Auditions on Feb 18.',
  '**Literary Club** has a quiz this week — great for debaters and readers.',
]

export function AI() {
  const [input, setInput] = useState('')
  const [chatOpen, setChatOpen] = useState(false)

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">AI Recommendations</h1>
        <p className="mt-1 text-slate-600 dark:text-slate-400">
          Get personalized society and event suggestions powered by AI.
        </p>
      </div>

      <GlassCard className="relative overflow-hidden p-8">
        <div className="absolute right-4 top-4 flex gap-1">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
              className="h-2 w-2 rounded-full bg-neon-cyan"
            />
          ))}
        </div>
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-neon-cyan/30 to-neon-purple/30">
            <Sparkles className="h-6 w-6 text-neon-cyan" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
              Your recommendations
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">Personalized for you</p>
          </div>
        </div>
        <ul className="space-y-4">
          {recommendations.map((rec, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * i }}
              className="rounded-2xl bg-white/10 dark:bg-black/10 p-4 text-sm text-slate-700 dark:text-slate-200"
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: rec.replace(/\*\*(.*?)\*\*/g, '<strong class="text-neon-cyan">$1</strong>'),
                }}
              />
            </motion.li>
          ))}
        </ul>
        <div className="mt-6 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask for more recommendations..."
            className="flex-1 rounded-2xl border border-white/20 dark:border-white/10 bg-white/10 dark:bg-black/20 px-4 py-3 text-sm placeholder:text-slate-500 focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20"
          />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-2xl bg-gradient-to-r from-neon-cyan to-neon-purple px-4 py-3 text-sm font-medium text-white shadow-glow hover:shadow-glow-hover transition-shadow"
          >
            Ask AI
          </motion.button>
        </div>
      </GlassCard>

      {/* Floating chatbot button */}
      <motion.button
        type="button"
        onClick={() => setChatOpen((o) => !o)}
        aria-label="Open AI chat"
        className={clsx(
          'fixed bottom-20 right-6 z-30 flex h-14 w-14 items-center justify-center rounded-full',
          'bg-gradient-to-br from-neon-cyan to-neon-purple text-white shadow-glow',
          'md:bottom-8 md:right-8'
        )}
        initial={false}
        animate={{
          y: [0, -6, 0],
          boxShadow: [
            '0 0 24px -4px rgba(0, 245, 255, 0.4), 0 0 48px -8px rgba(168, 85, 247, 0.3)',
            '0 0 32px -4px rgba(0, 245, 255, 0.6), 0 0 56px -8px rgba(168, 85, 247, 0.4)',
            '0 0 24px -4px rgba(0, 245, 255, 0.4), 0 0 48px -8px rgba(168, 85, 247, 0.3)',
          ],
        }}
        transition={{
          y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
          boxShadow: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <MessageCircle className="h-6 w-6" strokeWidth={2} />
        <motion.span
          className="absolute inset-0 rounded-full border-2 border-neon-cyan/50"
          animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.button>

      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-36 right-6 z-40 w-80 rounded-3xl border border-white/20 dark:border-white/10 backdrop-blur-xl bg-white/95 dark:bg-slate-900/95 p-4 shadow-soft md:bottom-24 md:right-8"
          >
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Chat panel placeholder. Connect to your AI backend to enable real chat.
            </p>
            <button
              type="button"
              onClick={() => setChatOpen(false)}
              className="mt-2 text-sm font-medium text-neon-cyan hover:underline"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
