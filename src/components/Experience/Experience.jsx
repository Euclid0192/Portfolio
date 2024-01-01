import React from 'react'
import './Experience.css'
import { GiAchievement } from "react-icons/gi"

const Experience = () => {
  return (
    <section id='experience'>
      <h2>What skills I have</h2>
      {/* Container with two blocks: Frontend and Backend ssName='container experience__container'>*/}
      <div className='container experience__container'>
        {/* Frontend */}
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <GiAchievement className='experience__details-icon' size={20} />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermediate</small> 
              </div>
            </article>

            <article className='experience__details'>
              <GiAchievement className='experience__details-icon' size={20} />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <GiAchievement className='experience__details-icon' size={20} />
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <GiAchievement className='experience__details-icon' size={20} />
              <div>
                <h4>Reactjs</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <GiAchievement className='experience__details-icon' size={20} />
              <div>
                <h4>React Native</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>
        {/* Backend */}
        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <GiAchievement className='experience__details-icon' size={20} />
              <div>
                <h4>Nodejs</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <GiAchievement className='experience__details-icon' size={20} />
              <div>
                <h4>Express</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <GiAchievement className='experience__details-icon' size={20} />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small>                
              </div>
            </article>

            <article className='experience__details'>
              <GiAchievement className='experience__details-icon' size={20} />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>                
              </div>
            </article>

            <article className='experience__details'>
              <GiAchievement className='experience__details-icon' size={20} />
              <div>
                <h4>C++</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience