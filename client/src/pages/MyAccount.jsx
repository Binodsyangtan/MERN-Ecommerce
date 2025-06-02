import React from "react";
import { Link } from "react-router-dom";
import Login from "../component/myAccount/login";
import Navbar from "./Navbar";
import PageHeader from "../component/PageHeader";
import Footer from "./Footer";

function MyAccount() {
  return (
    <>
      <Navbar />
      {/* <PageHeader title="My Account" /> */}
      
      <div className="min-h-screen bg-gray-100">
        {/* Main Content Area */}
        <main className="container mx-auto px-4 py-12">
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <div className="rounded-lg bg-white p-8 shadow-md">
                <Login />
              </div>
              
              <div className="mt-6 text-center">
                {/* <p className="text-gray-600">
                  Don't have an account?{' '}
                  <Link 
                    to="/register" 
                    className="font-medium text-blue-600 hover:text-blue-500 hover:underline"
                  >
                    Create one
                  </Link>
                </p> */}
              </div>
            </div>
          </div>
        </main>

        {/* Features Section */}
        {/* <div className="bg-white py-12">
          <div className="container mx-auto grid grid-cols-1 gap-8 px-4 text-center md:grid-cols-3">
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold">Free Delivery</h3>
              <p className="text-gray-600">For all orders over $50</p>
            </div>
            
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold">90 Days Return</h3>
              <p className="text-gray-600">If goods have problems</p>
            </div>
            
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold">Secure Payment</h3>
              <p className="text-gray-600">100% secure payment</p>
            </div>
          </div>
        </div> */}

        {/* Footer */}
        <Footer/>
      </div>
    </>
  );
}

export default MyAccount;