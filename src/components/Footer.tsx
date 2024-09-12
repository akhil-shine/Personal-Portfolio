import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/akhil-shine" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="www.linkedin.com/in/akhil-shine-051233224" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>Personal Portfolio <a href="" target="_blank" rel="noreferrer">by AKhil Shine</a></p>
    </footer>
  );
}

export default Footer;