import React from 'react'
import './about.css'
import ME from '../../assets/me-about2.png'
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5> Get To Know Me</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img className='img-about' src={ME} alt="About Image"></img>
          </div>
        </div>
        
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
            <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
            <FaUsers className='about__icon'/>  
              <h5>Clients</h5>
              <small>5 Worldwide</small>
            </article>

            <article className="about__card">
            <VscFolderLibrary className='about__icon'/>  
              <h5>Projects</h5>
              <small>3+ Completed Projects</small>
            </article>
          </div>
          
          <p>
            Hi! 
            Thank you so much for stopping by. My name is Jennifer (Jen), I have a Bsc in Computer Science and Business Administration with a Masters in Business Intelligence. I am always open to learn and work on any web developement projects!
          </p>
          
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
    </section>
  )
}

export default about