import React from "react";

function Footer() {
  return (
    <>
      <footer className="mt-16 py-10 text-gray-700">
        <div className="container mx-auto grid gap-10 bg-[#FAF4F4] p-10 md:grid-cols-3">
          {/* Footer Info */}
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

        <div className="container mx-auto mt-10 grid gap-10 p-4 md:grid-cols-4">
          <div>
            <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
          </div>
          <div>
            <ul className="space-y-2">
              <li>Links</li>
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>Payment Options</li>
              <li>Home</li>
              <li>Returns</li>
              <li>Privacy Policies</li>
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
          © 2023 Sampanna Homes. All rights reserved
        </div>
      </footer>
    </>
  );
}

export default Footer;
