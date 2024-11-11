import React from "react";
import Image from "next/image";
// import Navbar from "../../components/Navbar/Navbar";
import {
  FaLinkedin,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

const Page = () => {
  return (
    <>
      <section className="relative w-full h-[60vh] lg:h-[40vh]">
        <Image
          src="/contactbg.jpg"
          alt="bg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />

        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h2 className="text-white text-4xl font-bold">Contact Us</h2>
        </div>
        {/* <Navbar /> */}
      </section>
      <section className="bg-black">
        <div className="w-5/6 m-auto py-20">
          <div className="lg:flex justify-between">
            <div className="lg:w-1/2 my-auto">
              <p className="md:text-[40px] text-[20px] text-white leading-12 pb-10 font-extrabold">
                Get Touch
              </p>
              <p className="md:text-[18px] leading-8 text-white mb-12 w-5/6">
                At North Rays, we are dedicated to empowering businesses with
                cutting-edge technology solutions and innovative marketing
                strategies. Whether looking for custom software, AI-powered
                tools, VR/AR experiences, or IT consulting and support, our team
                is here to help your business thrive in the digital age. Lets
                work together to illuminate your path to success. Reach out to
                us today and discover how we can help your business stay ahead
                in the fast-evolving digital world.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="text-white hover:text-blue-800 transition duration-200 text-2xl" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-white hover:text-pink-700 transition duration-200 text-2xl" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="text-white hover:text-blue-400 transition duration-200 text-2xl" />
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-white hover:text-blue-600 transition duration-200 text-2xl" />
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube className="text-white hover:text-red-600 transition duration-200 text-2xl" />
                </a>
              </div>
            </div>

            <div className="lg:w-1/2 my-10">
              <form className="form-box text-white">
                <div className="form-wrapper">
                  <input
                    className="input w-full h-[40px] bg-transparent text-[18px] py-[1px] px-[22.5px] border border-white rounded mb-4"
                    type="text"
                    name="FirstName"
                    placeholder="First Name"
                  />
                  <input
                    className="input w-full h-[40px] bg-transparent text-[18px] py-[1px] px-[22.5px] border border-white rounded mb-4"
                    type="text"
                    name="LastName"
                    placeholder="Last Name"
                  />
                  <div className="flex gap-2 justify-between">
                    <input
                      className="input w-full h-[40px] bg-transparent text-[18px] py-[1px] px-[22.5px] border border-white rounded mb-4"
                      type="email"
                      name="Email"
                      placeholder="Email"
                    />
                    <input
                      className="input w-full h-[40px] bg-transparent text-[18px] py-[1px] px-[22.5px] border border-white rounded mb-4"
                      type="text"
                      name="PhoneNumber"
                      placeholder="Phone Number"
                    />
                  </div>
                  <textarea
                    rows={5}
                    className="textinput w-full  bg-transparent text-[18px] py-5 px-[22px] border border-white rounded mb-4"
                    placeholder="Type message here"
                  />
                  <button className="submit-btn w-full h-[56px] bg-white text-black hover:bg-black hover:text-white border border-[#767676] font-semibold text-[18px] rounded">
                    Get quote
                  </button>
                </div>
              </form>

              <div className=" mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-4 lg:space-y-0"></div>
            </div>

       
          </div>
          <div className="mx-auto">
              <div>
                <h3 className="text-lg font-semibold text-white">Subscribe</h3>
                <p className="text-sm text-gray-500 mb-4 py-5">
                  Stay updated on how the future of technology is shaping.
                </p>
              </div>

              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email here"
                  className="px-4 py-2 border rounded-l-md focus:outline-none"
                />
                <button className="px-4 py-2 bg-gray-200 rounded-r-md hover:bg-gray-300">
                  Submit
                </button>
              </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Page;
