import React from 'react'
import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/LOGO.png'
// import LogoD from '../../assets/images/Screenshot 2022-10-22 171650.jpg'
import LogoD from '../../assets/images/Screenshot 2022-10-22 171650.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faBrain, faEnvelope, faHome, faL, faList, faS, faStickyNote, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Skills from '../../assets/images/skills.png'

const Sidebar = () =>(
    <div className='nav-bar'>
    <Link className='logo' to='/'>
         <img src={LogoD} alt='logo'/>
    </Link> 
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="education-link" to="/education">
        <FontAwesomeIcon icon={faBook} color="#4d4d4e"/>
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
        <FontAwesomeIcon icon={faList} color="#4d4d4e"/>
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="skills-link" to="/skills">
        <FontAwesomeIcon icon={faBrain} color="#4d4d4e"/>
        {/* <img className='image' src={Skills} color='#4d4d4e'/> */}
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
      </NavLink>

    </nav> 
    <ul>
      <li>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/lakshmankarthick">
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/> 
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="https://github.com/lakshman-karthick">
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/> 
        </a>
      </li>
    </ul>
    </div>
  )

export default Sidebar



