import React from 'react'
import './Portfolio.css'
import chatImg from '../../assets/chat-img.png'
import sudokuImg from '../../assets/halloween-sudoku.png'
import flowImg from '../../assets/flow.png'
import sudoku from '../../assets/HalloweenSudoku.zip'
import portfolioGif from '../../assets/Portfolio.gif'
import workflowGif from '../../assets/workflow.gif'
import chatGif from '../../assets/chat.gif'
import halloweenGif from '../../assets/pumpkin.gif'
import peaceGif from '../../assets/peace.gif'

const DATA = [
  {
    id: 0,
    image: peaceGif,
    title: "PeacePod",
    github: "https://github.com/jennydo/PeacePod-Frontend",
    demo: "https://drive.google.com/file/d/1zzN4ZgptR-zTjlZto4gkZsuJ6JQQbjo9/view?usp=sharing"
  },
  {
    id: 1,
    image: workflowGif,
    title: "CourseFlow - Build your 4-year plan",
    github: "https://github.com/Euclid0192/CourseFlowFE",
    demo: "https://courseflowfe.onrender.com/"
  },
  {
    id: 2,
    image: halloweenGif,
    title: "Halloween-Spartan-themed Sudoku",
    github: "https://github.com/Euclid0192/Halloween-themed-Sudoku",
    // demo: "https://drive.google.com/file/d/1Usk8-ST2rSh8kcY8weXB_n_k-1N1tuzm/view?usp=drive_link"
    demo: sudoku
  },
  {
    id: 3,
    image: portfolioGif,
    title: "My portfolio",
    github: "https://github.com/Euclid0192/Portfolio",
    demo: 'http://bit.ly/portfolio-euclid'
  },
  {
    id: 4,
    image: chatGif,
    title: "ReTiMe - A Real-time Messaging App",
    github: "https://github.com/Euclid0192/ReTiMe",
    demo: 'https://drive.google.com/file/d/12onKpfCDpIxvy038rHxENHKePmk5u9tv/view?usp=sharing'
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
                  <a href={demo} className='btn' target='_blank' rel="noopener noreferrer" download={id == 1}>Demo</a>            
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