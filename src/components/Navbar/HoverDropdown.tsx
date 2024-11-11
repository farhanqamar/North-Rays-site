import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { AiFillDatabase } from "react-icons/ai";
import { FaPhone } from "react-icons/fa6";
// import { BsArrowUpRight } from "react-icons/bs";
// import Image from 'next/image';
// import dropDownImg from "../../../public/images/Services.jpg"
// import eyeimge from "../../public/images/Services.jpg";

interface imgBoxHeadingProps {
  imgBoxHeading: string,
  route?: string | undefined,
}

const NavbarDropdown = ({ imgBoxHeading, route }: imgBoxHeadingProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: Event) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div className="relative inline-block text-left">
      <Link href={`${route}`}>
        <button
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="inline-flex justify-center w-full px-2 lg:px-4 py-2 text-lg text-white hover:text-[#FA8500]"
        >
          {imgBoxHeading}
        </button>
      </Link>


      {isOpen && (
        <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
          className="fixed right-0 h-[50vh] w-full mt-2 origin-top-right bg-[#FFFFFF] border border-gray-200 shadow-lg z-20">
          {/* imgBoxHeading, image, imgBoxPara */}

          <div className='w-full xl:w-[1450px] m-auto'>
          <div className="flex gap-10 pt-10">

            <div className='p-4 space-y-8'>
              <div>
                <h3 className="font-bold text-base text-gray-700 relative group">Web Hosting</h3>
                <ul className="mt-2 space-y-2">
                  <li className="text-sm transition-all ease-out duration-300 text-orange-500 hover:text-orange-300 cursor-pointer relative group">Digital Consulting & Strategy</li>
                  <li className="text-sm transition-all ease-out duration-300 text-orange-500 hover:text-orange-300 cursor-pointer relative group">Digital Commerce</li>
                  <li className="text-sm transition-all ease-out duration-300 text-orange-500 hover:text-orange-300 cursor-pointer relative group">Business Applications</li>
                </ul>
              </div>
             
            </div>
            <div className='p-4 space-y-4'>
                <h3 className="font-bold text-base text-gray-700 ">Security</h3>
                <ul className="mt-2 space-y-2">
                  <li className="text-sm transition-all ease-out duration-300 hover:text-orange-300 text-orange-500 cursor-pointer">Digital Consulting & Strategy</li>
                  <li className="text-sm transition-all ease-out duration-300 hover:text-orange-300 text-orange-500 cursor-pointer">Digital Commerce</li>
                  <li className="text-sm transition-all ease-out duration-300 hover:text-orange-300 text-orange-500 cursor-pointer">Business Applications</li>
                </ul>
              </div>

            <div className='p-4'>
              <h3 className="font-bold text-base text-gray-700">Hosting Applications</h3>
              <ul className="mt-2 space-y-2">
                <li className="text-sm transition-all ease-out duration-300 hover:text-orange-300 text-orange-500 cursor-pointer">Data Modernization</li>
                <li className="text-sm transition-all ease-out duration-300 hover:text-orange-300 text-orange-500 cursor-pointer">Advanced Analytics</li>
                <li className="text-sm transition-all ease-out duration-300 hover:text-orange-300 text-orange-500 cursor-pointer">Generative AI</li>
                <li className="text-sm transition-all ease-out duration-300 hover:text-orange-300 text-orange-500 cursor-pointer">Data Modernization</li>
                <li className="text-sm transition-all ease-out duration-300 hover:text-orange-300 text-orange-500 cursor-pointer">Advanced Analytics</li>
                <li className="text-sm transition-all ease-out duration-300 hover:text-orange-300 text-orange-500 cursor-pointer">Generative AI</li>
              </ul>
            </div>

            <div className='p-4'>
              <h3 className="font-bold text-base text-gray-700">Domains</h3>
              <ul className="mt-2 space-y-2">
                <li className="text-sm transition-all ease-out duration-300 hover:text-orange-300 text-orange-500 cursor-pointer">Data Modernization</li>
                <li className="text-sm transition-all ease-out duration-300 hover:text-orange-300 text-orange-500 cursor-pointer">Advanced Analytics</li>
                <li className="text-sm transition-all ease-out duration-300 hover:text-orange-300 text-orange-500 cursor-pointer">Generative AI</li>
                <li>One tiered program to build and <br /> promote your custom solution.</li>
              </ul>
            </div>

            <div className='p-4'>
              <h3 className="font-bold text-base text-gray-700">Data & AI</h3>
              <ul className="mt-2 space-y-2">
                <li className="text-sm transition-all ease-out duration-300 hover:text-orange-300 text-orange-500 cursor-pointer">Data Modernization</li>
                <li className="text-sm transition-all ease-out duration-300 hover:text-orange-300 text-orange-500 cursor-pointer">Advanced Analytics</li>
                <li className="text-sm transition-all ease-out duration-300 hover:text-orange-300 text-orange-500 cursor-pointer">Generative AI</li>
              </ul>
            </div>
          </div>

          <div className='pt-5 '>
            <hr />
            <div className='flex justify-between py-5 px-5'>
              <div className='flex gap-2'>
                <span className='relative top-[6px] text-orange-500 text-lg'><AiFillDatabase /></span>
                <h4 className='text-lg font-medium'>Hosting Services</h4>
              </div>
              <div className='flex gap-2'>
              <span className='relative top-[6px] text-orange-500 text-lg'><FaPhone /></span>
              <h4 className='text-lg font-medium'>Free Consult</h4>
              </div>
            </div>
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarDropdown;
