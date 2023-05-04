import React from 'react'
import './Navbar.scss'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='container navbar_container'>
      <div className="top">
        <div className="left">
          <img src={logo} alt="" />
        </div>
        <div className="right">
          <button>Contactez-nous</button>
        </div>
      </div>
      <div className="bottom">
        <ul><a href="">Acceuil</a>
            <a href="">a propos</a>
            <a href="">services</a>
            <a href="">contactes</a>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
