import React from 'react'
import About from '../components/About'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function about() {
  return (<>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Navbar/>
    <div className='min-h-screen dark:bg-slate-900 dark:text-white'>
    <About/>
    </div>
    <Footer/>
    </div>
    </>
  )
}

export default about