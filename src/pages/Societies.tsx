import { motion } from 'framer-motion'
import { SocietyCard } from '../components/SocietyCard'

const societies = [
  {
    id: 1,
    name: 'Coding Club',
    description: 'Build projects, participate in hackathons, and learn modern development practices.',
    members: 156,
    eventsCount: 12,
    category: 'Tech',
  },
  {
    id: 2,
    name: 'Drama Society',
    description: 'Theatre, street plays, and acting workshops for everyone who loves the stage.',
    members: 89,
    eventsCount: 8,
    category: 'Cultural',
  },
  {
    id: 3,
    name: 'Literary Club',
    description: 'Poetry, debates, quizzes, and creative writing. Words matter.',
    members: 124,
    eventsCount: 15,
    category: 'Literary',
  },
  {
    id: 4,
    name: 'Sports Council',
    description: 'Inter-college tournaments, fitness events, and sports management.',
    members: 234,
    eventsCount: 20,
    category: 'Sports',
  },
  {
    id: 5,
    name: 'Music Society',
    description: 'Bands, open mics, and music production. For every kind of musician.',
    members: 78,
    eventsCount: 6,
    category: 'Cultural',
  },
  {
    id: 6,
    name: 'Photography Club',
    description: 'Photo walks, editing workshops, and exhibition opportunities.',
    members: 65,
    eventsCount: 5,
    category: 'Tech',
  },
]

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
}

export function Societies() {
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
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Societies</h1>
        <p className="mt-1 text-slate-600 dark:text-slate-400">
          Browse and join college societies. Hover cards for 3D tilt.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {societies.map((society, index) => (
          <SocietyCard
            key={society.id}
            name={society.name}
            description={society.description}
            members={society.members}
            eventsCount={society.eventsCount}
            category={society.category}
            delay={index * 0.05}
          />
        ))}
      </div>
    </motion.div>
  )
}
