import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const labelsFirst = [
    "React",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Django",
    "Flask",
    "Node JS",
    "Python",
    "SQL",
    "PostgreSQL",
    "Postman",
    "MongoDB"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure",
    "Linux",
    "Pandas",
    "Selenium",
];

const labelsThird = [
    "MongoDB",
    "Express.js",
    "React",
    "Node.js",
    "JavaScript",
    "JWT",
    "Redux",
    "Next.js",
    "Mongoose",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I have developed a range of web applications from the ground up using modern technologies like React and Flask. My expertise spans the SDLC process, encompassing both frontend and backend development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>After building the application, I assist clients in setting up DevOps testing, CI/CD pipelines, and deployment automation to ensure a smooth Go-Live process.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <h3>MERN Stack Development</h3>
                    <p>As a MERN stack developer, I've created scalable web applications with MongoDB, Express.js, React, and Node.js, focusing on backend services, API development, and modern frontend integration.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;