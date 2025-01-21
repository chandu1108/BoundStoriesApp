import React from 'react'
import {Link} from 'react-router-dom'
import { useForm } from "react-hook-form"

function login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
    const onSubmit = (data) => console.log(data)

  return (<>
    <div className='dark:bg-black-900 dark:text-white'>
    <dialog id="my_modal_3" className="modal">
  <div className="modal-box ">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    
    <h3 className="font-bold text-lg">Login</h3>    
    <div className='mt-4 space-y-2'>

    <span>Email</span><br />
    <input type="email" 
    placeholder='Enter Your Email' 
    className='w-80 px-3 py-3 border rounded-md outline-none'
    {...register("email", { required: true })}/><br />
    {errors.email && <span className='text-red-500'>This field is required</span>}<br/>

    <span>Password</span><br />
    <input type="text" 
    placeholder='Enter Your Password' className='w-80 px-3 py-3 border rounded-md outline-none'
    {...register("password", { required: true })}/><br />
    {errors.password && <span className='text-red-500'>This field is required</span>}

    <div className='flex justify-center'>
    <button className='px-4 py-3 border rounded-md bg-pink-500 text-white'>Login</button><br />
    </div>
    <span className='flex justify-center'>Not Registered? 
        <Link to='/signup' className='text-blue-500 cursor-pointer underline'>
        SignUp</Link> </span>
    </div>
    </form>
  </div>
</dialog>
    </div>
    </>
  ) 
}

export default login