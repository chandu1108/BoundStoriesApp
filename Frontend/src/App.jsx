import React from 'react'
import Homepage from './home/Homepage'
import Courses from './Courses/courses'
import Contacts from './Contacts/contacts'
import About from './AboutUs/about'
import { Route,Routes } from "react-router-dom"
import Signup from './components/signup'

function App() {
  return (<>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/course" element={<Courses/>}/>
      <Route path="/contact" element={<Contacts/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App