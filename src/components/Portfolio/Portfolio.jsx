import React from 'react'
import './Portfolio.css'
import sudoku from '../../assets/HalloweenSudoku.zip'
import portfolioGif from '../../assets/Portfolio.gif'
import workflowGif from '../../assets/workflow.gif'
import chatGif from '../../assets/chat.gif'
import halloweenGif from '../../assets/pumpkin.gif'
import peaceGif from '../../assets/peace.gif'
import orderGif from '../../assets/order.gif'

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
    image: orderGif,
    title: "Order-On-the-Go!",
    github: "https://github.com/Euclid0192/golang-microservices",
    demo: ''
  },
  {
    id: 2,
    image: workflowGif,
    title: "CourseFlow - Build your 4-year plan",
    github: "https://github.com/Euclid0192/CourseFlowFE",
    demo: "https://courseflowfe.onrender.com/"
  },
  {
    id: 3,
    image: halloweenGif,
    title: "Halloween-Spartan-themed Sudoku",
    github: "https://github.com/Euclid0192/Halloween-themed-Sudoku",
    demo: sudoku
  },
  {
    id: 4,
    image: portfolioGif,
    title: "My portfolio",
    github: "https://github.com/Euclid0192/Portfolio",
    demo: 'http://bit.ly/portfolio-euclid'
  },
  {
    id: 5,
    image: chatGif,
    title: "ReTiMe - A Real-time Messaging App",
    github: "https://github.com/Euclid0192/ReTiMe",
    demo: 'https://drive.google.com/file/d/12onKpfCDpIxvy038rHxENHKePmk5u9tv/view?usp=sharing'
  }
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
                  {/* <a href={demo} className='btn' target='_blank' rel="noopener noreferrer" download={id == 1}>Demo</a>             */}
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