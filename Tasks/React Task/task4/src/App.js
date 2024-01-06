import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Error from './Error'
import Treatments from './Treatments'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/treatment' element={<Treatments/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
    </div>
  )
}

export default App
