import React from 'react'
import Qrcode from '../assets/images/image-qr-code.png';
import '../App.css';

const QrCard = () => {
  return (
    <div className='card'>
        {/* <img src={Favicon} alt="" /> */}
        <div className='qr-container'>
          <img src={Qrcode} alt="" className='qr-img'/>
        </div>
        <div className='text-container'>
          <h2 id='text-main'>Improve your front-end skills by building projects</h2>
          <p id='text-subheading'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level.</p>
        </div>
    </div>
  )
}

export default QrCard