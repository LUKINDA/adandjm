import React from 'react'
import { useEffect, useState } from 'react'
//import { ThreeCircles } from 'react-loader-spinner'

import './Contact.scss'

import { useRef } from 'react'
import emailjs from '@emailjs/browser';
//import { ToastContainer, toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const form = useRef();

  const [isSent, setIsSent] = useState(false);
    const [buttonText, setButtonText] = useState('Envoyer');

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_50mg4ro', 'template_caz87j4', form.current, 'mmrRUOw1rRVK9vGID')
        .then((result) => {
                setIsSent(true);
                setButtonText('Envoyé');
                setTimeout(() => {
                    form.current.reset();
                    setIsSent(false);
                    setButtonText('Envoyer');
                }, 3000);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div>
        <div className='cont'>
        <div className="hero">
            <div className="container2 detais_container">
                <span className="side_span">contact us</span>
                <div className="title" id='title'>
                    <h3>Entrez en contact avec nous</h3>
                    <h1>contacter <span>AD & JM</span></h1>
                </div>
                
            </div>
            <div className="project_container container">
              <div className="title">
                  <h3>contact us</h3>
                  <h2>ecrivez-nous vos projects</h2>
              </div>

              <div className="project_details content">
                <div className="note">
                  <h3>Ecrivez-nous</h3>
                  <p>
                  Si vous cherchez une entreprise d'ingénierie fiable et compétente pour gérer tous vos besoins divers, ne cherchez plus car vous êtes au bon endroit.

                   <br /> <br /> L' équipe d'experts d' <span>AD & JM SARL</span> est là pour vous aider à répondre à vos besoins, qu'il s'agisse de quelques-uns ou de tous. De plus, si vous avez besoin de conseils ou d'orientation sur un aspect quelconque de votre entreprise, nous offrons des services de consultation d'entreprise pour vous aider à prendre des décisions éclairées.

                   <br /><br /> N'hésitez pas à nous contacter en remplissant le formulaire avec votre demande, et nous serons ravis de vous entendre et de vous offrir notre assistance.
                  </p>
                </div>
                <div className="form">
                  <h3>Parlez-nous DE votre projet</h3>
                    <form ref={form} onSubmit={sendEmail} >
                        <div className="flex">
                            <div className="input">
                                <i class='bx bxs-user'></i>
                                <input type="text" name="user_name" id="" placeholder='Nom complet' required />
                            </div>
                            <div className="input">
                                <i class='bx bxs-envelope'></i>
                                <input type="email" name="user_email" id="" placeholder='Email address' required />
                            </div>
                            <div className="input">
                                <i class='bx bxs-timer'></i>
                                <input type="text" name="user_timeline" id="" placeholder='Durée' required />
                            </div>
                            <div className="input">
                                <i class='bx bxs-dollar-circle'></i>
                                <input type="text" name="user_budget" id="" placeholder='budget' required />
                            </div>
                        </div>
                        
                        <div className="input textarea">
                            <i class='bx bxs-message-detail'></i>
                            <textarea name="message" id="" cols="30" rows="7" placeholder='Message' required ></textarea>
                        </div>
                        <div className="button" id='submit'>
                            <input type="submit" value={buttonText} style={isSent ? { backgroundColor: 'green' } : {}} />
                        </div>
                    </form>
                </div>
              </div>
            </div>
        </div>
        </div>  
    </div>
  )
}

export default Contact