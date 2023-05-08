import React from 'react'
import './Services.scss'

import pumps from '../../assets/slurry-pump.jpg'
import crushing from '../../assets/crushing-plant.gif'
import concrete from '../../assets/concrete-batching.jpg'
import graphite from '../../assets/graphite.jpeg'

import belts from '../../assets/belt.jpg'
import piping from '../../assets/piping.jpeg'

import construction from '../../assets/construction.jpg'

const Services = () => {
  return (
    <div className='services_container' id='services'>
      <div className="top">
        <div className="intro">
            <h1>Explorez nos <span>services</span></h1>
            <p>AD & JM SARL est une entreprise bien établie qui fournit des services de haute qualité à des clients de différents secteurs. L'entreprise s'engage à répondre aux besoins de ses clients en fournissant des solutions sur mesure qui répondent à leurs exigences uniques.</p>
        </div>
        <a>explorez plus</a>
      </div>
      <div className="bottom">
        <div className="product">
            <h1>produits miniers</h1>
            <div className="box">
                <div className="card">
                    <div className="image">
                        <img src={pumps} alt="" />
                    </div>
                    <div className="title2"><h3>POMPES À LISIER, ET AUTRES POMPES</h3></div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src={crushing} alt="" />
                    </div>
                    <div className="title2"><h3>CONCASSEURS ET EQUIPMENT</h3></div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src={concrete} alt="" />
                    </div>
                    <div className="title2"><h3>CONCASSEURS ET EQUIPMENT</h3></div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src={graphite} alt="" />
                    </div>
                    <div className="title2"><h3>ÉLECTRODES DE GRAPHITE</h3></div>
                </div>
            </div>
        </div>

        <div className="product2">
            <div className="box">
                <h1>GESTION DES MATERIAUX EN VRAC</h1>
                <hr />
                <div className="card">
                    <div className="image">
                        <img src={belts} alt="" />
                    </div>
                    <div className="desc">
                        <h3>BANDES TRANSPORTEUSES ET ACCESSOIRES</h3>
                        <p>
                        AD & JM a accès à la fourniture de certains équipements de gestion des matériaux en vrac ainsi que leurs pièces de rechange.
                        </p>
                    </div>
                </div>
            </div>
            <div className="box">
                <h1>TUYAUTERIE ET ACCESSOIRES</h1>
                <hr />
                <div className="card">
                    <div className="image">
                        <img src={piping} alt="" />
                    </div>
                    <div className="desc">
                        <h3>FOURNITURE ET INSTALLATION</h3>
                        <p>
                        AD & JM est pleinement conscients qu’un équipement décent pour la gestion des matériaux en vrac réduira les coûts globaux dans la production, fabrication, et la distribution.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="product3">
            <div className="left">
                <img src={construction} alt="" />
            </div>
            <div className="right">
                <h2>MATERIAUX DE CONSTRUCTION</h2>
                <p>
                    Grâce à ses partenaires et fabricants dans la chaîne d’approvisionnement à valeur ajoutée, AD & JM a la capacité de fournir les matériaux de construction suivants
                </p>
                <ul className='first'>
                    <li>cement</li>
                    <li>chaux</li>
                </ul>
                <ul>
                    <li>Articles HDPE et Thermoplastique</li>
                    <li>ibre de verre structurelle, techniquement connue sous le nom de fibre armé de verre (GRP),
                        suivant les spécifications du client.</li>
                    <li>Poutres en I en fibre de verre</li>
                    <li>Fibre de verre</li>
                    <li>Couvertures en fibre de verre</li>
                    <li>Réservoirs</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Services
