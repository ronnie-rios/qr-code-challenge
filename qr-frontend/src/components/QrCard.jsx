import React from 'react'
import Favicon from '../assets/images/favicon-32x32.png';
import Qrcode from '../assets/images/image-qr-code.png';
import '../App.css';

const QrCard = () => {
  return (
    <div className='qr-container'>
        {/* <img src={Favicon} alt="" /> */}
        <div>
          <img src={Qrcode} alt="" className='qr-img'/>
        </div>
        <div className='text-container'>
          <p id='text-main'>Improve your front-end skills by building projects.</p>
          <p id='text-subheading'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level.</p>
        </div>
    </div>
  )
}

export default QrCard