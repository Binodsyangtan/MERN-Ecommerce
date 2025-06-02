import React, { useContext, useState } from "react";
import Footer from "../../pages/Footer";
import AppContext from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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
    if (!fullName || !address || !city || !state || !country || !pincode || !phoneNumber) {
      toast.error("Please enter all input fields");
      return;
    }

    const result = await shippingAddress(fullName, address, city, state, country, pincode, phoneNumber);
    if (result.success) navigate("/cart/checkout");
    
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
    if (!paymentMethod) {
      toast.error("Please select a payment method");
      return;
    }
    paymentMethod === "cod" 
      ? toast.success("Cash on Delivery selected. Your order has been placed!")
      : toast.success("Bank Transfer selected. Please proceed with payment.");
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      
      {/* Header */}
      <header className="bg-[#FBEBB5] py-10 md:py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-3 text-3xl font-bold md:text-4xl">Checkout</h1>
          <p className="mx-auto max-w-lg text-gray-600">
            Complete your purchase with secure checkout
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto mt-8 px-4 pb-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Billing Details */}
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-bold">Billing Details</h2>
            <form className="space-y-4" onSubmit={submitHandler}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={onChangeHandler}
                    type="text"
                    placeholder="Full Name"
                    className="w-full rounded-md border border-gray-300 p-3 focus:border-orange-500 focus:ring-orange-500"
                    required
                  />
                </div>
                <div>
                  <input
                    name="country"
                    value={formData.country}
                    onChange={onChangeHandler}
                    type="text"
                    placeholder="Country"
                    className="w-full rounded-md border border-gray-300 p-3 focus:border-orange-500 focus:ring-orange-500"
                    required
                  />
                </div>
              </div>

              <input
                name="address"
                value={formData.address}
                onChange={onChangeHandler}
                type="text"
                placeholder="Street Address"
                className="w-full rounded-md border border-gray-300 p-3 focus:border-orange-500 focus:ring-orange-500"
                required
              />

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <input
                  name="city"
                  value={formData.city}
                  onChange={onChangeHandler}
                  type="text"
                  placeholder="City"
                  className="rounded-md border border-gray-300 p-3 focus:border-orange-500 focus:ring-orange-500"
                  required
                />
                <input
                  name="state"
                  value={formData.state}
                  onChange={onChangeHandler}
                  type="text"
                  placeholder="State"
                  className="rounded-md border border-gray-300 p-3 focus:border-orange-500 focus:ring-orange-500"
                  required
                />
                <input
                  name="pincode"
                  value={formData.pincode}
                  onChange={onChangeHandler}
                  type="text"
                  placeholder="Postcode/ZIP"
                  className="rounded-md border border-gray-300 p-3 focus:border-orange-500 focus:ring-orange-500"
                  required
                />
              </div>

              <input
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={onChangeHandler}
                type="text"
                placeholder="Phone Number"
                className="w-full rounded-md border border-gray-300 p-3 focus:border-orange-500 focus:ring-orange-500"
                required
              />

              <button
                type="submit"
                className="w-full rounded-lg bg-[#FBEBB5] py-3 font-medium hover:bg-[#FBEBB5]/80"
              >
                Save Address
              </button>

              {userAddress && (
                <button
                  type="button"
                  className="w-full rounded-lg bg-green-500 py-2 font-medium text-white hover:bg-green-600"
                >
                  Use Saved Address
                </button>
              )}
            </form>
          </div>

          {/* Order Summary */}
          <div className="rounded-lg bg-[#FFF9E5] p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-bold">Your Order</h2>
            
            <div className="divide-y">
              {cart?.items?.map((prod) => (
                <div key={prod._id} className="py-4 grid grid-cols-4 gap-4 items-center">
                  <div className="col-span-2">
                    <p className="font-medium">{prod.title}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-600">x{prod.quantity}</span>
                  </div>
                  <div className="text-right font-medium">
                    Rs. {prod.price * prod.quantity}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t pt-4">
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>Rs. {price}</span>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <h3 className="font-bold">Payment Method</h3>
              <div className="space-y-3">
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="payment"
                    value="bank"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="h-5 w-5 text-orange-500 focus:ring-orange-500"
                  />
                  <span>Direct Bank Transfer</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="h-5 w-5 text-orange-500 focus:ring-orange-500"
                  />
                  <span>Cash on Delivery</span>
                </label>
              </div>

              <p className="mt-4 text-sm text-gray-500">
                Your personal data will be used to process your order and for other purposes described in our Privacy Policy.
              </p>

              <button
                onClick={handlePlaceOrder}
                className="mt-6 w-full rounded-lg bg-orange-500 py-3 font-medium text-white hover:bg-orange-600"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;