import React, { useRef } from 'react'
//import { useState } from 'react';
import { useState } from 'react'; 
import SendIcon from '@mui/icons-material/Send';
import './Contact.scss'

import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const [isSent, setIsSent] = useState(false);
    const [aText, setaText] = useState('Envoyer');

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_50mg4ro', 'template_caz87j4', form.current, 'mmrRUOw1rRVK9vGID')
        .then((result) => {
                setIsSent(true);
                setaText('Envoyé');
                setTimeout(() => {
                    form.current.reset();
                    setIsSent(false);
                    setaText('Envoyer');
                }, 3000);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div className='contact_container' id='contact'>
       <div className="left">
            <h2>Nos coordonnées</h2>
            <div className="content">
                <h3>Notre addresse</h3>
                <span>17, AV: Nyota, Q/Golf Lubumbashi - RDC</span>
            </div>
            <div className="content">
                <h3>Contact rapide</h3>
                <span>info@adandjm.com</span>
            </div>
            <div className="content">
                <h3>MR MASUDI Alain</h3>
                <span>+243 977 008 644</span>
                <span>alain.masudi@adandjm.com</span>
            </div>
            <div className="content">
                <h3>MR MOND Rowland</h3>
                <span>+243 859 045 162</span>
                <span>rowland.mond@adandjm.com</span>
            </div>
       </div>
       <div className="right">
        <form ref={form} onSubmit={sendEmail}>
            <h2>Nous contacter</h2>
            <div className="top">
                <input type="text" name="user_name" id="" placeholder='Nom' />
                <input type="text" name="user_email" id="" placeholder='addressee Email'/>
            </div>
            <div className="middle">
                <input type="text" name="user_subject" id="" placeholder='Sujet'/>
            </div>
            <div className="bottom">
                <textarea name="message" id="" cols="30" rows="7" placeholder='Message'></textarea>
            </div>
            <div className='a'>
                <input type="submit" value={aText} style={isSent ? { backgroundColor: 'green' } : {}} />               
            </div>
        </form>
       </div>
    </div>
  )
}

export default Contact
