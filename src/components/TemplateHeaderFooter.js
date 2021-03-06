import React from 'react'
import Logo from '../assets/logo.svg'
import coolorsiOS from '../assets/coolors_ios.png'
import './templateHeaderFooter.css'
import {IoIosArrowDown,
        IoLogoTwitter, 
        IoLogoFacebook, 
        IoLogoPinterest, 
        IoLogoInstagram, 
} from 'react-icons/io'
import {IoMenu} from 'react-icons/io5'
import {FaProductHunt} from 'react-icons/fa'
import { useState } from 'react'


function TemplateHeaderFooter({children}) {
  const [menuActive, setMenuActive] = useState(false)
  return (  
    <>
      <header className="header">
        
        {/*Hamburger*/}
        <div className="header__menu-hamburger">
          <IoMenu className='hamburber'/>
        </div>
        
        <a className="header__logo" href='/'>
          <img src={Logo} alt="coolors" className='header__logo-img'/>
        </a>
        <a href="https://apps.apple.com/app/coolors/id956480678" className="header__ad">
          <img src={coolorsiOS} alt="Coolors for iOS" className='header__ad-img' />
          <div className="header__ad-text">
            <span className='ios'>Coolors for iOS</span>&nbsp; 
            The esential pp for any designer. Generete and collect beautiful color  palettes on the go. &nbsp;
            <span className='download'>Download Now</span>
          </div>
        </a>
        
        <nav className='header__nav'>
          <ul>
            <li><a href="#" className='header__nav-generate'>Generate</a></li>
            <li><a href="#" className='header__nav-explore'>Explore</a></li>
            <li><a href="#" className='header__nav-more'>More<IoIosArrowDown className='more'/></a></li>
            <hr size='30'/>
            <li><a href="#" className='header__nav-signin'>Sign in </a></li>
            <li><a href="#" className='header__nav-signup'>Sign up</a></li>
          </ul>
        </nav>
      </header>
      
      {/*---------Children----------*/}

      {children}

      {/*-------------------*/}

      <footer className='footer'>
        <a className="footer__logo" href='/'>
          <img src={Logo} alt="coolors" className='footer__logo-img'/>
        </a>
        <p>&copy; Coolors by <a href="#">Fabrizio Bianchi</a>. From a creative to all the others.</p>
        <ul className='footer__social'>
          <li><a href="#"><IoLogoTwitter/></a></li>
          <li><a href="#"><IoLogoFacebook/></a></li>
          <li><a href="#"><IoLogoPinterest/></a></li>
          <li><a href="#"><IoLogoInstagram/></a></li>
          <li><a href="#"><FaProductHunt/></a></li>
        </ul>
      </footer>
    </>
  )
}

export default TemplateHeaderFooter
