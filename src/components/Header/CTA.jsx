import React from 'react'
import resume from '../../assets/Resume.docx'

/// Call-to-action Buttons: buttons that make immediate responses
const CTA = () => {
  return (
    <div className='cta'>
        <a href={resume} download className='btn'>Download Resume</a>
        <a href='#contact' className='btn btn-primary'>Contact me!</a>
    </div>
  )
}

export default CTA