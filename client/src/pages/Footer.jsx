import React from "react";


function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      {/* Services Section */}
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center md:text-left">
          <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="font-semibold text-lg text-gray-800 mb-2">Free Delivery</h3>
          <p className="text-gray-600">For all orders over $50</p>
        </div>
        
        <div className="text-center md:text-left">
          <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
          <h3 className="font-semibold text-lg text-gray-800 mb-2">90 Days Return</h3>
          <p className="text-gray-600">Hassle-free return policy</p>
        </div>
        
        <div className="text-center md:text-left">
          <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 className="font-semibold text-lg text-gray-800 mb-2">Secure Payment</h3>
          <p className="text-gray-600">100% secure payment</p>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-gray-200">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Sampanna Homes</h3>
          {/* <address className="text-gray-600 not-italic">
            Amrit Campus<br />
            Coral Gables, FL 33134 
          </address> */}
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-800 mb-4">Links</h4>
          <ul className="space-y-2">
            {['Home', 'Shop', 'Contact','Blog'].map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-600 hover:text-amber-600 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-800 mb-4">Help</h4>
          <ul className="space-y-2">
            {['Payment Options', 'Returns', 'Privacy Policy', 'FAQ'].map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-600 hover:text-amber-600 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-800 mb-4">Newsletter</h4>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          © {new Date().getFullYear()} Sampanna Homes. All rights reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;