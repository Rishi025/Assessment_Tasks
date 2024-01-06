import React from 'react'
import { Link } from 'react-router-dom'

function Treatments() {
  return (
    <div>
      Treatments we offer <br/>
      <Link to='/'>Home</Link>
     <Link to='/about'>About Us</Link>
        <Link to='/contact'>Contact</Link>
    </div>
  )
}

export default Treatments
