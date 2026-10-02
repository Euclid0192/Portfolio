import { useRef } from 'react'
import { MdEmail } from 'react-icons/md'
import { FaFacebookMessenger, FaLinkedin } from 'react-icons/fa'
import emailjs from 'emailjs-com'
import { buttonClasses, focusClasses, Page } from '../ui'

const fieldClasses = `mt-2 w-full rounded-lg border border-white/20 bg-surface/95 px-4 py-3 text-lg text-white placeholder:text-white/60 ${focusClasses}`

const contacts = [
  { title: 'Email', detail: 'nguyenhainam8668@gmail.com', href: 'mailto:nguyenhainam8668@gmail.com', Icon: MdEmail },
  { title: 'Messenger', detail: 'Nguyen Hai Nam', href: 'https://www.facebook.com/nhn0192', Icon: FaFacebookMessenger },
  { title: 'LinkedIn', detail: 'Nam Nguyen', href: 'https://www.linkedin.com/in/namnguyen0192', Icon: FaLinkedin },
]

export default function Contact() {
  const form = useRef()

  const sendEmail = (event) => {
    event.preventDefault()
    emailjs.sendForm('service_r0odvmk', 'template_k7bc92k', form.current, 'Ob_zrnWgCsP0JuuCA')
      .then((result) => console.log(result.text), (error) => console.log(error.text))
    event.target.reset()
  }

  return (
    <Page title="Get in touch with me" hideTitle>
      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_1.5fr] lg:gap-12">
        <div className="flex min-w-0 flex-col gap-5">
          {contacts.map(({ title, detail, href, Icon }) => (
            <article key={title} className="rounded-2xl border border-white/10 bg-surface/95 p-6 text-center backdrop-blur-md transition-colors hover:border-accent/50 hover:bg-transparent focus-within:bg-transparent motion-reduce:transition-none">
              <Icon size={28} aria-hidden="true" className="mx-auto mb-3 text-accent" />
              <h2 className="text-xl">{title}</h2>
              <p className="mt-1 break-words text-base text-white/90">{detail}</p>
              {href && <a href={href} target="_blank" rel="noopener noreferrer" className={`mt-3 inline-block rounded-sm text-accent underline underline-offset-4 hover:text-white ${focusClasses}`}>{title === 'LinkedIn' ? 'View profile' : 'Send a message'}<span className="sr-only"> via {title}</span></a>}
            </article>
          ))}
        </div>
        <form ref={form} onSubmit={sendEmail} className="flex min-w-0 flex-col gap-5">
          <label htmlFor="contact-name">Your full name
            <input id="contact-name" type="text" name="name" autoComplete="name" placeholder="Your full name" required className={fieldClasses} />
          </label>
          <label htmlFor="contact-email">Your email
            <input id="contact-email" type="email" name="email" autoComplete="email" placeholder="Your email" required className={fieldClasses} />
          </label>
          <label htmlFor="contact-message">Your message
            <textarea id="contact-message" name="message" rows={7} placeholder="Your message" required className={`${fieldClasses} resize-y`} />
          </label>
          <button className={`${buttonClasses} self-start`} type="submit">Send</button>
        </form>
      </div>
    </Page>
  )
}
