import React from 'react'
import Homepage from './home/Homepage'
import Courses from './Courses/courses'
import Contacts from './Contacts/contacts'
import About from './AboutUs/about'
import { Navigate, Route,Routes } from "react-router-dom"
import Signup from './components/signup'
import { useAuth } from './context/authProvider'
import { Toaster } from 'react-hot-toast';

function App() {
  const [authUser,setAuthUser]=useAuth();
  console.log(authUser);
  return (<>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Toaster position="top-center" reverseOrder={false} />
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/course" element={authUser?<Courses/>:<Navigate to='/signup'/>}/>
      <Route path="/contact" element={<Contacts/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App