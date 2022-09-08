import React from 'react'
import './contact.css'
import {MdOutlineMarkEmailUnread} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import {IoIosArrowUp} from 'react-icons/io'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

  emailjs.sendForm('service_g3kfkbn', 'template_wap7qdp', form.current, 'ftE8HkhQcCNe8Kds5')
 
  e.target.reset()
}

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div> 
          <a href="#top" className='scroll__up'>Scroll Up <p></p>
          </a>
          <IoIosArrowUp className='contact__option-icon-arrow' />
        </div>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMarkEmailUnread className='contact__option-icon'/>
            <h4>Email</h4>
            <a href="mailto:jennifer.kpolu@yahoo.com" target="_blank" rel="noopener noreferrer">
            <img src="https://fontmeme.com/permalink/220906/825134149768a937d6ccd3f465d3319d.png" alt="cursive-fonts" border="0"/>Send a Message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Jennifer Kpolu</h5>
            <a href="https://m.me/jennifer.kpolu" target="_blank" rel="noopener noreferrer">Send a Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+123456789</h5>
            <a href="https://wa.me/19025802164" target="_blank" rel="noopener noreferrer">Send a Message</a>
          </article>
          
          </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Email' required />
          <textarea name="message" placeholder='Your Message' rows="7"></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact