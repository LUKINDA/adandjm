import React from 'react'
import './About.scss'
import { Link } from 'react-router-dom';

import VerifiedIcon from '@mui/icons-material/Verified';
import { Verified } from '@mui/icons-material';

import about1 from '../../assets/about.jpeg'
import about2 from '../../assets/equipment.jpg'
import { VerifiedRounded } from '@mui/icons-material';

import mine from '../../assets/mine.jpeg'
import electric from '../../assets/electric.jpg'
import pumps from '../../assets/pumps.jpg'
import belt from '../../assets/belt.jpg'
import civil from '../../assets/civil.jpeg'
import construction from '../../assets/construction.jpg'

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
      <section className="award">
        <div className="card card1">
          <VerifiedRounded />
          <h3>Expertise technique</h3>
          <p>
          AD&JM SARL possède une équipe d'ingénieurs hautement qualifiés et compétents avec l'expertise technique nécessaire pour résoudre des problèmes d'ingénierie.
          </p>
        </div>
        <div className="card card2">
          <VerifiedRounded />
          <h3>Souci du détail</h3>
          <p>
          AD&JM SARL est axée sur les détails et capable de s'assurer que chaque aspect d'un projet est exécuté avec précision et exactitude.
          </p>
        </div>
        <div className="card card3">
          <VerifiedRounded />
          <h3>Communication efficace</h3>
          <p>
          AD&JM SARL utilise des canaux de communication clairs et concis pour tenir tous les intervenants informés de l'avancement du projet.
          </p>
        </div>
        <div className="card card4">
          <VerifiedRounded />
          <h3>Engagement envers la qualité</h3>
          <p>
          AD&JM SARL s'engage à fournir des résultats de haute qualité et à respecter ou dépasser les normes et réglementations de l'industrie.
          </p>
        </div>
      </section>

      <section className="services">
        <div className="title">
          <h2>Nos services</h2>
          <h3>ce que nous mettons a votre disposition</h3>
        </div>
        <div className="box">
          <div className="card card1">
            <div className="left">
              <img src={mine} alt="" />
            </div>
            <div className="right">
              <h3>PRODUITS MINIERS</h3>
              <hr />
              <ul>
                  <li>POMPES À LISIER, D’ASSÈCHEMENT ET AUTRES POMPES</li>
                  <li>CONCASSEURS ET EQUIPMENT</li>
                  <li>ÉLECTRODES DE GRAPHITE</li>
                </ul>
            </div>
          </div>
          <div className="card card2">
            <div className="left">
              <img src={electric} alt="" />
            </div>
            <div className="right">
              <h3>SIEMENS ELECTRICALS</h3>
              <hr />
              
            </div>
          </div>
          <div className="card card1">
            <div className="left">
              <img src={pumps} alt="" />
            </div>
            <div className="right">
              <h3>KSB PUMPS</h3>
              <hr />
              
            </div>
          </div>
          <div className="card card2">
            <div className="left">
              <img src={belt} alt="" />
            </div>
            <div className="right">
              <h3>FOURNITURES ET INSTALLATION</h3>
              <hr />
              <ul>
                  <li>BANDES TRANSPORTEUSES ET ACCESSOIRES</li>
                  <li>TUYAUTERIE ET ACCESSOIRES</li>
                  
                </ul>
            </div>
          </div>
          <div className="card card2">
            <div className="left">
              <img src={construction} alt="" />
            </div>
            <div className="right">
              <h3>FOURNITURES DE MATERIAUX DE CONSTRUCTION</h3>
              <hr />
              <ul>
                  <li>cement et chaux</li>
                  <li>Articles HDPE et Thermoplastique</li>
                  <li>Fibre de verre structurelle, techniquement con-
nue sous le nom de fibre armé de verre (GRP),
suivant les spécifications du client.</li>
                  <li>Poutres en I en fibre de verre</li>
                  <li>Fibre de verre</li>
                  <li>Couvertures en fibre de verre</li>
                  <li>Réservoirs</li>
                  
                </ul>
            </div>
          </div>
          <div className="card card2">
            <div className="left">
              <img src={civil} alt="" />
            </div>
            <div className="right">
              <h3>SERVICES DE GENIE CIVIL ET MONTAGE</h3>
              <hr />
              <ul>
                  <li>Ingénierie de conception Industrielle et Minière</li>
                  <li>Modélisation des informations du bâtiment (MIB)</li>
                  <li>Ingénierie de la valeur</li>
                </ul>
            </div>
          </div>
          
        </div>
      </section>

      <section className="trusted">
        <h3>votre partenaire de confiance pour les solutions de fabrication et d'ingénierie</h3>
        <h2>Notre équipe <span>professionnelle</span> comprend des ouvriers <span>hautement qualifiés</span> et des auditeurs <span>expérimentés</span> pour apporter une <span>expertise</span> et un soutien précieux à votre entreprise.</h2>
        <Link to={'/contact'}>
          <button>Contactez-nous</button>
        </Link>
      </section>
    </div>
  )
}

export default About
