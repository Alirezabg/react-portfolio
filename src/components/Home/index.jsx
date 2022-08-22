import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['A', 'l', 'i', 'r', 'e', 'z', 'a']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]
  useEffect(() => {
     setTimeout(() => {setLetterClass(`text-animate-hover`)}, 4000)
  })
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`{letterClass}_12`}>i,</span>
            <br /> I'm{' '}
            <AnimatedLetters letterClass={letterClass} strArray={nameArray} />
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={jobArray} />
          </h1>
          <h2>Frontend Developer / JavaScript Expert</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
