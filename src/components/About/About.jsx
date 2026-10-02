import { focusClasses, Page } from '../ui'
import me2 from '../../assets/me2.jpeg'

const About = () => {
  return (
    <Page title="About me" hideTitle>
      <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
        <div className="min-w-0 text-lg leading-loose text-white/95 drop-shadow-md sm:text-xl">
          <h2 className="mb-5 text-2xl leading-relaxed sm:text-3xl">👋 Hi y'all!</h2>
          <p>
            I'm a Fullstack Software Engineer with experience across multiple roles building production-grade systems. Most recently at Flexcar, I helped build an AI agent that streamlines vehicle issue triage and maintenance appointment scheduling, serving 15,000+ Flexcar members. Outside of work, I'm a part-time pianist and guitarist who can play a song just by hearing it. Also a starter in cardistry.
          </p>
          <p className="mt-5">
            In case you don't know what cardistry is or want to get started,{' '}
            <a href="https://youtu.be/bYrCqMnKwT4?si=_hEN28JFXn3xv2xg" target="_blank" rel="noopener noreferrer" className={`rounded-sm text-accent underline underline-offset-4 hover:text-white ${focusClasses}`}>
              here's a video I really like
            </a>.
          </p>
        </div>

        <figure className="mx-auto w-[calc(100%-1rem)] max-w-sm -rotate-3 rounded-sm bg-stone-200 p-3 pb-12 shadow-[0_18px_40px_rgba(0,0,0,0.45),0_4px_10px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:rotate-0 motion-reduce:transform-none motion-reduce:transition-none sm:p-4 sm:pb-16">
          <img src={me2} alt="Nam Nguyen" className="aspect-[22/25] w-full rounded-xs object-cover" />
        </figure>

      </div>
    </Page>
  )
}

export default About
