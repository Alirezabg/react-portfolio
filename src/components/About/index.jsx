import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass(`text-animate-hover`)
    }, 2800)
  })
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          {' '}
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>{' '}
        <p>
          I am a hard-working individual, with excellent communication skills I
          can contribute to over 10 years of experience in customer service, but
          I have always been passionate about problem-solving. I have recently
          completed a year-long training program in software development. I am
          ready to move into a software development role and contribute to an
          organisation in the tech industry. In my last job as an electrician
          assistant, I learned how to find a problem and solve the problem by
          following logical steps, asking for help and reviewing from the
          beginning. Teamwork was one of the crucial skills in my previous job
          to work alongside the others to deliver the project. I would like to
          use this knowledge and I am seeking the opportunity to work as a
          software developer.
        </p>
        <p>
          I have completed a nine-month full-stack development course and am
          looking for a job in tech as a software developer. I worked in a team
          to build a website for a community centre and received positive
          feedback from my clients.
        </p>
        <p></p>
      </div>{' '}
      <div className="stage-cube-cont">
        <div className="cubeSpinner">
          <div className="face1">
            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          </div>
        </div>
      </div>
      <Loader type='pacman'/>
    </div>
  )
}

export default About
