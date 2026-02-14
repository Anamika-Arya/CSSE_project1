import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Users } from 'lucide-react'
import { GlassCard } from './GlassCard'
import clsx from 'clsx'

interface SocietyCardProps {
  name: string
  description: string
  members: number
  eventsCount: number
  category: string
  delay?: number
}

export function SocietyCard({
  name,
  description,
  members,
  eventsCount,
  category,
  delay = 0,
}: SocietyCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { stiffness: 300, damping: 30 }
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), springConfig)
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), springConfig)

  const [isHovering, setIsHovering] = useState(false)

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
    setIsHovering(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        transformStyle: 'preserve-3d',
      }}
      className="cursor-pointer"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
      >
        <GlassCard
          className={clsx(
            'overflow-hidden transition-all duration-300',
            isHovering && 'shadow-glow border-neon-cyan/30 dark:border-neon-cyan/30'
          )}
        >
          <div className="p-6">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-neon-cyan/30 to-neon-purple/30">
                <Users className="h-6 w-6 text-neon-cyan" />
              </div>
              <span className="rounded-full bg-neon-purple/20 px-2.5 py-0.5 text-xs font-medium text-neon-purple">
                {category}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{name}</h3>
            <p className="mt-2 line-clamp-2 text-sm text-slate-600 dark:text-slate-400">{description}</p>
            <div className="mt-4 flex gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>{members} members</span>
              <span>{eventsCount} events</span>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </motion.div>
  )
}
