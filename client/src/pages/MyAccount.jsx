import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import Register from "../component/myAccount/register";
import Login from "../component/myAccount/login";
import Navbar from "./Navbar";
import PageHeader from "../component/PageHeader";

function MyAccount() {
  return (
    <>
      <Navbar />
      <PageHeader />
      <div className="min-h-screen bg-gray-100">
        {/* Login and Register Section */}
        <div className="container mx-auto my-8 grid grid-cols-1 gap-16 p-6 md:grid-cols-2">
          {/* Login Form */}
          <Login />

          {/* Register Form */}
          <Register />
        </div>

        {/* Features Section */}
        <div className="bg-gray-50 py-12">
          <div className="container mx-auto grid grid-cols-1 gap-6 text-center md:grid-cols-3">
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
          <div className="container mx-auto grid grid-cols-1 gap-8 text-sm text-gray-500 md:grid-cols-3">
            <div className="text-center md:text-left">
              <p>40 White Street, Suite 200, City, State, Zip Code</p>
              <p>© 2024 YourShop. All rights reserved.</p>
            </div>
            <div className="text-center">
              <h3 className="mb-2 font-semibold">Quick Links</h3>
              <ul>
                <Link to={"/"} className="hover:underline">
                  Home
                </Link>
                <br />
                <Link to={"/products"} className="hover:underline">
                  shop
                </Link>

                <li>
                  <a href="#" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center md:text-right">
              <h3 className="mb-2 font-semibold">Newsletter</h3>
              <input
                type="text"
                placeholder="Enter your email"
                className="mb-2 w-full rounded border border-gray-300 p-2"
              />
              <button className="w-full rounded bg-black p-2 text-white">
                Subscribe
              </button>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MyAccount;
