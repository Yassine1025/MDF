


import React from 'react';
import '../css/Footer.css';
import gmail from '../../assets/Media/gmail.png';
import phone_call from '../../assets/Media/phone-call.png';
import location from '../../assets/Media/location.png';
import instagram from '../../assets/Media/instagram.png';
import whatsapp from '../../assets/Media/whatsapp.png';
import Acc from '../../assets/Accueil/mdf2.png'
import mdf from '../../assets/Accueil/mdf1.png'



const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>MDF <span>Fouad</span></h3>
        <div className="footer-links">
        <img src={mdf} alt="" style={{ width:'120px',marginRight:'5px' }} />
        <img src={Acc} alt="" style={{ width:'120px' }} />
          

        </div>
      </div>
      <div className="footer-center">
        <div className='FC'>
          <img style={{ width: '20px', marginRight: '5px' }} src={location} alt="location" />
          <p>Berkane , Oujda</p>
        </div>

        <div className='FC'>
            <img style={{ width: '20px', marginRight: '5px' }} src={phone_call} alt="phone_call" />
            <p>+212 633523008</p>
          
        </div>

        <div className='FC'>

          <a href="mailto:dev.elmediouni@gmail.com">
            <img style={{ width: '20px', marginRight: '5px' }} src={gmail} alt="Email" />dev.elmediouni@gmail.com
          </a>

        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          {/* <span>About the company</span> */}
          Bienvenue dans le monde des designs en matériau alternatif au bois et bardage.        
          </p>

        <div className="footer-icons">
          <a href="#"><img style={{ width: '20px', marginRight: '5px' }} src={instagram} alt="Instagram" /></a>
          <a href="#"><img style={{ width: '20px', marginRight: '5px' }} src={whatsapp} alt="whatsapp" /></a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
