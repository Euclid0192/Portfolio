import { useState } from 'react'
import { HiOutlineCode, HiOutlinePause, HiOutlinePlay } from 'react-icons/hi'
import { focusClasses, Page } from '../ui'
import technologies from './technologies.json'

const rings = [
  {
    id: 'ai', label: 'AI & APIs', size: 'w-[38%]', radius: '-top-[19cqw]',
    plane: '[transform:rotateZ(-28deg)_rotateX(40deg)]',
    billboard: '[transform:rotateX(-40deg)_rotateZ(28deg)]',
    duration: '[animation-duration:calc(76s/var(--orbit-speed))]', color: 'border-amber-300/40', phase: 16,
  },
  {
    id: 'data', label: 'Data & cloud', size: 'w-[62%]', radius: '-top-[31cqw]',
    plane: '[transform:rotateZ(-16deg)_rotateX(32deg)]',
    billboard: '[transform:rotateX(-32deg)_rotateZ(16deg)]',
    duration: '[animation-duration:calc(112s/var(--orbit-speed))]', color: 'border-emerald-300/40', phase: 5,
  },
  {
    id: 'languages', label: 'Languages', size: 'w-[74%]', radius: '-top-[37cqw]',
    plane: '[transform:rotateZ(32deg)_rotateX(54deg)]',
    billboard: '[transform:rotateX(-54deg)_rotateZ(-32deg)]',
    duration: '[animation-duration:calc(132s/var(--orbit-speed))]', color: 'border-sky-300/40', phase: 18, reverse: true,
  },
  {
    id: 'tools', label: 'Tools & delivery', size: 'w-[86%]', radius: '-top-[43cqw]',
    plane: '[transform:rotateZ(-38deg)_rotateX(46deg)]',
    billboard: '[transform:rotateX(-46deg)_rotateZ(38deg)]',
    duration: '[animation-duration:calc(154s/var(--orbit-speed))]', color: 'border-violet-300/40', phase: 3,
  },
  {
    id: 'frameworks', label: 'Frameworks and libraries', size: 'w-[96%]', radius: '-top-[48cqw]',
    plane: '[transform:rotateZ(12deg)_rotateX(34deg)]',
    billboard: '[transform:rotateX(-34deg)_rotateZ(-12deg)]',
    duration: '[animation-duration:calc(180s/var(--orbit-speed))]', color: 'border-accent/45', phase: 12, reverse: true,
  },
]

function Orbit({ ring, paused, onSelect, isolated }) {
  const items = technologies.filter((technology) => technology.category === ring.id)
  const motion = `motion-reduce:animate-none ${paused ? '[animation-play-state:paused]' : ''}`

  return (
    <div className={`pointer-events-none absolute left-1/2 top-1/2 aspect-square -translate-1/2 transform-3d ${ring.size}`}>
      <div className={`absolute inset-0 transform-3d ${ring.plane}`}>
        <div aria-hidden="true" className={`absolute inset-0 rounded-full border ${ring.color} shadow-[0_0_18px_rgba(255,255,255,0.04)]`} />
        <ul aria-label={ring.label} className={`absolute left-1/2 top-1/2 size-0 animate-spin transform-3d ${ring.duration} ${ring.reverse ? '[animation-direction:reverse]' : ''} ${motion}`}>
          {items.map((technology, index) => (
            // Only the data-driven angle is a custom property; styling and motion use Tailwind.
            <li key={technology.name} style={{ '--orbit-angle': `${ring.phase + (index * 360) / items.length}deg` }} className="absolute left-0 top-0 size-0 transform-3d [transform:rotateZ(var(--orbit-angle))]">
              <div className={`absolute left-0 -translate-1/2 transform-3d ${ring.radius}`}>
                <div className="transform-3d [transform:rotateZ(calc(var(--orbit-angle)*-1))]">
                  <div className={`animate-spin transform-3d ${ring.duration} ${ring.reverse ? '' : '[animation-direction:reverse]'} ${motion}`}>
                    <div className={`transform-3d ${ring.billboard}`}>
                      <button
                        type="button"
                        aria-label={technology.name}
                        onPointerOver={() => onSelect(technology)}
                        onFocus={() => onSelect(technology)}
                        onClick={() => onSelect(technology)}
                        className={`group/logo pointer-events-auto relative flex items-center justify-center gap-0.5 rounded-full border border-white/70 p-1.5 shadow-[0_6px_16px_rgba(0,0,0,0.4)] transition-shadow hover:shadow-[0_0_20px_rgba(255,127,80,0.65)] motion-reduce:transition-none sm:p-2.5 lg:p-3 ${isolated ? 'size-[clamp(2rem,8cqw,4rem)]' : 'size-[clamp(1.5rem,7cqw,3.5rem)]'} bg-stone-100 ${focusClasses}`}
                      >
                        {technology.icons.map((icon) => <img key={icon} src={icon} alt="" draggable="false" className={`min-w-0 flex-1 ${technology.name === 'BullMQ' ? 'aspect-[4/3] object-cover object-left' : 'h-full object-contain'}`} />)}
                        <span aria-hidden="true" className="pointer-events-none absolute left-1/2 top-full mt-2 w-max max-w-44 -translate-x-1/2 rounded-md border border-white/15 bg-background px-2 py-1 text-center text-sm text-white opacity-0 transition-opacity group-hover/logo:opacity-100 group-focus-visible/logo:opacity-100">{technology.name}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Languages() {
  const [category, setCategory] = useState('all')
  const [paused, setPaused] = useState(false)
  const [speed, setSpeed] = useState(2)
  const [selected, setSelected] = useState(null)
  const visibleRings = rings.filter((ring) => category === 'all' || category === ring.id)
  const visibleCount = technologies.filter((technology) => category === 'all' || category === technology.category).length

  const selectTechnology = (technology) => setSelected(technology)

  return (
    <Page title="Languages & technologies" hideTitle className="py-3 sm:py-4">
      <div className="relative overflow-clip bg-transparent px-3 py-3 sm:px-6 sm:py-4">
        <div className="relative z-10 flex flex-wrap items-center justify-center gap-2" role="group" aria-label="Filter technologies">
          {[{ id: 'all', label: 'All technologies' }, ...rings].map(({ id, label }) => (
            <button key={id} type="button" aria-pressed={category === id} onClick={() => { setCategory(id); setSelected(null) }} className={`rounded-full border px-3 py-2 text-sm transition-colors sm:px-4 sm:text-base ${focusClasses} ${category === id ? 'border-accent/60 bg-accent/10 text-accent' : 'border-white/15 text-white/75 hover:border-white/40 hover:text-white'}`}>
              {label}
            </button>
          ))}
        </div>

        <div style={{ '--orbit-speed': speed }} className="pointer-events-none @container relative mx-auto aspect-square w-full max-w-[min(56rem,calc(100dvh-6rem))] perspective-[1400px]" aria-label="Orbiting technology logos">
          <div aria-hidden="true" className="pointer-events-none absolute inset-[15%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,127,80,0.12),rgba(139,92,246,0.08)_40%,transparent_70%)]" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-4 bg-[radial-gradient(circle_at_12%_24%,rgba(255,255,255,0.5)_1px,transparent_2px),radial-gradient(circle_at_86%_32%,rgba(255,255,255,0.4)_1px,transparent_2px),radial-gradient(circle_at_22%_76%,rgba(255,255,255,0.35)_1px,transparent_2px),radial-gradient(circle_at_74%_82%,rgba(255,255,255,0.4)_1px,transparent_2px)]" />
          <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 size-12 -translate-1/2 sm:size-20">
            <div className="absolute -inset-8 animate-pulse rounded-full bg-[radial-gradient(circle,rgba(255,160,75,0.35),rgba(255,127,80,0.12)_45%,transparent_70%)] blur-md [animation-duration:4s] motion-reduce:animate-none sm:-inset-12" />
            <div className="absolute -inset-1 animate-ping rounded-full border border-orange-300/30 bg-accent/10 [animation-duration:4s] motion-reduce:hidden" />
            <div className="absolute -inset-1 animate-ping rounded-full border border-amber-200/25 bg-orange-300/5 [animation-delay:-2s] [animation-duration:4s] motion-reduce:hidden" />
            <div className="relative flex size-full items-center justify-center overflow-hidden rounded-full border border-orange-200/50 bg-[radial-gradient(circle_at_30%_25%,#ffe2ad,#ff9a50_35%,#d65632_75%,#88352b)] text-white shadow-[0_0_45px_rgba(255,127,80,0.45)] sm:shadow-[0_0_80px_rgba(255,127,80,0.45)]">
              <div className="absolute -inset-1/2 animate-spin rounded-full bg-[conic-gradient(from_0deg,transparent,rgba(255,235,170,0.3),transparent_40%,rgba(255,160,75,0.2),transparent_80%)] blur-sm [animation-duration:18s] motion-reduce:animate-none" />
              <HiOutlineCode className="relative size-6 sm:size-9" />
            </div>
          </div>
          {visibleRings.map((ring) => <Orbit key={ring.id} ring={visibleRings.length === 1 ? { ...ring, size: 'w-[82%]', radius: '-top-[41cqw]' } : ring} isolated={visibleRings.length === 1} paused={paused} onSelect={selectTechnology} />)}
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-4xl grid-cols-2 items-center gap-3 border-t border-white/10 pt-3 sm:flex sm:justify-between">
          <div className="col-span-2 min-w-0 text-center sm:text-left" aria-live="polite" aria-atomic="true">
            <p className="text-xl text-white">{selected ? selected.name : `${visibleCount} technologies, one orbit at a time.`}</p>
            <p className="mt-1 text-sm text-white/60">
              {selected ? rings.find((ring) => ring.id === selected.category)?.label : 'Filter a ring, then hover, tap, or focus a logo.'}
            </p>
          </div>
          <div className="flex w-full max-w-52 flex-col gap-2 motion-reduce:hidden">
            <label htmlFor="orbit-speed" className="flex justify-between text-sm text-white/75">
              <span>Rotation speed</span><span>{speed.toFixed(2).replace(/0$/, '')}&times;</span>
            </label>
            <input id="orbit-speed" type="range" min="0.25" max="3" step="0.25" value={speed} onChange={(event) => setSpeed(Number(event.target.value))} className={`w-full cursor-pointer accent-accent ${focusClasses}`} />
          </div>
          <button type="button" aria-pressed={paused} onClick={() => setPaused(!paused)} className={`inline-flex justify-self-end shrink-0 items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-white/85 transition-colors hover:border-accent hover:text-accent motion-reduce:hidden ${focusClasses}`}>
            {paused ? <HiOutlinePlay aria-hidden="true" /> : <HiOutlinePause aria-hidden="true" />}
            {paused ? 'Resume rotation' : 'Pause rotation'}
          </button>
          <span className="hidden text-sm text-white/60 motion-reduce:inline">Motion reduced</span>
        </div>
      </div>
    </Page>
  )
}
