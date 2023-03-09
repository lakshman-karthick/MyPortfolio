import { faAddressCard, faEnvelope, faGraduationCap, faPhone, faSchool, faSchoolCircleCheck, faSchoolCircleExclamation, faSchoolFlag, faSchoolLock, faVoicemail } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{useState,useEffect} from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Loader from 'react-loaders'
const Education = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  const position = [51.505, -0.09]
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', 's']}
              idx={15}
            />
          </h1>
          <h3 className='topp'><b>Address:</b></h3>
          <p>
          <FontAwesomeIcon icon={faAddressCard} color="#ffd700" /> -  62 ,6th Street ,Dr.Jaganathan Nagar , Civil Aerodrome Post, Coimbatore-14.
          </p>
          <h3> Phone No:</h3>
          <p>
          <FontAwesomeIcon icon={faPhone} color="#ffd700" /> - 8883009848
          </p>
          
          <h3>Email:</h3>
          <p>
          <FontAwesomeIcon icon={faEnvelope} color="#ffd700" /> - lakshmankarthickt@gmail.com
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

        {/* <div className="info-map">
          Slobodan Gajić,
          <br />
          Serbia,
          <br />
          Branka RadiČevića 19, 22000 <br />
          Sremska Mitrovica <br />
          <br />
          <span>freelancerslobodan@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[44.96366, 19.61045]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[44.96366, 19.61045]}>
              <Popup>Sloba lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
   </div> */}
        </div>
        <Loader type="pacman" />
        </>
        )
}

export default Education
