import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { LayoutDashboard, Users, Calendar, Sparkles } from 'lucide-react'
import { Sidebar } from './Sidebar'
import { Navbar } from './Navbar'
import clsx from 'clsx'

const bottomNavItems = [
  { to: '/', icon: LayoutDashboard, label: 'Home' },
  { to: '/societies', icon: Users, label: 'Societies' },
  { to: '/events', icon: Calendar, label: 'Events' },
  { to: '/ai', icon: Sparkles, label: 'AI' },
]

export function Layout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="min-h-screen">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed((c) => !c)} />
      <div
        className={clsx(
          'transition-[margin-left] duration-300',
          sidebarCollapsed ? 'md:ml-[72px]' : 'md:ml-[260px]'
        )}
      >
        <Navbar sidebarCollapsed={sidebarCollapsed} />
        <motion.main
          initial={false}
          className="p-4 md:p-6 pb-24 md:pb-6 min-h-[calc(100vh-4rem)]"
        >
          <Outlet />
        </motion.main>
      </div>

      {/* Mobile bottom nav */}
      <nav
        className={clsx(
          'fixed bottom-0 left-0 right-0 z-20 flex items-center justify-around gap-1',
          'rounded-t-3xl border-t border-white/20 dark:border-white/10',
          'backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 py-2 px-2',
          'md:hidden'
        )}
      >
        {bottomNavItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              clsx(
                'flex flex-col items-center gap-0.5 rounded-2xl px-4 py-2 text-xs font-medium transition-colors',
                isActive
                  ? 'text-neon-cyan bg-neon-cyan/10'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
              )
            }
          >
            <Icon className="h-5 w-5" strokeWidth={2} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
