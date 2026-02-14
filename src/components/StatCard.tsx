import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { GlassCard } from './GlassCard'
import clsx from 'clsx'

interface StatCardProps {
  title: string
  value: number
  suffix?: string
  icon: LucideIcon
  delay?: number
  accent?: 'cyan' | 'purple'
}

export function StatCard({ title, value, suffix = '', icon: Icon, delay = 0, accent = 'cyan' }: StatCardProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 1200
    const steps = 40
    const stepValue = value / steps
    const stepDuration = duration / steps
    let current = 0
    const timer = setInterval(() => {
      current += stepValue
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)
    return () => clearInterval(timer)
  }, [value])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
    >
      <GlassCard className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{title}</p>
            <p className="mt-2 text-2xl font-bold tabular-nums">
              {count}
              {suffix}
            </p>
          </div>
          <div
            className={clsx(
              'flex h-12 w-12 items-center justify-center rounded-2xl',
              accent === 'cyan' && 'bg-neon-cyan/20 text-neon-cyan',
              accent === 'purple' && 'bg-neon-purple/20 text-neon-purple'
            )}
          >
            <Icon className="h-6 w-6" strokeWidth={2} />
          </div>
        </div>
      </GlassCard>
    </motion.div>
  )
}
