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
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <MdOutlineWorkHistory size={30} className='about__icon' />
              <h5>Experience</h5>
              <small>1 year working experience!</small>
            </article>

            <article className='about__card'>
              <FaProjectDiagram size={30} className='about__icon' />
              <h5>Projects</h5>
              <small>Personal and School Courses!</small>
            </article>
          </div>

          <p className='intro'>
          👋 Hello everyone, I'm Nam Nguyen 👋
          <br/>
          🎓 Passionate Computer Science junior at Michigan State University with a strong desire to learn more about Software Engineering and apply skills and knowledge to tackle real-world issues.
          <br/>          
          🧑‍💻 Tech I have used: JavaScript, Node.js, Express.js, NestJS, Python, C++, React, React Native, Chakra UI, MongoDB, SQLite, PostgreSQL.
          <br/>          
          🎈 Besides coding, I really enjoy sports, especially soccer ⚽ and ping pong 🏓, and the piano 🎹.
          <br/>          
          🔎 Currently seeking for Summer Internships in Software Engineering.
          <br/>
          🤝 Feel free to reach out for a coffee chat or just chit-chatting.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's talk!</a>
        </div>

        <div className='about__me'>
          <img src={me} alt='pic of me' className='about__me-img'/>
        </div>

      </div>
    </section>
  )
}

export default About