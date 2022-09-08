import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/robotics3.jpg'
import IMG2 from '../../assets/Hfxextensions3.jpg'
import IMG3 from '../../assets/port.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Bluetooth-Controlled Robotics Project Using Arduino',
    blurb: 'Using the Arduino Language, I taught high school kids the basics of programming and concluded the after-school program with a capstone project where they developed a Bluetooth controlled robot car using Arduino programming language.',
    github: 'https://github.com/Delali97',
    demo: 'https://create.arduino.cc/projecthub/mindhe_aniket/bluetooth-controlled-car-e696f3'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Built HfxExtension E-commerce Website',
    blurb: 'I worked with a fellow developer to create a Wordpress website with a WooCommerce storefront. HfxExtensions is small buisness located in Halifax, Nova Scotia that takes pride in selling quality hair extensions and hair care products. Established 2017.' ,
    github: 'https://github.com',
    demo: 'https://www.hfxextensions.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Creating a Portfolio Website using React',
    blurb: 'While working as a Quality Assurance Analyst for 2+ years I began my journey as a fullstack developer, after using CMS sites like Wordpress. Creating my portfolio was my first react project in addition to using HTML, CSS and Javascript to design.' ,
    // github: 'https://github.com',
    demo: 'https://jenniferkpolu.com'
  },
  
]


const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map (({id, image, title, blurb, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <h5>{blurb}</h5>
              <div className="portfolio__item-cta">
                {/* <a href={github} className='btn' target='_blank' rel="noopener noreferrer">Github</a> */}
                <a href={demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default portfolio