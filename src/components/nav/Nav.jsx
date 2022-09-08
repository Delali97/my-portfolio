import React from 'react'
import './nav.css'
import {HiOutlineHome} from 'react-icons/hi'
import {AiOutlineUser} from 'react-icons/ai'
import {FiBookOpen} from 'react-icons/fi'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlinePhone} from 'react-icons/ai'
import {useState} from 'react'

const nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav> 
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><HiOutlineHome/></a>
      <a href="#about" alt='About Me' onClick={() => setActiveNav('#about')} className={activeNav ==='#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav ==='#experience' ? 'active' : ''}><FiBookOpen/></a>
      {/* <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav ==='#services' ? 'active' : ''}><RiServiceLine/></a> */}
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav ==='#contact' ? 'active' : ''}><AiOutlinePhone/></a>
    </nav>
  )
}


export default nav