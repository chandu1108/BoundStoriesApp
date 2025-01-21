import React from 'react'

function About() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white mt-20'>
      <h1 className='text-4xl text-red-500 text-semibold flex justify-center'>About us</h1>
      <div className='mt-8'>
        <h2 className='text-2xl'>Welcome to <span className='text-blue-500'>BoundStories</span>, 
        where stories come alive and readers find their next great adventures!</h2><br />
        <p className='text-xl'>As a developer and a passionate book lover, I created this platform 
        to make it easier for readers like you to discover and purchase books that inspire, 
        educate, and entertain. From timeless classics to modern bestsellers, my goal is to 
        curate a collection that caters to every kind of reader.</p><br />
        <p className='text-xl'>
        <b>Passion for Books:</b> This isn't just a business—it's a labor of love for literature.</p><br></br>
        <p className='text-xl'>
        <b>User-Friendly Experience:</b> Built with care to ensure a seamless browsing and shopping experience.</p><br></br>
        <p className='text-xl'>
        <b>Community Focused:</b> Designed for book enthusiasts to connect and share their love for reading.<br></br>
        </p><br />
        <p className='text-xl'>
        Every feature of this website reflects my commitment to celebrating the joy of reading.
        Thank you for being part of this journey. Together, let's turn the pages of countless adventures!
        </p>
      </div>
    </div>
    </>
  )
}

export default About