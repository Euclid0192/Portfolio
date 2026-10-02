import { useEffect, useRef, useState } from 'react'

function ExperienceCard({ experience, index }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!window.IntersectionObserver || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.12 })
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <li ref={ref} className={`relative pl-9 transition-[opacity,transform] duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none sm:pl-12 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
      <span aria-hidden="true" className="pointer-events-none absolute left-0 top-8 size-4 sm:left-1">
        {index === 0 && <>
          <span className="absolute -inset-3 animate-pulse rounded-full bg-accent/30 blur-md [animation-duration:4s] motion-reduce:animate-none" />
          <span className="absolute inset-0 animate-ping rounded-full border border-orange-300/50 bg-accent/20 [animation-duration:3s] motion-reduce:hidden" />
          <span className="absolute inset-0 animate-ping rounded-full border border-amber-200/40 [animation-delay:-1.5s] [animation-duration:3s] motion-reduce:hidden" />
        </>}
        <span className={`absolute inset-0 rounded-full border-4 border-background bg-accent ring-1 ring-accent/60 ${index === 0 ? 'shadow-[0_0_18px_rgba(255,127,80,0.5)]' : ''}`} />
      </span>
      <article className="rounded-2xl border border-white/15 bg-surface/70 p-6 shadow-lg backdrop-blur-md transition-colors hover:border-accent/50 hover:bg-transparent motion-reduce:transition-none sm:p-8">
        <p className="mb-3 text-sm text-white/60">{experience.dates}{experience.duration && <span> &middot; {experience.duration}</span>}</p>
        <h2 className="text-2xl text-white sm:text-3xl">{experience.company}{experience.role && ` - ${experience.role}`}</h2>
        <p className="mt-2 text-accent">{experience.employmentType}</p>
        <p className="mt-2 text-sm text-white/60">{experience.location}{experience.workMode && <span> &middot; {experience.workMode}</span>}</p>
        {experience.description && <p className="mt-5 leading-relaxed text-white/80">{experience.description}</p>}
        {experience.highlights?.length > 0 && <ul className="mt-5 list-disc space-y-3 pl-5 leading-relaxed text-white/80 marker:text-accent">{experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>}
      </article>
    </li>
  )
}

export default function ExperienceTimeline({ experiences }) {
  return (
    <div className="relative mx-auto max-w-4xl">
      <div aria-hidden="true" className="absolute bottom-8 left-[7px] top-8 w-px bg-gradient-to-b from-accent via-accent/40 to-transparent sm:left-[11px]" />
      <ol aria-label="Work experience timeline" className="space-y-10 pb-8 sm:space-y-14">
        {experiences.map((experience, index) => <ExperienceCard key={experience.id} experience={experience} index={index} />)}
      </ol>
    </div>
  )
}
