import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
      This is about Page <br/>
      <Link to='/'>Home</Link>
      <Link to='/treatment'>Treatments</Link>
      <Link to='/contact'>Contact</Link>
    </div>
  )
}

export default About
