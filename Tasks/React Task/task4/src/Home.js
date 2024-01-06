import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="Links">
        <Link to='/'>Home</Link>
        <Link to='/about'>About Us</Link>
        <Link to='/treatment'>Treatments</Link>
        <Link to='/contact'>Contact</Link>
    </div>
  )
}

export default Home
