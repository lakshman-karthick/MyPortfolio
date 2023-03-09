import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
//import LogoTitle from '../../assets/images/logo-s.png'
import LogoD from '../../assets/images/Lakshman.jpeg'
//import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['L', 'a', 'k', 's', 'h', 'm', 'a','n',' ','K','a','r','t','h','i','c','k',',']
  const jobArray = [
    's',
    't',
    'u',
    'd',
    'e',
    'n',
    't',
    '.',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  const Linkk = "https://drive.google.com/file/d/1xCDbKbCH7MfbVaFSq2KBLy4fFNLoxyiJ/view?usp=sharing";
  return (
    <>
      <div className="container home-page">
      <div className='imga'>
      <div className='imagee'>
        <img src={LogoD} height='350px' width='250px' alt='profile'></img>
      </div>
      <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <span className={`${letterClass} _14`}> </span>
            {/* <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            /> */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={32}
            />
          </h1>
          <div className="formatting">
          <a className="textRes" href={Linkk} download>RESUME</a>
          <Link to="/about" className="flat-button">
            ABOUT ME
          </Link>
          </div>
          
        </div>
      </div>
        
        {/* <Logo /> */}
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home