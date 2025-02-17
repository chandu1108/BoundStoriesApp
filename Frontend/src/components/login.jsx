import React from 'react'
import {Link} from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast,{ Toaster } from 'react-hot-toast'

function login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
    const onSubmit =async (data) =>{
      const userInfo={
        email:data.email,
        password:data.password
      }
      await axios.post("http://localhost:4001/user/login",userInfo)
      .then((res)=>{
        console.log(res.data)
        if(res.data){
          toast.success("Login Successful")
          setTimeout(()=>{
            window.location.reload();
            localStorage.setItem("Users",JSON.stringify(res.data.user))
            document.getElementById("my_modal_3").close();
          },1500)
          
        }
        
      })
      .catch((err)=>{
        console.log(err);
        toast.error("Error: "+err.message);
      })
    }

  return (<>
  <Toaster position="top-center" reverseOrder={false} />
    <div className='dark:bg-gray-900 dark:text-white'>
    <dialog id="my_modal_3" className="modal">
  <div className="modal-box dark:bg-gray-900 dark:text-white">
    <form id='' className='' method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"><Link to={'/'}>✕</Link> </button>
    
    <h3 className="flex justify-center font-bold text-lg text-blue-500 text-3xl">Login</h3>    
    <div className='mt-4 space-y-2'>

    <span>Email</span><br />
    <input type="email" 
    placeholder='Enter Your Email' 
    className='w-80 px-3 py-3 border rounded-md outline-none dark:bg-gray-900 dark:text-white'
    {...register("email", { required: true })}/><br />
    {errors.email && <span className='text-red-500'>This field is required</span>}<br/>

    <span>Password</span><br />
    <input type="password" 
    placeholder='Enter Your Password' 
    className='w-80 px-3 py-3 border rounded-md outline-none dark:bg-gray-900 dark:text-white'
    {...register("password", { required: true })}/><br />
    {errors.password && <span className='text-red-500'>This field is required</span>}

    <div className='flex justify-center'>
    <button type='submit' className='px-4 py-3 border rounded-md bg-pink-500 text-white'
    >Login</button><br />
    </div>
    <span className='flex justify-center'>Not Registered? {" "}
        <Link to='/signup' className='text-blue-500 cursor-pointer underline'>
        SignUp</Link> </span>{" "}
    </div>
    </form>
  </div>
</dialog>
    </div>
    </>
  ) 
}

export default login