import React from 'react'
import './Portfolio.css'
import img from '../../assets/project.avif'

const DATA = [
  {
    id: 1,
    image: img,
    title: "Title",
    github: "https://github.com",
    demo: ''
  },
  {
    id: 2,
    image: img,
    title: "Title",
    github: "https://github.com",
    demo: ''
  },
  {
    id: 3,
    image: img,
    title: "Title",
    github: "https://github.com",
    demo: ''
  },
  {
    id: 4,
    image: img,
    title: "Title",
    github: "https://github.com",
    demo: ''
  },
  {
    id: 5,
    image: img,
    title: "Title",
    github: "https://github.com",
    demo: ''
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent works</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          DATA.map(({id, image, title, github, demo}) => {
            return (
              <article className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt='project' className='portfolio__item-image'/>
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank' rel="noopener noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer">Demo</a>            
                </div>
              </article>              
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio