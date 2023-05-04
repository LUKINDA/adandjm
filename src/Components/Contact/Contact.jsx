import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import './Contact.scss'

const Contact = () => {
  return (
    <div className='contact_container'>
       <div className="left">
            <h2>Nos coordonnées</h2>
            <div className="content">
                <h3>Notre Address</h3>
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
                <span>+243 859045162</span>
                <span>rowland.mond@adandjm.com</span>
            </div>
       </div>
       <div className="right">
        <form action="">
            <h2>Nous contacter</h2>
            <div className="top">
                <input type="text" name="user_name" id="" placeholder='Nom' />
                <input type="text" name="user_lastname" id="" placeholder='Post Nom'/>
            </div>
            <div className="middle">
                <input type="text" name="user_subject" id="" placeholder='Subject'/>
            </div>
            <div className="bottom">
                <textarea name="user_message" id="" cols="30" rows="7" placeholder='Message'></textarea>
            </div>
            <div className='button'>
                <input type="submit" value="Envoy" />
            </div>
        </form>
       </div>
    </div>
  )
}

export default Contact
