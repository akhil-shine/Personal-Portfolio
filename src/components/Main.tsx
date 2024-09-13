import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email'; // Gmail Icon
import PhoneIcon from '@mui/icons-material/Phone'; // Call Icon
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://avatars.githubusercontent.com/u/117872209?v=4" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
          <a href="https://github.com/akhil-shine" target="_blank" rel="noreferrer"><GitHubIcon/></a>
          <a href="https://www.linkedin.com/in/akhil-shine-051233224" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          <a href="mailto:akhilshine02@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
          <a href="https://wa.me/917994247484" target="_blank" rel="noreferrer"><WhatsAppIcon/></a>
          <a href="tel:+917994247484" target="_blank" rel="noreferrer"><PhoneIcon/></a>



          </div>
          <h1>AKHIL SHINE</h1>
          <p>Full Stack Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/akhil-shine" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="www.linkedin.com/in/akhil-shine-051233224" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;