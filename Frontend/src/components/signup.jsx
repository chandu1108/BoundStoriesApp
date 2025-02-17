import React from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import Login from '../components/login'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'

function Signup() {
    const location=useLocation()
    const Navigate=useNavigate()
    const from=location.state?.from?.pathname || "/"
    const {
            register,
            handleSubmit,
            formState: { errors },
          } = useForm()
        
    const onSubmit =async (data) =>{
      const userInfo={
        fullname:data.fullname,
        email:data.email,
        password:data.password
      }
      await axios.post("http://localhost:4001/user/signup",userInfo)
      .then((res)=>{
        console.log(res.data)
        if(res.data){
          toast.success("Signup Successful")
          Navigate(from, {replace:true});
        }
        localStorage.setItem("Users",JSON.stringify(res.data.user))
      })
      .catch((err)=>{
        console.log(err);
        toast.error("Error: "+err.message.data.message);
      })
    }
  return (
    <>
    <div className='flex h-screen items-center justify-center dark:bg-black-900 dark:text-white'>
    <div id="" className='w-[600px]' >
  <div className="modal-box">
    <form id='' method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:outline"><Link to='/'>✕</Link></button>
    
    <h3 className="font-bold text-lg">SignUp</h3>    
    <div className='mt-4 space-y-2'>

    <span>Name</span><br />
    <input type="name" placeholder='Enter Your Name' 
    className='w-80 px-3 py-3 border rounded-md outline-none'
    {...register("fullname", { required: true })}/><br />
    {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>} <br />

    <span>Email</span><br />
    <input type="email" placeholder='Enter Your Email' 
    className='w-80 px-3 py-3 border rounded-md outline-none'
    {...register("email", { required: true })}/><br />
    {errors.email && <span className='text-sm text-red-500'>This field is required</span>} <br />

    <span>Password</span><br />
    <input type="password" placeholder='Enter Your Password' 
    className='w-80 px-3 py-3 border rounded-md outline-none'
    {...register("password", { required: true })}/><br />
    {errors.password && <span className='text-sm text-red-500'>This field is required</span>} <br />

    <div className='flex justify-center'>
    <button className='px-4 py-3 border rounded-md bg-pink-500 text-white'>
        SignUp
        </button><br />
    </div>
    
    </div>
    </form>
    <p className='flex justify-center'>Already have an Acount?{" "}
        <button className='text-blue-500 cursor-pointer underline'
        onClick={()=>
        document.getElementById("my_modal_3").showModal()}>
        Login </button>{" "}
        <Login/>
        </p>
  </div>
</div>
    </div>
    </>
  )
}

export default Signup