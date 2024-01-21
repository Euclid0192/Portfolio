import React from 'react'
import './Footer.css'

import { FaFacebookSquare } from "react-icons/fa"
import { FaInstagramSquare } from "react-icons/fa"
import { FaSquareThreads } from "react-icons/fa6"

const Footer = () => {
  return (
    <footer>
      <a href='/#' className='footer__logo'>Nam Nguyen</a>

      <ul className='permalinks'>
        <li><a href='/#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.facebook.com/nhn0192' target='_blank' rel='noopener noreferrer'><FaFacebookSquare /></a>
        <a href='https://www.instagram.com/nhn0192' target='_blank' rel='noopener noreferrer'><FaInstagramSquare  /></a>
        <a href='https://www.threads.net/@nhn0192' target='_blank' rel='noopener noreferrer'><FaSquareThreads /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Nam Nguyen's Portfolio. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer