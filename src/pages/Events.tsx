import { motion } from 'framer-motion'
import { EventCard } from '../components/EventCard'

const events = [
  {
    id: 1,
    title: 'Hack Night',
    date: 'Feb 16, 2025',
    time: '6:00 PM',
    venue: 'CS Lab, Block A',
    capacity: 50,
    registered: 42,
    status: 'upcoming' as const,
  },
  {
    id: 2,
    title: 'Drama Auditions',
    date: 'Feb 18, 2025',
    time: '4:00 PM',
    venue: 'Auditorium',
    capacity: 100,
    registered: 100,
    status: 'upcoming' as const,
  },
  {
    id: 3,
    title: 'Quiz Prelims',
    date: 'Feb 15, 2025',
    time: '3:00 PM',
    venue: 'Room 201',
    capacity: 60,
    registered: 58,
    status: 'ongoing' as const,
  },
  {
    id: 4,
    title: 'Music Open Mic',
    date: 'Feb 10, 2025',
    time: '7:00 PM',
    venue: 'Amphitheatre',
    capacity: 80,
    registered: 80,
    status: 'completed' as const,
  },
  {
    id: 5,
    title: 'Photo Walk',
    date: 'Feb 22, 2025',
    time: '8:00 AM',
    venue: 'Campus & City',
    capacity: 30,
    registered: 12,
    status: 'upcoming' as const,
  },
  {
    id: 6,
    title: 'Sports Fest Inauguration',
    date: 'Feb 25, 2025',
    time: '9:00 AM',
    venue: 'Main Ground',
    capacity: 200,
    registered: 145,
    status: 'upcoming' as const,
  },
]

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
}

export function Events() {
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
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Events</h1>
        <p className="mt-1 text-slate-600 dark:text-slate-400">
          Upcoming and past events. Capacity bars show registration progress.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <EventCard
            key={event.id}
            title={event.title}
            date={event.date}
            time={event.time}
            venue={event.venue}
            capacity={event.capacity}
            registered={event.registered}
            status={event.status}
            delay={index * 0.05}
          />
        ))}
      </div>
    </motion.div>
  )
}
