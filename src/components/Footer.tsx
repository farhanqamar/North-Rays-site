import React from "react";
import Image from "next/image";
// import logo from "./logo.png";
import logo from "../../public/logo.png";
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';


const Footer = () => {
  return (

    <footer className="bg-[#EFF0F2]">
      <div className="grid grid:cols-1 sm:grid-cols-2 md:grid-cols-4 items-center border-t border-gray-400 text-left">
        <div className=" text-white py-20 text-left hidden md:block">
          <div className="flex flex-col items-center px-2 lg:p-0 lg:w-2/3 mx-auto">
            <div>
              <Image
                src={logo} // Image path
                alt="Description of the image"
                width={150} // Define width
                height={150} // Define height
              />
            </div>
            <h1 className="text-[30px] font-medium text-[#FA8500]">
              Nort Rays
            </h1>
            <p className="text-[14px] leading-8  tracking-wide text-[#6b6b6e]">
              Empowering businesses with cutting-edge technology and innovative
              marketing solutions. Lets shape the future together with North Rays.
            </p>
          </div>
        </div>

        <div className="md:border-l border-l-[#3a3a3b] p-3 lg:p-10">
          <p className="pb-5 md:pb-10 font-bold text-[16px] uppercase">Product</p>

          <ul className="space-y-3">
            <li className="footer-li cursor-pointer hover:text-[#FA8500] transition-all ease-out duration-300">TCP Optimization</li>
            <li className="footer-li cursor-pointer hover:text-[#FA8500] transition-all ease-out duration-300">Bandwidth Management</li>
            <li className="footer-li cursor-pointer hover:text-[#FA8500] transition-all ease-out duration-300">Network Visibility</li>
            <li className="footer-li cursor-pointer hover:text-[#FA8500] transition-all ease-out duration-300">BQN Platform</li>
          </ul>
          <p className="md:pt-24 pt-5 text-[16px] text-[#6b6b6e]">Documentation</p>

        </div>
        <div className="p-3 lg:p-10">
          <p className="pb-5 md:pb-10 font-bold text-[16px] uppercase">General</p>

          <ul className="space-y-3">
            <li className="footer-li cursor-pointer hover:text-[#FA8500] transition-all ease-out duration-300">TCP Optimization</li>
            <li className="footer-li cursor-pointer hover:text-[#FA8500] transition-all ease-out duration-300">Bandwidth Management</li>
            <li className="footer-li cursor-pointer hover:text-[#FA8500] transition-all ease-out duration-300">Network Visibility</li>
            <li className="footer-li cursor-pointer hover:text-[#FA8500] transition-all ease-out duration-300">BQN Platform</li>
          </ul>
          <p className="md:pt-24 pt-5 text-[#6b6b6e] text-[16px]">Privacy and Documentation</p>
        </div>
        <div className="p-3 lg:p-10">
          <p className="pb-5 md:pb-10 font-bold text-[16px] uppercase">Socials</p>
          <ul className="space-y-3 pb-8">
            <li className="footer-li cursor-pointer hover:text-[#FA8500] transition-all ease-out duration-300">TCP Optimization</li>
            <li className="footer-li cursor-pointer hover:text-[#FA8500] transition-all ease-out duration-300">Bandwidth Management</li>
            <li className="footer-li cursor-pointer hover:text-[#FA8500] transition-all ease-out duration-300">Network Visibility</li>
            <li className="footer-li cursor-pointer hover:text-[#FA8500] transition-all ease-out duration-300">BQN Platform</li>
            <li className="footer-li cursor-pointer hover:text-[#FA8500] transition-all ease-out duration-300">Contact</li>
            <li className="footer-li cursor-pointer hover:text-[#FA8500] transition-all ease-out duration-300">Careers</li>
          </ul>
        </div>

      </div>

      <div className="md:w-3/6 mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-4 lg:space-y-0">

        {/* Subscribe Section */}
        <div className="flex flex-col items-center lg:items-start">
          <div className="px-4">
            <h3 className="text-lg font-semibold">Subscribe</h3>
            <p className="text-sm text-gray-500 mb-4">Stay updated on how the future of technology is shaping.</p>
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



        {/* Social Media Icons */}

      
        <div className="flex justify-end space-x-4">
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <FaLinkedin size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <FaYoutube size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <FaTwitter size={24} />
          </a>
        </div>
       

      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-4 text-sm text-gray-500">
        © 2024 North Rays Ltd. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
