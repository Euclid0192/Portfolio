import React from 'react'
import './Header.css'
import CTA from './CTA'
import me from '../../assets/me.jpg'
import TypingIntro from './TypingIntro'

import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <TypingIntro />
        <CTA />
        <HeaderSocial />

        <div className='me'>
          <img src={me} alt='myself :)' className='me__photo'/>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header