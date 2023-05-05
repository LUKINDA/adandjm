import React, { useRef, useState } from 'react';
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
          <img src={logo} alt='' />
        </div>
        <div className='right'>
          <button>Contact us</button>
        </div>
        <div className='menu-icon toggle' onClick={showNavbar}>
          {showNavbar ? <MenuIcon />: <CloseIcon />}
        </div>
      </div>
      <div className='bottom manu' id='menu' ref={navRef}>
        <ul>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Services</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

