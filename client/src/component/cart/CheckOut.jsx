import React, { useContext, useState } from "react";
import Footer from "../../pages/Footer";
import AppContext from "../../context/AppContext";
import { redirect, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PageHeader from "../PageHeader";
import Navbar from "../../pages/Navbar";

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

  const [paymentMethod, setPaymentMethod] = useState("");

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const { fullName, address, city, state, country, pincode, phoneNumber } = formData;

  const submitHandler = async (e) => {
    e.preventDefault();

    if (
      !fullName ||
      !address ||
      !city ||
      !state ||
      !country ||
      !pincode ||
      !phoneNumber
    ) {
      toast.error("Please enter all input fields");
      return;
    }

    const result = await shippingAddress(
      fullName,
      address,
      city,
      state,
      country,
      pincode,
      phoneNumber
    );

    if (result.success) {
      navigate("/cart/checkout");
    }

    setFormData({
      fullName: "",
      address: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
      phoneNumber: "",
    });
  };

  const handlePlaceOrder = () => {
    if (paymentMethod === "cod") {
      alert("Cash on Delivery selected. Your order has been placed!");
      
    } else if (paymentMethod === "bank") {
      alert("Bank Transfer selected. Please proceed with payment.");
    } else {
      toast.error("Please select a payment method");
    }
  };

  return (
    <>
      <div className="p-8 font-sans">
        {/* Header */}
        {/* <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold">Checkout</h2>
          <p className="text-gray-500">Home / Checkout</p>
        </div> */}
        <Navbar/>
         <PageHeader/>
         <br/>

        <div className="flex flex-col gap-10 lg:flex-row">
          {/* Billing Details */}
          <div className="flex-1">
            <h3 className="mb-6 text-xl font-bold">Billing Details</h3>
            <form className="space-y-6" onSubmit={submitHandler}>
              <input
                name="fullName"
                value={formData.fullName}
                onChange={onChangeHandler}
                type="text"
                placeholder="Full Name"
                className="w-full rounded border border-gray-300 p-3"
              />
              <input
                name="country"
                value={formData.country}
                onChange={onChangeHandler}
                type="text"
                placeholder="Country"
                className="w-full rounded border border-gray-300 p-3"
              />
              <input
                name="state"
                value={formData.state}
                onChange={onChangeHandler}
                type="text"
                placeholder="State"
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
                placeholder="Address"
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
                <input
                  type="radio"
                  name="payment"
                  value="bank"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="h-4 w-4"
                />
                <span>Direct Bank Transfer</span>
              </label>
              <label className="mb-4 flex items-center space-x-2">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="h-4 w-4"
                />
                <span>Cash on Delivery</span>
              </label>
              <p className="mb-6 text-sm text-gray-500">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our Privacy Policy.
              </p>
              <button
                type="button"
                onClick={handlePlaceOrder}
                className="w-full rounded border-[2px] border-black bg-transparent p-3 text-[#000000] hover:bg-gray-200"
              >
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
