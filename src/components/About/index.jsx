import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

const About = () => {
      const [letterClass, setLetterClass] = useState('text-animate')

      useEffect(() => {
        setTimeout(() => {
          setLetterClass(`text-animate-hover`)
        }, 4000)
      })
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          {' '}
          <AnimatedLetters strArray={['A', 'b', 'o', 'u', 't'," ", "m","e"]} idx={15} />
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
          looking for a job in tech as a software developer. I worked in a team to build a website
          for a community centre and received positive feedback from my clients.
        </p>
        <p></p>
      </div>{' '}
    </div>
  )
}

export default About
