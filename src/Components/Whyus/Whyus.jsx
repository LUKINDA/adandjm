import React from 'react'
import VerifiedIcon from '@mui/icons-material/Verified';
import './Whyus.scss'

import worker2 from '../../assets/worker2.jpeg'

const Whyus = () => {
  return (
    <div className='container whyus_container'>
      <div className="right">
        <div className="col_left"></div>
        <div className="col_right">
            <div className="row1">
                <h1>pourquoi <br /> nous?</h1>
            </div>
            <div className="row2">
              <img src={worker2} alt="" />
            </div>
        </div>
      </div>
      <div className="left">
        <h1>nos valeurs <br /> fondamentales</h1>
        <div className="card card1"><h2> <VerifiedIcon/> L'integrité</h2></div>
        <div className="card card2"><h2><VerifiedIcon/> Le leadership</h2></div>
        <div className="card card3"><h2><VerifiedIcon/> La securité</h2></div>
        <div className="card card4"><h2><VerifiedIcon/> L'efficacité</h2></div>
      </div>
    </div>
  )
}

export default Whyus
