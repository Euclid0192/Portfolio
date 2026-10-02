import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { focusClasses } from '../ui'

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/namnguyen0192/', Icon: BsLinkedin },
  { label: 'GitHub', href: 'https://github.com/Euclid0192', Icon: FaGithub },
  { label: 'LeetCode', href: 'https://leetcode.com/Euclid1234/', Icon: SiLeetcode },
]

export default function HeaderSocial() {
  return (
    <div className="mt-8 flex justify-center gap-5 lg:justify-start">
      {socials.map(({ label, href, Icon }) => (
        <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer" className={`rounded-sm text-accent transition-colors hover:text-white ${focusClasses}`}><Icon size={28} aria-hidden="true" /></a>
      ))}
    </div>
  )
}
