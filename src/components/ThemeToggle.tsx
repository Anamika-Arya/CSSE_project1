import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import clsx from 'clsx'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={clsx(
        'relative flex h-10 w-10 items-center justify-center rounded-2xl',
        'backdrop-blur-xl border border-white/20 dark:border-white/10',
        'bg-white/10 dark:bg-black/10',
        'hover:shadow-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan/50',
        'transition-shadow duration-300'
      )}
    >
      <div className="relative h-5 w-5 overflow-hidden">
        <motion.div
          initial={false}
          animate={{
            rotate: isDark ? 0 : 360,
            y: isDark ? 0 : 24,
            opacity: isDark ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun className="h-5 w-5 text-amber-400" strokeWidth={2} />
        </motion.div>
        <motion.div
          initial={false}
          animate={{
            y: isDark ? 0 : -24,
            opacity: isDark ? 0 : 1,
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon className="h-5 w-5 text-neon-cyan" strokeWidth={2} />
        </motion.div>
      </div>
    </button>
  )
}
