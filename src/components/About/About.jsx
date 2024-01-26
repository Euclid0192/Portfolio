import React from 'react'
import './About.css'
import me from '../../assets/me-small.jpg'

import { MdOutlineWorkHistory } from "react-icons/md"
import { FaProjectDiagram } from "react-icons/fa"

const About = () => {
  return (
    <section id='about'>
      <h2>About me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <img src={me} alt='pic of me' className='about__me-img'/>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <MdOutlineWorkHistory size={30} className='about__icon' />
              <h5>Experience</h5>
              <small>0 year working experience!</small>
            </article>

            <article className='about__card'>
              <FaProjectDiagram size={30} className='about__icon' />
              <h5>Projects</h5>
              <small>Personal and School Courses!</small>
            </article>
          </div>

          <p>I am a rising junior at Michigan State University majoring in Computer Science and minoring in Actuarial Science. 
          I am really into and curious about Software Development and its potential impact it has on our real-world. 
          Currently, the technologies I am using include React Native, Redux, JavaScript and MongoDB. I am looking for an internship
          to broaden my knowledge of other technologies as well as gain some hands-on and real-life experience in this industry of 
          Software Development!

          Besides tech, I really enjoy playing the piano and doing a wide variety of sports from soccer to ping pong! Feel free to reach out!
          </p>

          <a href='#contact' className='btn btn-primary'>Let's talk!</a>
        </div>

      </div>
    </section>
  )
}

export default About