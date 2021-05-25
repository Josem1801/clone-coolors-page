import './App.css';
import ProductBox from './components/ProductBox';

import {IoIosDesktop, IoLogoChrome, IoLogoInstagram} from 'react-icons/io'; 
import {AiFillApple} from 'react-icons/ai'; 
import {FaAdobe} from 'react-icons/fa'; 
import {IoLaptopOutline} from 'react-icons/io5'
import Airbnb from './assets/companies/airbnb.svg'
import Apple from './assets/companies/apple.svg'
import Disney from './assets/companies/disney.svg'
import DreamWorks from './assets/companies/dreamworks.svg'
import Dropbox from './assets/companies/dropbox.svg'
import EA from './assets/companies/ea.svg'
import Hasbro from './assets/companies/hasbro.svg'
import Microsoft from './assets/companies/microsoft.svg'
import Netflix from './assets/companies/netflix.svg'
import Ubisoft from './assets/companies/ubisoft.svg'
import WarnerBros from './assets/companies/warnerbros.svg'
import TemplateHeaderFooter from './components/TemplateHeaderFooter';
import Image from './assets/image.svg'
import Palettes from './assets/homepage_hero_palettes.png'
import { useEffect } from 'react';
import { useState } from 'react';
function App() {

  const [color1, setColor1] = useState(100)
  const [color2, setColor2] = useState(200)
  const [color3, setColor3] = useState(0)
    
  useEffect(() => {
    setTimeout(() => {
      const random1 = Math.random() * 255;
      const random2 = Math.random() * 255;
      const random3 = Math.random() * 255;
      setColor1(random1)
      setColor2(random2)
      setColor3(random3)
    }, 1000);
  }, [color1])

  return (
    <TemplateHeaderFooter>

      <div className="hero">
        <div className="hero__left">
          <h1 className='hero__left-title'>The super fast color schemes generator!</h1>
          <p className='hero__left-description'>Create the perfect palette or get inspired by thousands of beautiful colors schemes.</p>
          <a href="#" target="_blank" className='hero__left-btn blue'>
            Start the generator!
          </a>
          <a href="#" className="hero__left-btn  white">
            Explore trending palettes
          </a>
        </div>
        <div className="hero__right">
            <img src={Image} alt="" className='hero__right-computers'/>
          <div className="hero__right-boxPalettes">
            <img src={Palettes} alt="" className='hero__right-palettes'/>
          </div>
          <div className="hero__right-colors">
            <div style={{background: `rgb(${color1},${color2},${color3})`}}></div>
            <div style={{background: `rgb(${color2},${color3},${color1})`}}></div>
            <div style={{background: `rgb(${color3},${color1},${color2})`}}></div>
            <div style={{background: `rgb(${color1},${color3},${color2})`}}></div>
            <div style={{background: `rgb(${color2},${color1},${color3})`}}></div>
          </div>
        </div>
      </div>
        

      <div className="products">
        <ProductBox
          link='#'
          Logo={IoIosDesktop}
          title='Website'
          description='All the power of Coolors on your computer'
          bgColor='#DAFFCC'
          fontColor='#30B300'
          textHover='Use now for free'
        />
        <ProductBox
          link='#'
          Logo={AiFillApple}
          title='iOS App'
          description='Create, browser and save palettes on the go'
          bgColor='#CCF2FF'
          fontColor='#0086B3'
          textHover='View on the App Store'
        />
        <ProductBox
          link='#'
          Logo={FaAdobe}
          title='Adobe Extension'
          description='All palettes right into your workspace.'
          bgColor='#E4D2F9'
          fontColor='#6520BA'
          textHover='Learn more'
        />
        <ProductBox
          link='#'
          Logo={IoLogoChrome}
          title='Chrome Extension'
          description='Get and edit a paletter every new tab.'
          bgColor='#FCCFE9'
          fontColor='#C20A75'
          textHover='Add to Chrome'
        />
        <ProductBox
          link='#'
          Logo={IoLogoInstagram}
          title='Instagram'
          description='Get your daily inspiration of beautiful paletter.'
          bgColor='#FBF5D0'
          fontColor='#D5B810'
          textHover='Follow us'
        />
      </div>

      <div className="companies">
        <p className="companies__title">Used by awesome companies</p>
        <ul className="companies__logos">
          <li><a href="#"><img src={Airbnb} alt="" /></a></li>
          <li><a href="#"><img src={Apple} alt="" /></a></li>
          <li><a href="#"><img src={Disney} alt="" /></a></li>
          <li><a href="#"><img src={DreamWorks} alt="" /></a></li>
          <li><a href="#"><img src={Dropbox} alt="" /></a></li>
          <li><a href="#"><img src={EA} alt="" /></a></li>
          <li><a href="#"><img src={Hasbro} alt="" /></a></li>
          <li><a href="#"><img src={Microsoft} alt="" /></a></li>
          <li><a href="#"><img src={Netflix} alt="" /></a></li>
          <li><a href="#"><img src={Ubisoft} alt="" /></a></li>
          <li><a href="#"><img src={WarnerBros} alt="" /></a></li>
        </ul>
      </div>

      <div className="information">
        <div className="information__column">
            <p className="information__colum-title">Website</p>
            <a href="#">Generete your palettes</a>
            <a href="#">Explorer popular paletes</a>
            <a href="#">Color picker</a>
            <a href="#">Pick paletter from photo</a>
            <a href="#">Create a collage</a>
            <a href="#">Create a gradient palette</a>
            <a href="#">Create a gradient</a>
            <a href="#">Explore gradients</a>
            <a href="#">Contrast checker</a>
        </div>
        <div className="information__column">
          <p className="information__colum-title">Products</p>
          <a href="#">iOS app</a>
          <a href="#">Adobe addon</a>
          <a href="#">Chrome extension</a>
        </div>
        <div className="information__column">
          <p className="information__colum-title">Company</p>
          <a href="#">Terms of service</a>
          <a href="#">Privacy policy</a>
          <a href="#">Cookie policy</a>
          <a href="#">Help center</a>
          <a href="#">Advertise</a>
          <a href="#">Contact</a>
        </div>
        <div className="information__column">
          <p className="information__colum-title">Account</p>
          <a href="#">Sign in</a>
          <a href="#">Sign up</a>
          <a href="#">Reset password</a>
        </div>
      </div>
    </TemplateHeaderFooter>
  );
}

export default App;
