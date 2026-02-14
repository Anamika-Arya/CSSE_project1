import { motion } from 'framer-motion'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts'
import { Users, Calendar, TrendingUp, Award } from 'lucide-react'
import { StatCard } from '../components/StatCard'
import { GlassCard } from '../components/GlassCard'

const lineData = [
  { name: 'Mon', events: 4, registrations: 12 },
  { name: 'Tue', events: 6, registrations: 18 },
  { name: 'Wed', events: 3, registrations: 22 },
  { name: 'Thu', events: 8, registrations: 15 },
  { name: 'Fri', events: 5, registrations: 28 },
  { name: 'Sat', events: 7, registrations: 20 },
  { name: 'Sun', events: 2, registrations: 10 },
]

const pieData = [
  { name: 'Tech', value: 35, color: '#00f5ff' },
  { name: 'Cultural', value: 28, color: '#a855f7' },
  { name: 'Sports', value: 22, color: '#22c55e' },
  { name: 'Literary', value: 15, color: '#f59e0b' },
]

const recentActivity = [
  { id: 1, text: 'New member joined Coding Club', time: '2m ago' },
  { id: 2, text: 'Event "Hack Night" registration opened', time: '15m ago' },
  { id: 3, text: 'Drama Society posted new event', time: '1h ago' },
  { id: 4, text: 'Sports fest registration closed', time: '2h ago' },
]

const upcomingEvents = [
  { title: 'Hack Night', date: 'Feb 16', society: 'Coding Club' },
  { title: 'Drama Auditions', date: 'Feb 18', society: 'Drama Society' },
  { title: 'Quiz Prelims', date: 'Feb 20', society: 'Literary Club' },
]

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
}

export function Dashboard() {
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
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Dashboard</h1>
        <p className="mt-1 text-slate-600 dark:text-slate-400">Overview of your society activity</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Societies" value={12} icon={Users} delay={0} accent="cyan" />
        <StatCard title="Upcoming Events" value={24} icon={Calendar} delay={0.05} accent="purple" />
        <StatCard title="Active Members" value={1847} icon={TrendingUp} delay={0.1} accent="cyan" />
        <StatCard title="Events This Month" value={18} icon={Award} delay={0.15} accent="purple" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard hover={false} className="p-6">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
            Events & Registrations
          </h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-white/10 dark:stroke-white/5" />
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} />
                <YAxis stroke="#94a3b8" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    borderRadius: '1rem',
                    border: '1px solid rgba(255,255,255,0.2)',
                    background: 'rgba(255,255,255,0.95)',
                  }}
                  labelStyle={{ color: '#0f172a' }}
                />
                <Line
                  type="monotone"
                  dataKey="events"
                  stroke="#00f5ff"
                  strokeWidth={2}
                  dot={{ fill: '#00f5ff', r: 4 }}
                  name="Events"
                />
                <Line
                  type="monotone"
                  dataKey="registrations"
                  stroke="#a855f7"
                  strokeWidth={2}
                  dot={{ fill: '#a855f7', r: 4 }}
                  name="Registrations"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard hover={false} className="p-6">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
            Society Categories
          </h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                  nameKey="name"
                  label={({ name, percent }) => `${name} ${((percent ?? 0) * 100).toFixed(0)}%`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Legend />
                <Tooltip
                  formatter={(value: number | undefined) => [`${value ?? 0}%`, 'Share']}
                  contentStyle={{
                    borderRadius: '1rem',
                    border: '1px solid rgba(255,255,255,0.2)',
                    background: 'rgba(255,255,255,0.95)',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard hover={false} className="p-6">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
            Recent Activity
          </h2>
          <ul className="space-y-3">
            {recentActivity.map((item, i) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i }}
                className="flex items-center justify-between rounded-2xl bg-white/10 dark:bg-black/10 px-4 py-3"
              >
                <span className="text-sm text-slate-700 dark:text-slate-200">{item.text}</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">{item.time}</span>
              </motion.li>
            ))}
          </ul>
        </GlassCard>

        <GlassCard hover={false} className="p-6">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
            Upcoming Events
          </h2>
          <ul className="space-y-3">
            {upcomingEvents.map((event, i) => (
              <motion.li
                key={event.title}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i }}
                className="flex items-center justify-between rounded-2xl bg-white/10 dark:bg-black/10 px-4 py-3"
              >
                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">{event.title}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{event.society}</p>
                </div>
                <span className="text-sm font-medium text-neon-cyan">{event.date}</span>
              </motion.li>
            ))}
          </ul>
        </GlassCard>
      </div>
    </motion.div>
  )
}
