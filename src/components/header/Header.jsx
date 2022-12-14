import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocials'
const header = () => {
  return (
    <header> 
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Jennifer Kpolu</h1>
        <h5 className='text-light'>Front Developer | Jr Devops Engineer</h5>
        <CTA />
        <HeaderSocial />
        <div className='me'>
        <img className= 'me-header' src={ME} />
        </div>
        <div> 
        <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
      </div>
    </header>
  )
  
}

export default header
