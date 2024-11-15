// import React from "react";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";

// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const navigate = useNavigate(); // initialize usenagivate hook

//   function handleLogin(e) {
//     e.preventDefault();
//     const email = e.target.email.value.trim();
//     const password = e.target.password.value.trim();

//     if (!email || !password) {
//       toast.error("Please enter both email and password");
//       return; //to end this if condition
//     }

//     axios
//       .post("http://localhost:8000/api/user/login", {
//         email,
//         password,
//       })
//       .then((res) => {
//         toast.success("login successfull");

//         // Store the token in localStorage (or sessionStorage)
//         localStorage.setItem("authToken", res.data.token);
//         console.log("token", res.data.token);

//         navigate("/");
//       })
//       .catch((err) => {
//         if (err.response) {
//           toast.error("failed");
//         }
//       });
//   }

//   return (
//     <>
//       <div className="rounded bg-white p-8 shadow-lg">
//         <h2 className="mb-6 text-2xl font-semibold">Login</h2>
//         <form onSubmit={handleLogin}>
//           <label className="mb-2 block text-sm font-medium text-gray-700">
//             Email address
//           </label>
//           <input
//             name="email"
//             type="email"
//             className="mb-4 w-full rounded border border-gray-300 p-2 focus:border-gray-500 focus:outline-none"
//             placeholder="Enter your email"
//           />
//           <label className="mb-2 block text-sm font-medium text-gray-700">
//             password
//           </label>
//           <input
//             name="password"
//             type="password"
//             className="mb-4 w-full rounded border border-gray-300 p-2 focus:border-gray-500 focus:outline-none"
//             placeholder="Enter your password"
//             autoComplete="new-password"
//           />
//           {/* <p className="text-sm text-gray-500 mb-4">
//               A link to set a new password will be sent to your email address.
//             </p> */}
//           <button className="w-full rounded bg-black p-2 text-white">
//             Login
//           </button>

//           <ToastContainer />
//         </form>
//       </div>
//     </>
//   );
// }

// export default Login;
