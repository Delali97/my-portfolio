import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiSalesforce} from 'react-icons/si'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/jennifer-kpolu/" traget="blank"><BsLinkedin/></a>
      <a href="https://github.com/Delali97" traget="blank"><FaGithub/></a>
      <a href="https://trailblazer.me/id/jkpolu" traget="blank"><SiSalesforce/></a>
      </div>
  )
}

export default HeaderSocial