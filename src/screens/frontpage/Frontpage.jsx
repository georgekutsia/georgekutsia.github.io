
import React from 'react'
import { Link } from 'react-router-dom'
import {ContactInfo, CoverLetterBody, WhoAmI} from '../../components'

function Frontpage() {
  return (
    <div className='background-all'>
      <div className='top-info'>
          <WhoAmI name={"George Kutsia Andguladze"} title={"Junior Web Developer"} 
                  studies={"MERN stack (Mongo.db, Express.js, React.js and Node.js)"}/>
          <div>
          <ContactInfo faIcon={"fa-solid fa-mobile-screen"} contactData={"+34 601-10-52-62"}/>
          <ContactInfo faIcon={"fa-solid fa-at"} contactData={"georgekutsia@gmail.com"}/>
          <ContactInfo faIcon={"fa-solid fa-location-dot"} contactData={"Barcelona, Spain"}/>
            <div className='d-flex'>
              <ContactInfo faIconLink={"fa-brands fa-linkedin"} outLink={"https://www.linkedin.com/in/george-kutsia-570a5bb6/"}/>
              <ContactInfo faIconLink={"fa-brands fa-github"} outLink={"https://github.com/georgekutsia"}/>
              <ContactInfo faIconLink={"fa-brands fa-codepen"} outLink={"https://codepen.io/Paithan"}/>
              <ContactInfo faIconLink={"fa-brands fa-free-code-camp"} outLink={"https://www.codewars.com/users/georgekutsia"}/>
            </div>
          </div>
      </div>
      <div>
        <CoverLetterBody />
      </div>
      
      <Link className='button-link' to="/contact">More about me</Link>
    </div>
  )
}

export default Frontpage