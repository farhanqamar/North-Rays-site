"use client";
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Icons for open/close menu

const ResponsiveNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white shadow-md py-4 sm:px-4">
      <div className="flex items-center justify-between px-1 sm:px-5 mx-auto">
        {/* Left: Logo and Hamburger Icon */}
        <div>
          {/* Logo */}
          <h1 className="text-2xl font-bold text-blue-600 ">coursera</h1>
        </div>

        {/* Middle - Search Bar */}
        <div className="flex-grow mx-8">
          <div className="relative">
            <input
              type="text"
              placeholder="What do you want to learn?"
              className="w-full border border-gray-300 rounded-full pl-4 pr-10 py-2 focus:outline-none"
            />
            <span className="absolute inset-y-0 right-3 flex items-center">
              <button className="focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5 text-blue-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35M18.65 11A7.65 7.65 0 1111 3.35 7.65 7.65 0 0118.65 11z"
                  />
                </svg>
              </button>
            </span>
          </div>
        </div>

        <div className="">
          {/* Hamburger icon for mobile */}
          <button className="text-gray-700 text-3xl" onClick={toggleMenu}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Sliding Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-white p-6 shadow-lg">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">coursera</h1>
            <button onClick={toggleMenu}>
              <FiX className="text-gray-700 text-3xl" />
            </button>
          </div>
          <ul className="mt-8 space-y-4">
            <li>
              <a href="#" className="text-gray-700 text-lg">
                Explore
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 text-lg">
                For Businesses
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 text-lg">
                For Governments
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 text-lg">
                For Universities
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 text-lg">
                Get our app
              </a>
            </li>
          </ul>

          {/* Bottom: Join/Login Buttons */}
          <div className="mt-auto flex flex-col space-y-4 pt-6">
            <button className="bg-blue-600 text-white py-3 rounded-md">Join for Free</button>
            <button className="border border-blue-600 text-blue-600 py-3 rounded-md">Log In</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default ResponsiveNavbar;
