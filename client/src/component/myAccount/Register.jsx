import React from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Register() {


function handleSubmit(e){
    e.preventDefault();
    // console.log(e.target.name.value  );
    // console.log(e.target.email.value  );
    // console.log(e.target.password.value  );
    const  name=e.target.name.value.trim()
    const  email=e.target.email.value.trim()
    const  password=e.target.password.value.trim()
    
    if(!name || !email || !password){
      toast.error("please fill in all fields");
      return;  //for stop this if condition
    }
    
    axios.post("http://localhost:8000/api/user/register",{
        name,
        email,
        password,
    }).then((res) =>{
        toast.success("Registration successfull")
    }).catch((err)=>{
        if(err.response && err.response.status === 409){
          toast.error("bad request")
        }else{
          toast.error("error occured .")
        }
    });
}



    return (
    <>
     <div className="bg-white p-8 rounded shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Register</h2>
          <form onSubmit={handleSubmit}>
            <label className="block text-sm font-medium text-gray-700 mb-2">full name</label>
            <input
            name='name'
              type="name"
              className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
              placeholder="Enter your name"
            />
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
            <p className="text-sm text-gray-500 mb-4">
              A link to set a new password will be sent to your email address.
            </p>
            <button className="w-full bg-black text-white p-2 rounded">Register</button>
            
            <ToastContainer/>


          </form>
        </div>
    
    </>
  )
}

export default Register