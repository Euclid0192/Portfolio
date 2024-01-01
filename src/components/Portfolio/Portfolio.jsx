import React from 'react'
import './Portfolio.css'
import sudoku from '../../assets/sudoku.png'
import chat from '../../assets/chat.png'
import web from '../../assets/web.png'
import demoSudoku from '../../assets/HalloweenSudoku.zip'

const DATA = [
  {
    id: 1,
    image: sudoku,
    title: "Halloween-Spartan-themed Sudoku",
    github: "https://github.com/Euclid0192/Halloween-themed-Sudoku",
    demo: demoSudoku,
  },
  {
    id: 2,
    image: chat,
    title: "ReTiMe - A Real-time Messaging App",
    github: "https://github.https://github.com/Euclid0192/Spartahack-8-Project",
    demo: 'https://drive.google.com/file/d/12onKpfCDpIxvy038rHxENHKePmk5u9tv/view?usp=sharing'
  },
  {
    id: 3,
    image: web,
    title: "My Portfolio",
    github: "https://github.com/Euclid0192/Portfolio",
    demo: 'https://my-portfolio-8bhz.onrender.com'
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
                  {
                    id === 1 ? 
                    <a href={demo} download className='btn btn-primary' target='_blank' rel="noopener noreferrer">Demo</a> :
                    <a href={demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer">Demo</a>      
                  }
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