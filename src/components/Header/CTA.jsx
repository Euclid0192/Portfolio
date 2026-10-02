import { Link } from 'react-router-dom'
import { buttonClasses } from '../ui'

export default function CTA() {
  return (
    <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
      <a href="https://drive.google.com/file/d/1N-fbveP6BFVBgyTa7hkCKKixc4Zvyqjx/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={buttonClasses}>Download Resume</a>
      <Link to="/contacts" className={buttonClasses}>Contact me</Link>
    </div>
  )
}
