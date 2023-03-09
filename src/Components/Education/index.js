import { faGraduationCap, faSchool, faSchoolCircleCheck, faSchoolCircleExclamation, faSchoolFlag, faSchoolLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{useState,useEffect} from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
const Education = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container education-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['E', 'd', 'u', 'c', 'a', 't', 'i', 'o','n']}
              idx={15}
            />
          </h1>
          <h3 className='topp'><b>M.Sc Software Systems (2020-2025):</b></h3>
          <p>
          Coimbatore Institute Of Technology, Coimbatore
          </p>
          <p>
          Current CGPA: 8.96 (Till 4th Semester)
          </p>
          <h3>Grade 12 (2019-2020):</h3>
          <p>
          G Ramasamy Naidu Matric. Hr. Sec. School, Coimbatore
          </p>
          <p>
          Percentage: 82.8%
          </p>
          <h3>Grade 10 (2017-2018):</h3>
          <p>
          G Ramasamy Naidu Matric. Hr. Sec. School, Coimbatore
          </p>
          <p>
          Percentage: 97.2%
          </p>
        </div>
        
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faGraduationCap} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faSchoolFlag} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faGraduationCap} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faSchool} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faGraduationCap} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faSchool} color="#EC4D28" />
            </div>
          </div>
        </div>
        </div>
        <Loader type="pacman" />
        </>
        )
}

export default Education
