import React from 'react'
import './About.scss'

const About = () => {
  return (
    <div>
      <div className="container detais_container">
        <div className="title" id='title'>
          <h3>Nous offront le plus complet des solutions</h3>
            <h1> <span>AD & JM SARL</span></h1>
        </div>
                
      </div>
      <section className="content_main">
        <div className="left">
          <h3>AD & JM SARL Offre des services professionel</h3>
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
            <li>Une combinaison unique d'ingénierie</li>
            <li>Favorisant une culture de collaboration, d'excellence et d'innovation</li>
            <li>Garantissant les normes les plus élevées de qualité et de sécurité.</li>
            <li>Livrant les projets dans les délais impartis </li>
          </ul>
        </div>
        <div className="right">
          <div className="col1"></div>
          <div className="col2"></div>
        </div>
      </section>
    </div>
  )
}

export default About
