// components/KhaltiPayment.jsx
import React from 'react';
import KhaltiCheckout from "khalti-checkout-web";
// import khaltiConfig from "../utils/khaltiConfig";

const KhaltiPayment = ({ amount }) => {
  const handlePayment = () => {
    const checkout = new KhaltiCheckout(khaltiConfig);
    checkout.show({ amount: amount * 100 }); // Khalti works in paisa (Rs * 100)
  };

  return (
    <button onClick={handlePayment} className="bg-purple-600 text-white px-4 py-2 rounded">
      Pay with Khalti
    </button>
  );
};

export default KhaltiPayment;
