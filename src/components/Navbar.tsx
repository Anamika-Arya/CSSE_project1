import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Bell, ChevronDown } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'
import clsx from 'clsx'

export function Navbar({ sidebarCollapsed }: { sidebarCollapsed: boolean }) {
  const [searchOpen, setSearchOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const [notifPulse, setNotifPulse] = useState(true)

  return (
    <header
      className={clsx(
        'sticky top-0 z-20 flex h-16 items-center gap-4 rounded-b-3xl border-b border-white/20 dark:border-white/10',
        'backdrop-blur-xl bg-white/10 dark:bg-black/10 px-4 md:px-6',
        'transition-[margin-left] duration-300',
        sidebarCollapsed ? 'md:ml-[72px]' : 'md:ml-[260px]'
      )}
    >
      <Link
        to="/"
        className="md:hidden text-lg font-bold bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent"
      >
        SocietyHub
      </Link>

      <div className="flex flex-1 items-center justify-end gap-2 sm:gap-4">
        <button
          type="button"
          onClick={() => setSearchOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 dark:bg-black/20 hover:bg-white/20 dark:hover:bg-black/30 text-slate-600 dark:text-slate-300 transition-colors"
          aria-label="Search"
        >
          <Search className="h-5 w-5" />
        </button>

        <div className="relative">
          <button
            type="button"
            onClick={() => setNotifPulse(false)}
            className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 dark:bg-black/20 hover:bg-white/20 dark:hover:bg-black/30 text-slate-600 dark:text-slate-300 transition-colors"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />
            {notifPulse && (
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-neon-cyan animate-pulse ring-2 ring-white dark:ring-slate-900" />
            )}
          </button>
        </div>

        <ThemeToggle />

        <div className="relative">
          <button
            type="button"
            onClick={() => setProfileOpen((o) => !o)}
            className="flex items-center gap-2 rounded-2xl py-2 pl-2 pr-3 backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 hover:shadow-glow transition-shadow"
          >
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center text-white text-sm font-semibold">
              U
            </div>
            <span className="hidden sm:inline text-sm font-medium text-slate-700 dark:text-slate-200">
              User
            </span>
            <ChevronDown className="h-4 w-4 text-slate-500" />
          </button>

          <AnimatePresence>
            {profileOpen && (
              <>
                <button
                  type="button"
                  aria-label="Close menu"
                  className="fixed inset-0 z-10"
                  onClick={() => setProfileOpen(false)}
                />
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-full z-20 mt-2 w-48 rounded-2xl border border-white/20 dark:border-white/10 backdrop-blur-xl bg-white/90 dark:bg-slate-900/90 p-2 shadow-soft dark:shadow-soft-dark"
                >
                  <div className="rounded-xl px-3 py-2 text-sm text-slate-600 dark:text-slate-400">
                    Signed in as <span className="font-medium text-slate-900 dark:text-slate-100">user@college.edu</span>
                  </div>
                  <Link
                    to="/"
                    onClick={() => setProfileOpen(false)}
                    className="block rounded-xl px-3 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-white/50 dark:hover:bg-black/20"
                  >
                    Dashboard
                  </Link>
                  <button
                    type="button"
                    onClick={() => setProfileOpen(false)}
                    className="w-full rounded-xl px-3 py-2 text-left text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
                  >
                    Sign out
                  </button>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute left-4 right-4 top-full mt-2 rounded-2xl border border-white/20 dark:border-white/10 backdrop-blur-xl bg-white/95 dark:bg-slate-900/95 p-3 shadow-soft"
          >
            <input
              type="search"
              placeholder="Search societies, events..."
              className="w-full rounded-xl border border-white/20 bg-white/50 dark:bg-black/20 px-4 py-2 text-sm focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20"
              autoFocus
            />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
