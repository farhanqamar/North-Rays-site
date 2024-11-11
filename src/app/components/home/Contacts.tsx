import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const contacts = () => {
      
  return (
    <>
    <div className="w-5/6 m-auto py-20">
<div className="lg:flex justify-between">

      <div className="lg:w-1/2 my-auto">
        <p className="md:text-[40px] text-[20px] leading-12 pb-10 font-extrabold">
          Get Touch
        </p>
        <p className="md:text-[18px] leading-8 text-black mb-12 w-5/6">
          At North Rays, we are dedicated to empowering businesses with
          cutting-edge technology solutions and innovative marketing strategies.
          Whether looking for custom software, AI-powered tools, VR/AR
          experiences, or IT consulting and support, our team is here to help   
          your business thrive in the digital age. Lets work together to
          illuminate your path to success. Reach out to us today and discover
          how we can help your business stay ahead in the fast-evolving digital
          world.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="text-black hover:text-blue-800 transition duration-200 text-2xl" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-black hover:text-pink-700 transition duration-200 text-2xl" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-black hover:text-blue-600 transition duration-200 text-2xl" />
          </a>
        </div>
      </div>

      <div className="lg:w-1/2">
        <form className="form-box text-black py-9">
          <div className="form-wrapper">
            <input
              className="input w-full h-[40px] bg-transparent text-[18px] py-[1px] px-[22.5px] border border-black rounded mb-4"
              type="text"
              name="FirstName"
              placeholder="First Name"
            />
            <input
              className="input w-full h-[40px] bg-transparent text-[18px] py-[1px] px-[22.5px] border border-black rounded mb-4"
              type="text"
              name="LastName"
              placeholder="Last Name"
            />
            <div className="flex gap-2 justify-between">
                <input className="input w-full h-[40px] bg-transparent text-[18px] py-[1px] px-[22.5px] border border-black rounded mb-4"
              type="email"
              name="Email"
              placeholder="Email"
            />
            <input
              className="input w-full h-[40px] bg-transparent text-[18px] py-[1px] px-[22.5px] border border-black rounded mb-4"
              type="text"
              name="PhoneNumber"
              placeholder="Phone Number"
            />
            </div>
            <textarea rows= {5}
              className="textinput w-full  bg-transparent text-[18px] py-5 px-[22px] border border-black rounded mb-4"
              placeholder="Type message here"
            />
            <button className="submit-btn w-full h-[56px] bg-black text-white hover:bg-black hover:text-white border border-[#767676] font-semibold text-[18px] rounded">
              Get quote
            </button>
          </div>
        </form>
      </div>
      </div>
      </div>
    </>
  );
};

export default contacts;
