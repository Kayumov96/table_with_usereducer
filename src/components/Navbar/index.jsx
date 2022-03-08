import React, {useContext, useState} from 'react'
import {  Navdiv, Navicon, Logo, Hamburger } from './style';
import logow from '../../assets/images/logow.png';
import telegram from '../../assets/icons/telegram.svg';
import instagram from '../../assets/icons/instagram.svg';
import Facebook from '../../assets/icons/Facebook.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import { NavbarCreateContext } from '../../context/navbar';

export const Navbar = ({value,id} ) => {
    const [ navlinks, setNav ] = useContext( NavbarCreateContext );
    const handleSelect = ( id ) => {
        let res = value.id === id && 'active' ? setNav : value;
        setNav( res );
   }

  return (
      <div>
          <Navdiv>
              <div>
                  <Logo src={ logow } alt='logo'  />
              </div>
            {
              navlinks.map( (value) => (
                  <div className='nav' key={ value.id }>
                      <Navicon src={ value.src } alt="icons" /> <h2 className='changecolor' onClick={handleSelect}>{ value.title}</h2>
                  </div>
              ))
              }
              <div className="icondiv">
                  <img className="iconlinks" src={ telegram } alt='telegramm' />
                  <img className="iconlinks" src={ Facebook } alt='Facebook' />
                  <img className="iconlinks" src={ instagram } alt='instagramm' />
                  <img className="iconlinks" src={ linkedin } alt='linkedin' />
              </div>
          </Navdiv>
      </div>
  )
}
export default Navbar;