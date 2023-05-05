import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';
import logo from '../../assets/logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);

  // const toggleMenu = () => {
  //   setShowMenu(!showMenu);
  // };

  //

  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <div className='container navbar_container'>
      <div className='top'>
        <div className='left'>
          <Link to={'/'}>
          <img src={logo} alt='' />  
          </Link>
        </div>
        <div className='right'>
          <Link to={'/contact'}>
          <button>Contact us</button>
          </Link>
        </div>
        <div className='menu-icon toggle' onClick={showNavbar}>
          {showNavbar ? <MenuIcon />: <CloseIcon />}
        </div>
      </div>
      <div className='bottom manu' id='menu' ref={navRef}>
        <ul>
          <li>
            <a href='#hero'>Home</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#services'>Services</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

