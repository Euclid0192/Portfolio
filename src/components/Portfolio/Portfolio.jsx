import React from 'react'
import './Portfolio.css'
import img from '../../assets/project.avif'
import chatImg from '../../assets/chat-img.png'
import sudokuImg from '../../assets/halloween-sudoku.png'
import portfolioImg from '../../assets/portfolio-img.png'

const DATA = [
  {
    id: 1,
    image: sudokuImg,
    title: "Halloween-Spartan-themed Sudoku",
    github: "https://github.com/Euclid0192/Halloween-themed-Sudoku",
    demo: "https://drive.google.com/file/d/1Usk8-ST2rSh8kcY8weXB_n_k-1N1tuzm/view?usp=drive_link"
  },
  {
    id: 2,
    image: chatImg,
    title: "ReTiMe - A Real-time Messaging App",
    github: "https://github.com/Euclid0192/Spartahack-8-Project",
    demo: 'https://drive.google.com/file/d/12onKpfCDpIxvy038rHxENHKePmk5u9tv/view?usp=sharing'
  },
  {
    id: 3,
    image: portfolioImg,
    title: "My portfolio",
    github: "https://github.com/Euclid0192/Portfolio",
    demo: ''
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>My recent works</h2>

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
                  <a href={github} className='btn btn-primary' target='_blank' rel="noopener noreferrer">Github</a>
                  {/* <a href={demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer">Demo</a>             */}
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