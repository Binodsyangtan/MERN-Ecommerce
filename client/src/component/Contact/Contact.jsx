import React from "react";
import Navbar from "../../pages/Navbar";
import Footer from "../../pages/Footer";

function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Simple header without fade effect */}
      <header className="bg-[#FBEBB5]">
        <div className="container mx-auto px-4 py-10 md:py-12 text-center">
          <h1 className="mb-3 text-3xl font-bold md:text-4xl animate-float">
            Get In Touch
          </h1>
          <p className="mx-auto max-w-lg text-gray-600">
            Have questions? We're here to help! Contact us anytime.
          </p>
        </div>
      </header>

      {/* Contact Form Section (unchanged) */}
      <main className="flex-grow bg-[#FAF4F4] py-12">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-white p-6 shadow-md sm:p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Ram"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="mt-1 block w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Tell us more about your inquiry..."
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-indigo-600 px-4 py-3 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Alternatives (unchanged) */}
          <div className="mt-12 text-center">
            <h3 className="text-lg font-medium text-gray-900">
              Prefer other ways to reach us?
            </h3>
            <p className="mt-2 text-gray-600">
              Email us at{" "}
              <a
                href="mailto:binodsyangtan9761@gmail.com"
                className="text-indigo-600 hover:text-indigo-500"
              >
                binodsyangtan9761@gmail.com
              </a>{" "}
              or call us at{" "}
              <a
                href="tel:9761730924"
                className="text-indigo-600 hover:text-indigo-500"
              >
                9761730924
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;