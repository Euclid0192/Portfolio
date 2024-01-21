import React from 'react'
import { BsLinkedin } from "react-icons/bs"
import { FaGithub } from 'react-icons/fa'
import { SiLeetcode } from "react-icons/si"

/// Part of header containing links to social media
const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        {/* target="_blank": open link in new tab */}
        <a href='https://www.linkedin.com/in/nam-nguyen-95452a252/' target='_blank' rel='noopener noreferrer'>
            <BsLinkedin size={30}/>
        </a>
        <a href='https://github.com/Euclid0192' target='_blank' rel='noopener noreferrer'>
            <FaGithub size={30}/>
        </a>
        <a href='https://leetcode.com/Euclid1234/' target='_blank' rel='noopener noreferrer'>
            <SiLeetcode size={30}/>
        </a>
    </div>
  )
}

export default HeaderSocial