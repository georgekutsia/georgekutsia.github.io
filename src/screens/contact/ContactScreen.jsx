import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FadeInOut, Hobbies, MyInfo, Projects, Skills, WorkExperience } from '../../components'


function ContactScreen() {
  const [skill, setSkills] = useState(false)
  const [project, setProject] = useState(false)
  const [hobbies, setHobbies] = useState(false)

  useEffect(() => {
  const skillTime = setTimeout(() => {
      setSkills(true)
    }, 900)

  const projectTime = setTimeout(() => {
      setProject(true)
    }, 1900)

  const hobbiesTime = setTimeout(() => {
      setHobbies(true)
    }, 2900)
    return () => {
      clearTimeout(skillTime)
      clearTimeout(projectTime)
      clearTimeout(hobbiesTime)
  }
}, [])
  return (
    <div className='mt-5 mb-3'>
      <div className='little-more-title'>Little more about me...</div>
      <article className='little-more-text'>I could never settle for one style of life and job, so I experimented with so many ways of living...
      Interested in so much things, mediocre in everything I tried, met so many people and lived enough adventures for weeks of stories...</article>
      <article className='little-more-text'>Something I always carried with me along in any of my adventures were the values and morals I had from child: 
      loyalty, dedication, curiosity, companionship, 
      </article>
      {/* <MyInfo/> */}
      {/* <WorkExperience/> */}
      <FadeInOut show={skill} duration={1500}>
      {skill && 
          <Skills/>
      }
      </FadeInOut>
      {project && 
      <FadeInOut show={project} duration={500}>
          <Projects/>
      </FadeInOut>
      }
      {hobbies && 
      <FadeInOut show={hobbies} duration={500}>
          <Hobbies/>
      </FadeInOut>
      }
      <Link className='button-link my-btn  btn-more-info' to="/">Back to frontpage</Link>
    </div>
  )
}

export default ContactScreen