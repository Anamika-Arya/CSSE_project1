import { motion } from 'framer-motion'
import { Calendar, MapPin, Users } from 'lucide-react'
import { GlassCard } from './GlassCard'
import clsx from 'clsx'

interface EventCardProps {
  title: string
  date: string
  time: string
  venue: string
  capacity: number
  registered: number
  status: 'upcoming' | 'ongoing' | 'completed'
  delay?: number
}

const statusConfig = {
  upcoming: { label: 'Upcoming', pulse: true, className: 'bg-neon-cyan/20 text-neon-cyan' },
  ongoing: { label: 'Live', pulse: true, className: 'bg-emerald-500/20 text-emerald-400' },
  completed: { label: 'Done', pulse: false, className: 'bg-slate-500/20 text-slate-400' },
}

export function EventCard({
  title,
  date,
  time,
  venue,
  capacity,
  registered,
  status,
  delay = 0,
}: EventCardProps) {
  const config = statusConfig[status]
  const pct = capacity > 0 ? Math.min(100, (registered / capacity) * 100) : 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -6 }}
      className="group"
    >
      <GlassCard
        className={clsx(
          'overflow-hidden transition-all duration-300',
          'group-hover:shadow-glow group-hover:border-neon-purple/30 dark:group-hover:border-neon-purple/30'
        )}
      >
        <div className="p-6">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
            <span
              className={clsx(
                'flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium',
                config.className,
                config.pulse && 'animate-pulse'
              )}
            >
              {config.pulse && <span className="h-1.5 w-1.5 rounded-full bg-current" />}
              {config.label}
            </span>
          </div>
          <div className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 flex-shrink-0 text-neon-cyan" />
              <span>
                {date} · {time}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 flex-shrink-0 text-neon-purple" />
              <span>{venue}</span>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
              <span className="flex items-center gap-1">
                <Users className="h-3.5 w-3.5" />
                Capacity
              </span>
              <span>
                {registered}/{capacity}
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/20 dark:bg-black/20">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${pct}%` }}
                transition={{ duration: 0.8, delay: delay + 0.2 }}
                className="h-full rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple"
              />
            </div>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  )
}
