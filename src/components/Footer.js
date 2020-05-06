import React from 'react';
import '../styles/Footer.scss';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons'
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { GoMarkGithub } from 'react-icons/go'
import { FiMail } from 'react-icons/fi'

const Footer = () => {
  return (
    <IconContext.Provider value={{ color: 'rgba(255, 255, 255)', size: '1.2em' }}>
      <div className="footer">
        <div className="logo">
          <Link onClick={() => window.scrollTo(0, 0)} to="/list">drgnz.</Link>

        </div>
        <div className="links">
          <a href="http://ramonrooliveira.github.io" target="_blank" rel="noopener noreferrer">ramon raupp</a>
          <a 
            className='link' 
            href='mailto:ramonrooliveira@gmail.com'
            target="_blank" rel="noopener noreferrer"><FiMail /></a>
          <a 
            className='link' 
            href='http://github.com/ramonrooliveira'
            target="_blank" rel="noopener noreferrer"><GoMarkGithub /></a>
          <a 
            className='link' 
            href='http://linkedin.com/in/ramon-raupp'
            target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          <a 
            className='link' 
            href='http://instagram.com/rauppmon'
            target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Footer;
