import React from 'react'
import './Main.scss'

const Main = () => {
  return (
    <div id='hero'>
      <div className="main_container">
        <div className="content">
            <h1>LE TRAVAIL D’INGENIERIE EST CE QUE NOUS CONNAISSONS LE MIEUX</h1>
            <h3>AD & JM SARL fournit des technologies et des solutions innovantes aux
                projets d’ingénierie, de construction, industriels et miniers en mettant
                l’accent sur la sécurité, l’environnement, la qualité et la productivité.
            </h3>
            <button className="expore">voir plus</button>
        </div>
      </div>
      <div className="services">
        <div className="card">
            <div className="icon"></div>
            <div className="desc">
            <h2>mission</h2>
            <p>Notre mission est d’être l’une des sociétés
préférées dans la fourniture des biens et
des services de qualité, localement, tout
en collaborant avec les clients. AD & JM
fournit des produits et des solutions de la
plus haute qualité, rentables, innovants
et livrés dans des délais raisonnables.</p>
            </div>
        </div>
        <div className="card">
            <div className="icon"></div>
            <div className="desc">
            <h2>vision</h2>
            <p>La vision d’AD & JM est de s’engager à offrir les meilleurs produits et services, sur les
marchés qu’elle dessert. Notre objectif est
de devenir un leader dans l’introduction des
pratiques technologiques innovantes dans
l’industrie en offrant la meilleure solution de
valeur à nos clients. Nous avons une réputa-
tion d’innovation, de service client, de fiabil-
ité, de sécurité, de qualité et d’excellence.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Main
