import { Link } from 'react-router-dom'
import CTA from './CTA'
import Terminal from './Terminal'
import TypingIntro from './TypingIntro'
import HeaderSocial from './HeaderSocial'
import { Container, focusClasses, PageHeading } from '../ui'

export default function Header() {
  return (
    <section className="flex min-h-[calc(100dvh-5rem)] items-center py-12 sm:py-16">
      <Container className="grid items-center gap-12 text-center lg:grid-cols-2 lg:gap-16 lg:text-left">
        <div>
          <PageHeading className="mb-6">Hey, I'm Nam Nguyen</PageHeading>
          <TypingIntro />
          <CTA />
          <HeaderSocial />
          <Link to="/about" className={`mt-8 inline-block rounded-sm text-lg text-accent underline underline-offset-4 hover:text-white ${focusClasses}`}>About me &rarr;</Link>
        </div>
        <Terminal />
      </Container>
    </section>
  )
}
