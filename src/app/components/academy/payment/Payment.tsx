"use client"; // Mark as a client component
import React, { useState } from "react";
import { FaCreditCard } from "react-icons/fa6";



const Payment: React.FC = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");


  
  return (
    <>
      <div className="w-full mx-auto p-6 rounded-lg border-2">
        {/* Payment Method Card Section */}
        <div>
          <div className="mb-4 flex items-center">
            <FaCreditCard />
            <h3 className="text-xl font-semibold px-5">Card</h3>
          </div>

          {/* Card Number */}
          <div className="flex flex-col mb-4">
            <label htmlFor="cardNumber" className="text-sm mb-2">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              className="border border-gray-400 py-2 px-4 rounded-md"
              placeholder="1234 1234 1234 1234"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </div>

          {/* Expiration Date and Security Code */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col">
              <label htmlFor="expiryDate" className="text-sm mb-2">
                Expiration Date
              </label>
              <input
                type="text"
                id="expiryDate"
                className="border border-gray-400 py-2 px-4 rounded-md"
                placeholder="MM / YY"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="securityCode" className="text-sm mb-2">
                Security Code
              </label>
              <input
                type="text"
                id="securityCode"
                className="border border-gray-400 py-2 px-4 rounded-md"
                placeholder="CVC"
                value={securityCode}
                onChange={(e) => setSecurityCode(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* PayPal Option */}
        <div className="flex items-center mt-4 mb-6">
          <input
            type="radio"
            name="paymentMethod"
            value="paypal"
            checked={paymentMethod === "paypal"}
            onChange={() => setPaymentMethod("paypal")}
            className="mr-2"
          />
          <label htmlFor="paypal" className="text-sm">
            Paypal
          </label>
        </div>

        {/* Start Free Trial Button */}
        <button className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold mb-4">
          Start Free Trial
        </button>

        {/* Disclaimer Section */}
        <p className="text-gray-600 text-sm">You woould not be charged today</p>
        <p className="text-xs text-gray-500 mt-4">
          Claim this limited-time offer by November 30, 11:59 PM PT. Valid for
          new Google Professional Certificate purchase only, limited to one per
          person...
        </p>
      </div>
    </>
  );
};

export default Payment;
