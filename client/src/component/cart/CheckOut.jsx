import React from "react";
import Footer from "../../pages/Footer";
import { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import {  toast } from "react-toastify";

const Checkout = () => {
  const navigate = useNavigate();
  const { price, cart, shippingAddress, userAddress } = useContext(AppContext);
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    phoneNumber: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const { fullName, address, city, state, country, pincode, phoneNumber } =
    formData;

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(formData);
    if (
      !fullName ||
      !address ||
      !city ||
      !state ||
      !country ||
      !pincode ||
      !phoneNumber
    ) {
      toast.error("Please enter all input field");
      return;
    }

    const result = await shippingAddress(
      fullName,
      address,
      city,
      state,
      country,
      pincode,
      phoneNumber,
    );
    // console.log("addres added", result);

    //if i want to add navigate then yo ma lekhne aailey lai yesai rakhya xu
    if (result.success) {
      navigate("/cart/checkout");
    }

    //submit vyasi khali garnalai yo use gareko
    setFormData(
      {
        fullName: "",
        address: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
        phoneNumber: "",
      }
    )
  };

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
            <form className="space-y-6" onSubmit={submitHandler}>
              <div className="">
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={onChangeHandler}
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded border border-gray-300 p-3"
                />
              </div>
              <input
                name="country"
                value={formData.country}
                onChange={onChangeHandler}
                type="text"
                placeholder="Country"
                className="w-full rounded border border-gray-300 p-3"
              />
              {/* <select className="w-full rounded border border-gray-300 p-3">
                <option value="sri-lanka">KATHMANDU</option>
                <option value="sri-lanka">LALITPUT</option>
                <option value="sri-lanka">BHAKTAPUR</option>
              </select> */}
              <input
                name="state"
                value={formData.state}
                onChange={onChangeHandler}
                type="text"
                placeholder="state"
                className="w-full rounded border border-gray-300 p-3"
              />
              <input
                name="city"
                value={formData.city}
                onChange={onChangeHandler}
                type="text"
                placeholder="Town / City"
                className="w-full rounded border border-gray-300 p-3"
              />
              {/* <select className="w-full rounded border border-gray-300 p-3">
                <option value="western-province">Western Province</option>
               
              </select> */}
              <input
                name="pincode"
                value={formData.pincode}
                onChange={onChangeHandler}
                type="text"
                placeholder="PIN Code"
                className="w-full rounded border border-gray-300 p-3"
              />
              <input
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={onChangeHandler}
                type="text"
                placeholder="Phone number"
                className="w-full rounded border border-gray-300 p-3"
              />
              <input
                name="address"
                value={formData.address}
                onChange={onChangeHandler}
                type="text"
                placeholder=" Address"
                className="w-full rounded border border-gray-300 p-3"
              />
              <button
                type="submit"
                className="w-full rounded bg-[#FBEBB5] p-2 text-black"
              >
                Submit
              </button>
            </form>
            {userAddress && (
              <div className="d-grid mt-3">
                {/* hera we can use navigate when we click old address button */}
                <button className="btn btn-warning w-full rounded bg-green-500 p-2 text-white">
                  Use old Address
                </button>
              </div>
            )}
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
