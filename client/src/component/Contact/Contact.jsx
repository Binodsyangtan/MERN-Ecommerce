import React from "react";
import Navbar from "../../pages/Navbar";
import Footer from "../../pages/Footer";

function Contact() {
  return (
    <>
    <Navbar/>
      <div className="bg-white">
        {/* Page Header */}
        <div className="py-10 text-center">
          <h1 className="text-4xl font-bold">Contact</h1>
          <p className="text-gray-500">Home / Contact</p>
        </div>

        {/* Main Contact Section */}
        <div className="container mx-auto px-4 py-16 md:px-10">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-semibold">Get In Touch With Us</h2>
            <p className="mt-2 text-gray-600">
              For More Information About Our Product & Services, Please Feel
              Free To Drop Us A Message. Our Staff Always There To Help You Out.
              Don’t Hesitate!
            </p>
          </div>

          {/* Contact Info and Form Section */}
          <div className="grid gap-10 md:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="text-left">
                <h3 className="text-xl font-bold">Address</h3>
                <p>256 Elizaberth Ave Str, New York, NY 52630, United States</p>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold">Phone</h3>
                <p>Mobile: +1 (234) 5678 Hotline: +1 (234) 5689</p>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold">Working Time</h3>
                <p>Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form className="space-y-6">
                <div>
                  <label className="mb-1 block text-gray-700">Your Name</label>
                  <input
                    type="text"
                    className="w-full rounded border border-gray-300 p-3"
                    placeholder="Abc"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full rounded border border-gray-300 p-3"
                    placeholder="Abc@def.com"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-gray-700">Subject</label>
                  <input
                    type="text"
                    className="w-full rounded border border-gray-300 p-3"
                    placeholder="This is an optional"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-gray-700">Message</label>
                  <textarea
                    className="w-full rounded border border-gray-300 p-3"
                    placeholder="Hi! I’d like to ask about..."
                    rows="4"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded bg-black p-3 text-white hover:bg-gray-700"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        {/* <footer className="mt-16 bg-[#f8ece4] py-10 text-gray-700">
          <div className="container mx-auto grid gap-10 px-4 md:grid-cols-3">
           
            <div>
              <h3 className="font-semibold">Free Delivery</h3>
              <p>For all orders over $50, consectetur adipim scing elit.</p>
            </div>
            <div>
              <h3 className="font-semibold">90 Days Return</h3>
              <p>If goods have problems, consectetur adipim scing elit.</p>
            </div>
            <div>
              <h3 className="font-semibold">Secure Payment</h3>
              <p>100% secure payment, consectetur adipim scing elit.</p>
            </div>
          </div>
          <div className="container mx-auto mt-10 grid gap-10 px-4 md:grid-cols-3">
            <div>
              <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
            </div>
            <div>
              <ul className="space-y-2">
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p>Enter your email address</p>
              <input
                type="text"
                placeholder="Subscribe"
                className="w-full rounded border border-gray-300 p-2"
              />
            </div>
          </div>
          <div className="mt-10 text-center text-gray-600">
            © 2023 Maxsuel House. All rights reserved
          </div>
        </footer> */}
        <Footer/>
      </div>
    </>
  );
}

export default Contact;
