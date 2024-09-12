import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
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
            <a href="www.linkedin.com/in/akhil-shine-051233224" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
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