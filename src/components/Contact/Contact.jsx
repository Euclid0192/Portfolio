import React, { useRef } from 'react'
import './Contact.css'
import { MdEmail } from "react-icons/md"
import { FaFacebookMessenger } from "react-icons/fa"
import { FaMessage } from "react-icons/fa6"
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r0odvmk', 'template_k7bc92k', form.current, 'Ob_zrnWgCsP0JuuCA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
    e.target.reset()
  }

  return (
    <section id='contact'>
      <h2>Get in touch with me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>nguyenhainam8668@gmail.com</h5>
            <a href='mailto:nguyenhainam8668@gmail.com' target='_blank' rel='noopener noreferrer'>Send a message</a>
          </article>

          <article className='contact__option'>
            <FaFacebookMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Nguyen Hai Nam</h5>
            <a href='https://www.facebook.com/nhn0192' target='_blank' rel='noopener noreferrer'>Send a message</a>
          </article>

          <article className='contact__option'>
            <FaMessage className='contact__option-icon'/>
            <h4>Phone/iMessage</h4>
            <h5>+(517)-980-4310</h5>
          </article>
        </div>
        {/* End of Contact options */}

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your full name' required />
          <input type='email' name='email' placeholder='Your email' required />
          <textarea name='message' cols={7} rows={7} placeholder='Your message' required/>
          <button className='btn btn-primary' type='submit'>Send messages</button>
        </form>
      </div>
    </section>
  )
}

export default Contact