import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navigation } from '../../navigation'
import { Container, focusClasses } from '../ui'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const menuButton = useRef(null)
  const location = useLocation()
  const currentSection = navigation.find(({ to }) => to === location.pathname)?.label

  useEffect(() => { setOpen(false) }, [location])

  useEffect(() => {
    if (!open) return
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        menuButton.current?.focus()
      }
    }
    const closeOnDesktop = (event) => { if (event.matches) setOpen(false) }
    const desktop = window.matchMedia('(min-width: 64rem)')
    document.addEventListener('keydown', closeOnEscape)
    desktop.addEventListener('change', closeOnDesktop)
    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      desktop.removeEventListener('change', closeOnDesktop)
    }
  }, [open])

  return (
    <nav aria-label="Main navigation" className="sticky top-0 z-40 border-b border-white/10 bg-background shadow-lg">
      <Container className="flex min-h-20 flex-wrap items-center justify-between gap-x-2 sm:gap-x-6">
        <Link to="/" onClick={() => setOpen(false)} className={`rounded-sm text-lg text-accent sm:text-2xl ${focusClasses}`}>Nam Nguyen</Link>
        <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
          {currentSection && <span className="text-sm text-accent sm:text-base">{currentSection}</span>}
          <button ref={menuButton} type="button" aria-expanded={open} aria-controls="navigation-links" onClick={() => setOpen(!open)} className={`rounded-lg border border-white/20 px-3 py-2 text-base hover:border-accent hover:text-accent sm:px-4 ${focusClasses}`}>
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
        <ul id="navigation-links" className={`${open ? 'flex' : 'hidden'} max-h-[calc(100dvh-5rem)] w-full flex-col gap-1 overflow-y-auto pb-4 lg:flex lg:w-auto lg:flex-row lg:gap-1 lg:overflow-visible lg:pb-0`}>
          {navigation.map(({ label, to }) => (
            <li key={to}>
              <NavLink to={to} end={to === '/'} onClick={() => setOpen(false)} className={({ isActive }) => `block rounded-lg px-3 py-2 text-lg transition-colors motion-reduce:transition-none ${focusClasses} ${isActive ? 'bg-accent/10 text-accent' : 'text-white/90 hover:bg-white/5 hover:text-accent'}`}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  )
}
