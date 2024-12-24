import React from "react";
import Footer from "../../pages/Footer";
import { useContext } from "react";
import AppContext from "../../context/AppContext";

const Checkout = () => {
  const { price, cart } = useContext(AppContext);
  
  return (
    <>
      <div className="p-8 font-sans">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold">Checkout</h2>
          <p className="text-gray-500">Home / Checkout</p>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row">
          {/* Billing Details */}
          <div className="flex-1">
            <h3 className="mb-6 text-xl font-bold">Billing Details</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full rounded border border-gray-300 p-3"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full rounded border border-gray-300 p-3"
                />
              </div>
              <input
                type="text"
                placeholder="Company Name (Optional)"
                className="w-full rounded border border-gray-300 p-3"
              />
              <select className="w-full rounded border border-gray-300 p-3">
                <option value="sri-lanka">KATHMANDU</option>
                <option value="sri-lanka">LALITPUT</option>
                <option value="sri-lanka">BHAKTAPUR</option>
              </select>
              <input
                type="text"
                placeholder="Street Address"
                className="w-full rounded border border-gray-300 p-3"
              />
              <input
                type="text"
                placeholder="Town / City"
                className="w-full rounded border border-gray-300 p-3"
              />
              <select className="w-full rounded border border-gray-300 p-3">
                <option value="western-province">Western Province</option>
                {/* Add more provinces */}
              </select>
              <input
                type="text"
                placeholder="ZIP Code"
                className="w-full rounded border border-gray-300 p-3"
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-full rounded border border-gray-300 p-3"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded border border-gray-300 p-3"
              />
              <textarea
                placeholder="Additional Information"
                className="h-24 w-full rounded border border-gray-300 p-3"
              />
            </form>
          </div>

          {/* Order Summary */}
          <div className="flex-1 rounded border border-gray-300 p-6 shadow">
            <h3 className="mb-6 text-xl font-bold">Your Order</h3>
            {cart?.items?.map((prod) => (
              <div key={prod._id} className="space-y-4">
                <div className="flex justify-between">
                  <span>{prod.title}</span>
                  <span>Rs.{prod.price}</span>
                </div>
                <hr className="border-gray-300" />
              </div>
            ))}
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>Rs.{price}</span>
                </div>

            <hr className="my-6 border-gray-300" />

            {/* Payment Options */}
            <div>
              <label className="mb-4 flex items-center space-x-2">
                <input type="radio" name="payment" className="h-4 w-4" />
                <span>Direct Bank Transfer</span>
              </label>
              <label className="mb-4 flex items-center space-x-2">
                <input type="radio" name="payment" className="h-4 w-4" />
                <span>Cash on Delivery</span>
              </label>
              <p className="mb-6 text-sm text-gray-500">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our Privacy Policy.
              </p>
              <button className="w-full rounded border-[2px] border-black bg-transparent p-3 text-[#000000] hover:bg-gray-200">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
