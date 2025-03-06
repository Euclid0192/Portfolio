import React from 'react'
import './About.css'
import me2 from '../../assets/me2.jpeg'

import { MdOutlineWorkHistory } from "react-icons/md"
import { FaProjectDiagram } from "react-icons/fa"

const About = () => {
  return (
    <section id='about'>
      <h2>About me</h2>

      <div className='container about__container'>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <MdOutlineWorkHistory size={30} className='about__icon' />
              <h5>Experiences</h5>
              <small>1 year working experience</small>
            </article>

            <article className='about__card'>
              <FaProjectDiagram size={30} className='about__icon' />
              <h5>Projects</h5>
              <small>Personal and School Courses</small>
            </article>
          </div>

          <p className='intro'>
          ✨Hello everyone, I'm Nam Nguyen. ✨
          <br/>
          🎓Passionate Computer Science junior from Michigan State University with a strong desire to dive deeper into Software Engineering and apply my skills to tackle real-world problems.
          <br/>          
          💻Tech I've used: JavaScript, Node.js, Express.js, NestJS, Golang, Python, C++, React, React Native, Chakra UI, MongoDB, PostgreSQL.
          <br/>          
          ⭐Besides coding, I love playing sports, especially soccer ⚽ and ping pong 🏓, and the piano 🎹.
          <br/>          
          🔍Currently seeking for Summer Internships in Software Engineering.
          <br/>
          💫Feel free to reach out for a coffee chat, or just chit-chatting! 😁
          </p>

          <a href='#contact' className='btn btn-primary'>Let's talk</a>
        </div>

        <div className='about__me'>
          <img src={me2} alt='pic of me' className='about__me-img'/>
        </div>

      </div>
    </section>
  )
}

export default About