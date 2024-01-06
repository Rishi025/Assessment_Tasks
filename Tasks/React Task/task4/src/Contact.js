import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div>
      This is Contact Page <br/>
     <Link to='/'>Home</Link>
     <Link to='/about'>About</Link>
     <Link to='/treatment'>Treatments</Link>
    </div>
  )
}

export default Contact
