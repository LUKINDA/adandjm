import React from 'react'
import './About.scss'

import VerifiedIcon from '@mui/icons-material/Verified';

import about1 from '../../assets/about.jpeg'
import about2 from '../../assets/equipment.jpg'

const About = () => {
  return (
    <div>
      <div className="container2 detais_container">
        <div className="title" id='title'>
          <h3>Nous offront le plus complet des solutions</h3>
            <h1> <span>AD & JM SARL</span></h1>
        </div>
                
      </div>
      <section className="content_main">
        <div className="left">
          <h2>AD & JM SARL Offre des services professionel</h2>
          <hr />
          <p>
            AD & JM SARL fournit des technolo-
            gies et des solutions innovantes aux
            projets d’ingénierie, de construc-
            tion, industriels et miniers en mettant
            l’accent sur la sécurité, l’environne-
            ment, la qualité et la productivité.

            <br /><br />
            L’entreprise a vu le jour afin de répondre aux demandes dans les secteurs de l’ingénierie, de la construction, de l’industrie et des mines. En conséquence, les membres fondateurs ont créé cette organisation pour répondre aux problèmes de changement dans nos industries.
          </p>
          <h3>Solutions innovantes d'ingénierie et de construction</h3>
          <ul>
            <li><VerifiedIcon /> Une combinaison unique d'ingénierie</li>
            <li><VerifiedIcon /> Favorisant une culture de collaboration, d'excellence et d'innovation</li>
            <li><VerifiedIcon /> Garantissant les normes les plus élevées de qualité et de sécurité.</li>
            <li><VerifiedIcon /> Livrant les projets dans les délais impartis </li>
          </ul>
        </div>
        <div className="right">
          <div className="col1">
            <img src={about1} alt="" />
          </div>
          <div className="col2">
            <img src={about2} alt="" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
