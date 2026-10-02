import { Link } from 'react-router-dom'
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa'
import { FaSquareThreads } from 'react-icons/fa6'
import { navigation } from '../../navigation'
import { Container, focusClasses } from '../ui'

const socials = [
  { label: 'Facebook', href: 'https://www.facebook.com/nhn0192', Icon: FaFacebookSquare },
  { label: 'Instagram', href: 'https://www.instagram.com/nhn0192/', Icon: FaInstagramSquare },
  { label: 'Threads', href: 'https://www.threads.net/@nhn0192', Icon: FaSquareThreads },
]

// Kept available for a future content update; the current layout does not render it.
export default function Footer() {
  return (
    <footer className="bg-surface py-12 text-center">
      <Container>
        <Link to="/" className={`inline-block rounded-sm text-2xl text-accent ${focusClasses}`}>Nam Nguyen</Link>
        <ul className="my-8 flex flex-wrap justify-center gap-6">
          {navigation.map(({ label, to }) => <li key={to}><Link to={to} className={`rounded-sm hover:text-accent ${focusClasses}`}>{label}</Link></li>)}
        </ul>
        <div className="mb-8 flex justify-center gap-4">
          {socials.map(({ label, href, Icon }) => <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer" className={`rounded-lg bg-background p-3 hover:text-accent ${focusClasses}`}><Icon size={24} aria-hidden="true" /></a>)}
        </div>
        <small>&copy; Nam Nguyen's Portfolio. All rights reserved.</small>
      </Container>
    </footer>
  )
}
