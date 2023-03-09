import { faAngular, faHtml5, faJava, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import { faC, faDatabase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{useState,useEffect} from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's','']}
              idx={15}
            />
          </h1>
          
          <h3>Jabber:</h3>
          <p>
          Any user can use their email id to chat and discuss about the current affairs. 
          React JS is used for frontend and Firebase is used as Database as well as for Authentication.
          </p>
          <a className="flat-button" href="https://github.com/lakshman-karthick/Jabber-Public-Chatting-Forum-">Source Code</a><br/><br/><br/><br/><br/>
          <h3 className='gap'><b>Cricography:</b></h3>
          <p>
          Cricket Player's Statistics is stored in Database and 
          find the best performers in different disciplines using 
          Statistics in the Database.(Hash Table, Heap)
          </p>
          <a className="flat-button" href="https://github.com/lakshman-karthick/Players-Statistics">Source Code</a><br/><br/><br/><br/><br/>
          <h3>Music Bee:</h3>
          <p>
          This project (mp3 player) allows user to hear music from the computer and it also provide facilities 
          to pause, play, increase and decrease volume , play previous or next song in playlist etc..
          </p>
          <a className="flat-button" href="https://github.com/lakshman-karthick/Music-Bee">Source Code</a><br/><br/><br/><br/><br/>
          
        </div>
        
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJava} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faPython} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faAngular} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faDatabase} color="#EC4D28" />
            </div>
          </div>
        </div>
        </div>
        <Loader type="pacman" />
    
        </>
        )
}

export default Projects
