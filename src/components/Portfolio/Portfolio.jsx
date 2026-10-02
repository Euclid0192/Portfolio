import React from 'react'
import { projects } from '../../data/projects'
import treverseLogo from '../../assets/treverse.svg'
import { HiStar } from 'react-icons/hi'
import { buttonClasses, Page } from '../ui'



const Portfolio = () => {
  return (
    <Page title="My recent works" hideTitle>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {
          projects.map(({id, image, title, github, featured}) => {
            return (
              <article key={id} className={`group/project relative flex min-w-0 flex-col rounded-2xl border bg-surface/95 p-6 backdrop-blur-md transition-colors hover:border-accent/50 hover:bg-transparent focus-within:bg-transparent motion-reduce:transition-none ${featured ? 'border-accent/50' : 'border-white/10'}`}>
                {featured && <span className="absolute left-9 top-9 z-10 inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-background/70 px-3 py-1 text-sm text-accent backdrop-blur-md"><HiStar aria-hidden="true" className="size-4" />Featured</span>}
                <div className="overflow-hidden rounded-xl">
                  <img src={image} alt={`${title} preview`} loading="lazy" className={`aspect-[8/7] w-full ${image === treverseLogo ? 'bg-background/40 object-contain p-8 transition-colors group-hover/project:bg-transparent group-focus-within/project:bg-transparent motion-reduce:transition-none' : 'object-cover'}`} />
                </div>
                <h2 className="my-5 text-center text-xl">{title}</h2>
                <div className="mt-auto flex justify-center gap-4">
                  <a href={github} className={buttonClasses} target="_blank" rel="noopener noreferrer" aria-label={`${title} on GitHub`}>Github</a>
                </div>
              </article>              
            )
          })
        }
      </div>
    </Page>
  )
}

export default Portfolio
