import React from 'react'

function Contact() {
  return (
  <>
  <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 text-white mt-20'>
    <div className='flex justify-center'>
      <h1 className='text-4xl text-red-500 text-semibold'>📞Contact Us..</h1>
    </div>
    <div className='mt-10 w-screen-2xl text-xl flex justify-center'>
    <form action="" >
      <span className='text-blue-500'>👨‍💼Name</span><br />
      <input type="name" className='border rounded-md outline-none w-80 px-3 py-3 dark:bg-slate-900 dark:text-white'
      placeholder='Enter your Name'/><br /><br />
      <span className='text-blue-500'>✉️Email</span><br />
      <input type="email" className='border w-80 px-3 py-3 rounded-md outline-none dark:bg-slate-900 dark:text-white' 
      placeholder='Enter your Email'/><br /> <br />
      <span className='text-blue-500'>➤💬Message</span><br />
      <textarea name="messagebox"placeholder='Enter your Message' className='border rounded-md px-12 py-10 outline-none dark:bg-slate-900 dark:text-white' id=""></textarea>
      <br />
      <button className='px-4 py-3 bg-green-500 rounded-md mt-8'>Submit</button>
    </form>
    </div>
  </div>
  </>

  )
}

export default Contact