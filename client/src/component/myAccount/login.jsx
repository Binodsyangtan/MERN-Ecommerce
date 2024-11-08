import React from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


function Login() {
  const navigate = useNavigate()// initialize usenagivate hook


function handleLogin(e){
  e.preventDefault();

  const email = e.target.email.value.trim();
  const password = e.target.password.value.trim();

  if(!email || !password){
    toast.error("Please enter both email and password")
    return;  //to end this if condition 
  }

  axios.post("http://localhost:8000/api/user/login",{
    email,
    password,
  }).then((res) =>{
    toast.success("login successfull");

     // Store the token in localStorage (or sessionStorage)
     localStorage.setItem("authToken", res.data.token);
     console.log("token",res.data.token);
     

     navigate("/");

    

  }).catch((err)=>{
    if(err.response){
      toast.error("failed")
    }
  })

}



    return (
    <>
     <div className="bg-white p-8 rounded shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Login</h2>
          <form onSubmit={handleLogin}>
           
            <label className="block text-sm font-medium text-gray-700 mb-2">Email address</label>
            <input
            name='email'
              type="email"
              className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
              placeholder="Enter your email"
            />
            <label className="block text-sm font-medium text-gray-700 mb-2">password</label>
            <input
            name='password'
              type="password"
              className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
              placeholder="Enter your password"
              autoComplete='new-password'
            />
            {/* <p className="text-sm text-gray-500 mb-4">
              A link to set a new password will be sent to your email address.
            </p> */}
            <button className="w-full bg-black text-white p-2 rounded">Login</button>
            
            <ToastContainer/>


          </form>
        </div>
    
    </>
  )
}

export default Login