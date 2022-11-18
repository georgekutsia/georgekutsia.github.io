import React from 'react'
import { Link } from 'react-router-dom'
import { Hobbies, MyInfo, Projects, Skills, WorkExperience } from '../../components'

function ContactScreen() {
  return (
    <div>
      <h1>ContactScreen</h1>
      <MyInfo/>
      <WorkExperience/>
      <Skills/>
      <Projects/>
      <Hobbies/>
      <Link to="/">Back to frontpage</Link>
    </div>
  )
}

export default ContactScreen