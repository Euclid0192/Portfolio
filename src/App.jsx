import { BrowserRouter, Link, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Languages from './components/Languages/Languages'
import Portfolio from './components/Portfolio/Portfolio'
import Background from './components/Background/Background'
import { buttonClasses, Page } from './components/ui'
import { navigation } from './navigation'

const legacyRoutes = {
  '#about': '/about',
  '#experience': '/languages',
  '#portfolio': '/projects',
  '#contact': '/contacts',
}

function RouteEffects() {
  const { pathname } = useLocation()

  useEffect(() => {
    const title = navigation.find((item) => item.to === pathname)?.label ?? 'Page not found'
    document.title = `${title} | Nam Nguyen`
    window.scrollTo({ top: 0, behavior: 'instant' })
    document.querySelector('#page-heading')?.focus({ preventScroll: true })
  }, [pathname])

  return null
}

function Home() {
  const { hash } = useLocation()
  return legacyRoutes[hash] ? <Navigate to={legacyRoutes[hash]} replace /> : <Header />
}

function NotFound() {
  return (
    <Page title="Page not found">
      <div className="text-center">
        <p className="mb-8 text-lg text-white/90">This page doesn't exist. Let's get you back home.</p>
        <Link to="/" className={buttonClasses}>Back to Home</Link>
      </div>
    </Page>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative isolate min-h-dvh bg-background font-sans leading-relaxed text-white">
        <Background />
        <a href="#main-content" className="fixed left-4 top-4 z-50 -translate-y-32 rounded-lg bg-accent px-5 py-3 text-background focus:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Skip to content</a>
        <Nav />
        <main id="main-content" tabIndex={-1} className="min-h-[calc(100dvh-5rem)] focus:outline-none">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/languages" element={<Languages />} />
            <Route path="/projects" element={<Portfolio />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <RouteEffects />
      </div>
    </BrowserRouter>
  )
}
