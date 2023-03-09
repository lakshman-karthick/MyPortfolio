import { faAngular, faHtml5, faJava, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import { faC, faDatabase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{useState,useEffect} from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'k', 'i', 'l', 'l', 's']}
              idx={15}
            />
          </h1>
          <h3 className='topp'><b>Languages Known:</b></h3>
          <p>
            C, C++, Python
          </p>
          <h3>Web Technology:</h3>
          <p>
           HTML, CSS, JavaScript, React JS, Angular JS
          </p>
          <h3>Backend:</h3>
          <p>
          NodeJS, MySql, MongoDB
          </p>
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

export default Skills
