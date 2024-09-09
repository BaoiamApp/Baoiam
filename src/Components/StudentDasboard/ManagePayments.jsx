import React, { useState } from "react";

function ManagePayments() {
  // State to manage selected payment method
  const [selectedPayment, setSelectedPayment] = useState("");
  const [savedPaymentMethod, setSavedPaymentMethod] = useState("");

  // List of payment options
  const paymentMethods = ["Credit Card", "PayPal", "Net Banking"];

  // Function to handle payment method change
  const handlePaymentChange = (method) => {
    setSelectedPayment(method);
  };

  // Function to save the selected payment method
  const handleSavePaymentMethod = () => {
    setSavedPaymentMethod(selectedPayment);
    alert(`Payment method saved: ${selectedPayment}`);
  };

  return (
    <div className="p-6 max-w-md mx-auto shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Manage Payment Methods</h2>

      {/* Display currently saved payment method */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold ">Current Payment Method:</h3>
        <p className="">{savedPaymentMethod || "No payment method saved"}</p>
      </div>

      {/* List available payment methods */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-700">Select a Payment Method:</h3>
        {paymentMethods.map((method, index) => (
          <label key={index} className="block mb-2">
            <input
              type="radio"
              name="paymentMethod"
              value={method}
              className="mr-2"
              checked={selectedPayment === method}
              onChange={() => handlePaymentChange(method)}
            />
            {method}
          </label>
        ))}
      </div>

      {/* Button to save the selected payment method */}
      <button
        className={`px-4 py-2 rounded-full text-white ${
          selectedPayment ? "bg-green-500 hover:bg-green-600" : "bg-gray-300 cursor-not-allowed"
        }`}
        disabled={!selectedPayment}
        onClick={handleSavePaymentMethod}
      >
        Save Payment Method
      </button>
    </div>
  );
}

export default ManagePayments;