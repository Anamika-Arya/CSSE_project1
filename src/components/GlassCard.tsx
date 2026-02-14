import { motion } from 'framer-motion'
import clsx from 'clsx'
import type { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.03, y: -4 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={clsx(
        'rounded-3xl backdrop-blur-xl border border-white/20 dark:border-white/10',
        'bg-white/10 dark:bg-black/10',
        'shadow-soft dark:shadow-soft-dark',
        hover && 'hover:shadow-glow hover:border-neon-cyan/20 dark:hover:border-neon-cyan/20',
        'transition-shadow duration-300',
        className
      )}
    >
      {children}
    </motion.div>
  )
}
