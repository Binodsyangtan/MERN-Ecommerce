import React from 'react';
import {Link} from 'react-router-dom'
import Home from './Home';
import Register from '../component/myAccount/register';
import Login from '../component/myAccount/login';
import Navbar from './Navbar';

function MyAccount() {
  return (
    <>
    <Navbar/>
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-cover bg-center h-56 flex items-center justify-center relative">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-3xl font-semibold">My Account</h1>
          <p className="text-sm">Login or Register</p>
        </div>
      </header>

      {/* Login and Register Section */}
      <div className="container mx-auto p-6 my-8 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Login Form */}
        <Login/>

        {/* Register Form */}
       <Register/>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-lg font-semibold">Free Delivery</h3>
            <p className="text-sm text-gray-500">For all orders over $50</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">90 Days Return</h3>
            <p className="text-sm text-gray-500">If goods have problems</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Secure Payment</h3>
            <p className="text-sm text-gray-500">100% secure payment</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-500">
          <div className="text-center md:text-left">
            <p>40 White Street, Suite 200, City, State, Zip Code</p>
            <p>© 2024 YourShop. All rights reserved.</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold mb-2">Quick Links</h3>
            <ul>
              <Link to={'/'} className="hover:underline">Home</Link>
              <br />
              <Link to={'/products'} className="hover:underline">shop</Link>
              
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div className="text-center md:text-right">
            <h3 className="font-semibold mb-2">Newsletter</h3>
            <input
              type="text"
              placeholder="Enter your email"
              className="p-2 border border-gray-300 rounded w-full mb-2"
            />
            <button className="bg-black text-white p-2 rounded w-full">Subscribe</button>
          </div>
        </div>
      </footer>
    </div>
              </>
  );
}

export default MyAccount;
