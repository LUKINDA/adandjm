import React from 'react'
import { Link } from 'react-router-dom'
import './About.scss'

import worker from '../../assets/worker.jpeg'

const About = () => {
  return (
    <div className='container about_container' id='about'>
      <div className="left">
        <h1>A propos de <br /> AD & JM SARL</h1>
        <p>L’entreprise a vu le jour afin de répondre aux
            demandes dans les secteurs de l’ingénierie,
            de la construction, de l’industrie et des mines.
            En conséquence, les membres fondateurs ont
            créé cette organisation pour répondre aux
            problèmes de changement dans nos industries.
        </p>
        <Link to={'/about'}>
          <button className="more">decouvrire plus</button>
        </Link>
      </div>
      <div className="right">
        <div className="col_left"></div>
        <div className="col_right">
            <div className="row1">
                <h1>a propos de nous</h1>
            </div>
            <div className="row2">
              <img src={worker} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
