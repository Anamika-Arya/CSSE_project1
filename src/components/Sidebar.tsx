import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard,
  Users,
  Calendar,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import clsx from 'clsx'

const navItems = [
  { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/societies', icon: Users, label: 'Societies' },
  { to: '/events', icon: Calendar, label: 'Events' },
  { to: '/ai', icon: Sparkles, label: 'AI' },
]

interface SidebarProps {
  collapsed: boolean
  onToggle: () => void
}

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  return (
    <motion.aside
      initial={false}
      animate={{ width: collapsed ? 72 : 260 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={clsx(
        'fixed left-0 top-0 z-30 hidden h-screen flex-shrink-0 flex-col',
        'rounded-r-3xl border-r border-white/20 dark:border-white/10',
        'backdrop-blur-xl bg-white/10 dark:bg-black/10',
        'md:flex'
      )}
    >
      <div className="flex h-16 items-center justify-between px-4 border-b border-white/10 dark:border-white/5">
        <AnimatePresence mode="wait">
          {!collapsed && (
            <motion.span
              key="logo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-lg font-bold bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent"
            >
              SocietyHub
            </motion.span>
          )}
        </AnimatePresence>
        <button
          type="button"
          onClick={onToggle}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 dark:bg-black/20 hover:bg-neon-cyan/20 text-slate-600 dark:text-slate-300 transition-colors"
        >
          {collapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
        </button>
      </div>
      <nav className="flex flex-1 flex-col gap-1 p-3">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              clsx(
                'flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-white/10 dark:hover:bg-black/20 hover:text-slate-900 dark:hover:text-slate-100'
              )
            }
          >
            <Icon className="h-5 w-5 flex-shrink-0" strokeWidth={2} />
            <AnimatePresence mode="wait">
              {!collapsed && (
                <motion.span
                  key="label"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden whitespace-nowrap"
                >
                  {label}
                </motion.span>
              )}
            </AnimatePresence>
          </NavLink>
        ))}
      </nav>
    </motion.aside>
  )
}
