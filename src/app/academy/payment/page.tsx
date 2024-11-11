"use client";
import React, { useState } from "react";
import Image from "next/image";
import Payment from "../../components/academy/payment/Payment";
import CourseEnroll from "../../components/academy/payment/CourseEnroll";


const BillingForm = () => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "Germany",
    "France",
    "India",
    "Pakistan",
    "China",
    "Japan",
  ];

  const handleCountrySelect = (selectedCountry: string) => {
    setCountry(selectedCountry);
    setIsDropdownOpen(false);
  };

  return (
    <>
      <header>
        <div className="flex justify-evenly border-b-2 items-center py-3">
          <div className="flex items-center">
            <Image src="/logo.png" width={50} height={50} alt="logo" />
            <p className="text-[16px] text-[#FA8500] font-bold">North Rays</p>
          </div>
          <span>Enrol Now</span>
        </div>
      </header>

      <div className="w-3/6 mx-auto">
        <div className="flex justify-evenly py-20 ">
          <div>
            <h5 className="font-bold py-5 text-xl">Checkout</h5>
            <h5 className="text-[18px] mb-6">Billing Information</h5>

            <div className="mb-4">
              <label
                htmlFor="name"
                className="block font-bold mb-2 text-[#008000]"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            {/* Country dropdown */}
            <div className="mb-4 relative">
              <label
                htmlFor="country"
                className="block text-gray-700 font-bold mb-2"
              >
                Country
              </label>
              <div
                className="w-full px-3 py-2 border rounded-md cursor-pointer bg-white"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {country || "Select your country"}
              </div>

              {isDropdownOpen && (
                <ul className="absolute z-10 mt-1 w-full bg-white border rounded-md shadow-lg max-h-40 overflow-auto">
                  {countries.map((countryName) => (
                    <li
                      key={countryName}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                      onClick={() => handleCountrySelect(countryName)}
                    >
                      {countryName}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div>
              <Payment />
            </div>
          </div>

          <div className="w-3/6 mx-10">
            <CourseEnroll />
          </div>
        </div>
      </div>
    </>
  );
};

export default BillingForm;
