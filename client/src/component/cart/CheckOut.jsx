import React from "react";
import Footer from "../../pages/Footer";

const Checkout = () => {
  return (
    <>
    <div className="p-8 font-sans">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Checkout</h2>
        <p className="text-gray-500">Home / Checkout</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Billing Details */}
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-6">Billing Details</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name"
                className="border border-gray-300 p-3 rounded w-full"
                />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 p-3 rounded w-full"
              />
            </div>
            <input
              type="text"
              placeholder="Company Name (Optional)"
              className="border border-gray-300 p-3 rounded w-full"
            />
            <select className="border border-gray-300 p-3 rounded w-full">
              <option value="sri-lanka">Sri Lanka</option>
              {/* Add more countries */}
            </select>
            <input
              type="text"
              placeholder="Street Address"
              className="border border-gray-300 p-3 rounded w-full"
            />
            <input
              type="text"
              placeholder="Town / City"
              className="border border-gray-300 p-3 rounded w-full"
              />
            <select className="border border-gray-300 p-3 rounded w-full">
              <option value="western-province">Western Province</option>
              {/* Add more provinces */}
            </select>
            <input
              type="text"
              placeholder="ZIP Code"
              className="border border-gray-300 p-3 rounded w-full"
            />
            <input
              type="text"
              placeholder="Phone"
              className="border border-gray-300 p-3 rounded w-full"
              />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 p-3 rounded w-full"
              />
            <textarea
              placeholder="Additional Information"
              className="border border-gray-300 p-3 rounded w-full h-24"
              />
          </form>
        </div>

        {/* Order Summary */}
        <div className="flex-1 border border-gray-300 p-6 rounded shadow">
          <h3 className="text-xl font-bold mb-6">Your Order</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>August Sofa x 1</span>
              <span>Rs. 250,000.00</span>
            </div>
            <hr className="border-gray-300" />
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>Rs. 250,000.00</span>
            </div>
          </div>
          <hr className="border-gray-300 my-6" />

          {/* Payment Options */}
          <div>
            <label className="flex items-center space-x-2 mb-4">
              <input type="radio" name="payment" className="w-4 h-4" />
              <span>Direct Bank Transfer</span>
            </label>
            <label className="flex items-center space-x-2 mb-4">
              <input type="radio" name="payment" className="w-4 h-4" />
              <span>Cash on Delivery</span>
            </label>
            <p className="text-gray-500 text-sm mb-6">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our Privacy Policy.
            </p>
            <button className="bg-transparent text-[#000000] w-full p-3 rounded hover:bg-gray-200 border-[2px] border-black">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
              </>
  );
};

export default Checkout;
