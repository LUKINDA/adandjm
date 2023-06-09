import React from 'react'
import './Footer.scss'
import logo from '../../assets/logo.png'

import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';

const Footer = () => {
  return (
    <div>
      <footer class="footer-section">
        <div class="container">
            <div class="footer-cta pt-5 pb-5">
                
                <div class="row">
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="cta-text">
                                <h4> <LocationOnIcon/> Trouvez-nous</h4>
                                <span>17, AV: Nyota, Q/Golf Lubumbashi - RDC</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fas fa-phone"></i>
                            <div class="cta-text">
                                <h4><LocalPhoneIcon /> Appelez-nous</h4>
                                <span>+243 977 008 644 / +243 859 045 162</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="far fa-envelope-open"></i>
                            <div class="cta-text">
                                <h4><EmailIcon />Envoyez-nous un mail</h4>
                                <span><a href="mailto:info@adandjm.com">info@adandjm.com</a></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-logo">
                    <a href="#home"><img src={logo} class="img-fluid" alt="logo"/></a>
                </div>
                <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Liens Utile</h3>
                            </div>
                            <ul>
                                <li><a href="#hero">Acceuil</a></li>
                                <li><a href="#about">a propos</a></li>
                                <li><a href="#services">services</a></li>
                                <li><a href='#contact'>contacte</a></li>
                                {/* <li><a href="#">portfolio</a></li> */}
                                {/* <li><a href="#">Contact</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Our Services</a></li>
                                <li><a href="#">Expert Team</a></li>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">Latest News</a></li> */}
                            </ul>
                        </div>
            </div>
            <div class="footer-content pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 mb-50">
                        <div class="footer-widget">
                            
                            <div class="footer-text">
                                <p>AD & JM fournit des services à de nombreux secteurs de l’industrie avec des produits, des équipements et des consommables de haute qualité et rentables pour tous les types de projets.</p>
                            </div>
                            {/* <div class="footer-social-icon">
                                <span>Follow us</span>
                                <a href="#"><i class="fab fa-facebook-f facebook-bg"></i></a>
                                <a href="#"><i class="fab fa-twitter twitter-bg"></i></a>
                                <a href="#"><i class="fab fa-google-plus-g google-bg"></i></a>
                            </div> */}
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                        
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="copyright-area">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div class="copyright-text">
                            <p>Copyright &copy; {new Date().getFullYear()}, Tous droits réservés <a href="#">AD & JM</a></p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div class="footer-menu">
                            <ul>
                                <li><a href="#hero">Acceuil</a></li>
                                <li><a href="#">Termes</a></li>
                                <li><a href="#">Confidentialité</a></li>
                                <li><a href="#">Polique</a></li>
                                <li><a href="#contact">Contacte</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer
