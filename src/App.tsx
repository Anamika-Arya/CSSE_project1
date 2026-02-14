import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Layout } from './components/Layout'

const Dashboard = lazy(() => import('./pages/Dashboard').then((m) => ({ default: m.Dashboard })))
const Societies = lazy(() => import('./pages/Societies').then((m) => ({ default: m.Societies })))
const Events = lazy(() => import('./pages/Events').then((m) => ({ default: m.Events })))
const AI = lazy(() => import('./pages/AI').then((m) => ({ default: m.AI })))

function PageLoader() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-neon-cyan border-t-transparent" />
    </div>
  )
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<PageLoader />}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="societies"
            element={
              <Suspense fallback={<PageLoader />}>
                <Societies />
              </Suspense>
            }
          />
          <Route
            path="events"
            element={
              <Suspense fallback={<PageLoader />}>
                <Events />
              </Suspense>
            }
          />
          <Route
            path="ai"
            element={
              <Suspense fallback={<PageLoader />}>
                <AI />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}
