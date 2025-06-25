import React, { useContext, useState } from "react";
import Footer from "../../pages/Footer";
import AppContext from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../../pages/Navbar";

const Checkout = () => {
  const navigate = useNavigate();
  const { price, cart, shippingAddress, userAddress } = useContext(AppContext);
  const [step, setStep] = useState(1); // 1 for address, 2 for payment

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
    if (result.success) {
      setStep(2); // Move to payment step
      toast.success("Address saved successfully");
    }
  };

  const handlePlaceOrder = () => {
    if (!paymentMethod) {
      toast.error("Please select a payment method");
      return;
    }
    
    if (paymentMethod === "cod") {
      toast.success("Cash on Delivery selected. Your order has been placed!");
      // Here you would typically call an API to place the order
      setTimeout(() => {
        navigate("/order-confirmation"); // Redirect to confirmation page
      }, 1500);
    } else {
      toast.success("Khalti Transfer selected. Please proceed with payment.");
      // Here you would typically redirect to payment gateway
      setTimeout(() => {
        navigate("/payment"); // Redirect to payment processing
      }, 1500);
    }
  };

  const useSavedAddress = () => {
    setStep(2); // Skip to payment if using saved address
    toast.success("Using saved address");
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      
      {/* Header */}
      <header className="bg-[#FBEBB5] py-10 md:py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-3 text-3xl font-bold md:text-4xl">Checkout</h1>
          <div className="flex justify-center mb-4">
            <div className="flex items-center">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 1 ? 'bg-orange-500 text-white' : 'bg-gray-300 text-gray-600'}`}>
                1
              </div>
              <div className={`mx-2 text-sm ${step >= 1 ? 'text-orange-500 font-medium' : 'text-gray-500'}`}>Address</div>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-px bg-gray-300 mx-2"></div>
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 2 ? 'bg-orange-500 text-white' : 'bg-gray-300 text-gray-600'}`}>
                2
              </div>
              <div className={`mx-2 text-sm ${step >= 2 ? 'text-orange-500 font-medium' : 'text-gray-500'}`}>Payment</div>
            </div>
          </div>
          <p className="mx-auto max-w-lg text-gray-600">
            {step === 1 ? "Enter your shipping details" : "Complete your payment"}
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto mt-8 px-4 pb-12">
        {step === 1 ? (
          <div className="max-w-2xl mx-auto">
            {/* Billing Details */}
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h2 className="mb-6 text-xl font-bold">Shipping Details</h2>
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
                  className="w-full rounded-lg bg-orange-500 py-3 font-medium text-white hover:bg-orange-600"
                >
                  Continue to Payment
                </button>

                {userAddress && (
                  <button
                    type="button"
                    onClick={useSavedAddress}
                    className="w-full rounded-lg bg-green-500 py-2 font-medium text-white hover:bg-green-600"
                  >
                    Use Saved Address
                  </button>
                )}
              </form>
            </div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            {/* Order Summary & Payment */}
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h2 className="mb-6 text-xl font-bold">Review Your Order</h2>
              
              <div className="mb-6">
                <h3 className="font-medium text-gray-700 mb-2">Shipping Address</h3>
                <p className="text-gray-600">
                  {formData.fullName}<br />
                  {formData.address}<br />
                  {formData.city}, {formData.state}, {formData.country} - {formData.pincode}<br />
                  Phone: {formData.phoneNumber}
                </p>
                <button 
                  onClick={() => setStep(1)}
                  className="mt-2 text-sm text-orange-500 hover:underline"
                >
                  Edit Address
                </button>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-medium text-gray-700 mb-3">Order Summary</h3>
                <div className="divide-y">
                  {cart?.items?.map((prod) => (
                    <div key={prod._id} className="py-3 grid grid-cols-4 gap-4 items-center">
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

                <div className="mt-4 border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>Rs. {price}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <h3 className="font-bold">Payment Method</h3>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 p-3 border rounded-lg hover:border-orange-400">
                    <input
                      type="radio"
                      name="payment"
                      value="bank"
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="h-5 w-5 text-orange-500 focus:ring-orange-500"
                    />
                    <div>
                      <span className="font-medium">Khalti Transfer</span>
                      <p className="text-sm text-gray-500 mt-1">
                        Make your payment directly into our Khalti account.
                      </p>
                    </div>
                  </label>
                  <label className="flex items-center space-x-3 p-3 border rounded-lg hover:border-orange-400">
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="h-5 w-5 text-orange-500 focus:ring-orange-500"
                    />
                    <div>
                      <span className="font-medium">Cash on Delivery</span>
                      <p className="text-sm text-gray-500 mt-1">
                        Pay with cash when your order is delivered.
                      </p>
                    </div>
                  </label>
                </div>

                <button
                  onClick={handlePlaceOrder}
                  className="mt-6 w-full rounded-lg bg-orange-500 py-3 font-medium text-white hover:bg-orange-600"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;