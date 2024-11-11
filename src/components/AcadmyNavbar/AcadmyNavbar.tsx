"use client";
import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import {dataScienceDegreeItems, businessDegreeItems, webDevelopment, softwareEngineer } from "./Data";
import { FiSearch } from "react-icons/fi";
import Image, { StaticImageData } from 'next/image';



interface array1Props {
  title?: string;
  logo: StaticImageData | string;
  university: string;
  degree: string;
}

interface array2Props {
  title?: string;
  logo: StaticImageData | string;
  university: string;
  degree: string;
}

const AcadmyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // New function to handle when the mouse leaves both menus
  const handleMouseLeave = () => {
    setIsOpen(false);
    setHoveredItem(null);
  };

  return (
    <nav className="bg-[#F2F5FA] shadow-md border-b-2 fixed top-16 w-full p-4">
      <div className='flex justify-between items-center relative 2xl:w-[1440px] m-auto'>
        {/* Left - Logo */}
        <div className="flex items-center space-x-4">
          <a className="text-2xl font-bold text-blue-600">coursera</a>
          <div className='relative'>
            <button
              className="border border-blue-600 rounded px-4 py-2 text-blue-600 hover:bg-blue-100 flex"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <span>Explore</span>
              <span className='relative top-[6px] left-2'><IoIosArrowDown /></span>
            </button>
            {/* First Menu */}
            {isOpen && (
              <aside
                className="w-72 bg-gray-50 py-6 absolute top-[40px] left-[-100px] z-30"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => {
                  if (hoveredItem !== null) {
                    setIsOpen(true)
                  }
                  else {
                    setIsOpen(false)
                  }
                }}
              >
                {/* Goals Section */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mb-4 py-1 px-4">Goals</h2>
                  <ul className="space-y-2">
                    <li
                      className="flex justify-between items-center hover:bg-white px-4"
                    >
                      <a href="#" className="text-gray-600 hover:text-gray-900">Take a free course</a>
                    </li>
                    <li
                      className="flex justify-between items-center hover:bg-white px-4"
                      onMouseEnter={() => setHoveredItem("earn-degree")}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <a href="#" className="text-gray-600 hover:text-gray-900">Earn a Degree</a>
                      <span className="text-gray-400"><IoIosArrowForward /></span>
                    </li>
                    {/* Other menu items */}
                  </ul>
                </div>

                {/* Subjects Section */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mb-4 px-4">Subjects</h2>
                  <ul className="space-y-2">
                    <li
                      className="flex justify-between items-center hover:bg-white px-4"
                      onMouseEnter={() => setHoveredItem("data-science")}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <a href="#" className="text-gray-600 hover:text-gray-900">Data Science</a>
                      <span className="text-gray-400"><IoIosArrowForward /></span>
                    </li>
                    <li
                      className="flex justify-between items-center hover:bg-white px-4"
                      onMouseEnter={() => setHoveredItem("business")}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <a href="#" className="text-gray-600 hover:text-gray-900">Business</a>
                      <span className="text-gray-400"><IoIosArrowForward /></span>
                    </li>
                    {/* Other subjects */}
                  </ul>
                </div>
                <div className='text-center'>
                  <button className="border border-blue-600 text-blue-600 px-2 py-2 rounded hover:bg-blue-50 m-auto">
                    Browse all subjects
                  </button>
                </div>
              </aside>
            )}
          </div>
        </div>

        {/* Sub-Menu (Degrees Section) */}
        <div>
          {hoveredItem && (
            <div
              className='absolute top-[60px] left-[21%] h-[91vh] overflow-y-auto custom-scrollbar z-30'
              onMouseEnter={() => setHoveredItem(hoveredItem)}
              onMouseLeave={handleMouseLeave}
            >
              <DegreesSection hoveredItem={hoveredItem} />
            </div>
          )}
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
              
             <span className='text-blue-600'><FiSearch /></span>

            </span>
          </div>
        </div>

         {/* Right - Links */}
         <div className="flex items-center space-x-6 text-gray-600">
          <a href="/degrees" className="hover:text-blue-600 text-sm">Online Degrees</a>
          <a href="/careers" className="hover:text-blue-600 text-sm">Careers</a>
          <a href="/login" className="text-blue-600 text-sm">Log In</a>
          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 text-sm font-semibold">
            Join for Free
          </button>
        </div>

      </div>
    </nav>
  );
};

interface DegreesSectionProps {
  hoveredItem: string | undefined;
}

const DegreesSection = ({ hoveredItem }: DegreesSectionProps) => {
  const getDataForHoveredItem = () => {
    switch (hoveredItem) {
      case "earn-degree":
        return <Data heading="Earn a Degree" subLine="Advance your career with a degree." array1={dataScienceDegreeItems}  array2={businessDegreeItems}/>;
      case "data-science":
        return <Data heading="Data Science" subLine="Explore data science programs."      array1={webDevelopment}  array2={softwareEngineer}/>;
      case "business":
        return <Data heading="Business" subLine="Explore business programs."              array1={dataScienceDegreeItems}  array2={businessDegreeItems}/>;
      default:
        return null;
    }
  };

  return (
    <div className="mx-auto p-6 bg-[#f1f1f1] z-20 min-w-96">
      {getDataForHoveredItem()}
    </div>
  );
};

interface DegreeItemProps {
  logo: StaticImageData | string;
  university: string;
  degree: string;
}

const DegreeItem = ({ logo, university, degree }: DegreeItemProps) => (
  <div className="flex items-start space-x-3 mb-4">
    <Image src={logo} alt="Logo" className="w-10 h-10" />
    <div>
      <p className="font-medium text-gray-900">{university}</p>
      <p className="text-gray-600">{degree}</p>
    </div>
  </div>
);

interface DataProps {
  heading: string;
  subLine: string;
  array1: array1Props[];
  array2: array2Props[];
  array3?: string;
  array4?: string;
}

const Data = ({ heading, subLine, array1, array2}: DataProps) => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-2">{heading}</h1>
      <p className="text-gray-600 mb-8">{subLine}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Data Science Section */}
        <div>

          {
            array1.map((item) => (
              <>
                <h2 className="text-lg font-bold mb-4">{item.title}</h2>
                <DegreeItem
                  logo={item.logo}
                  university={item.university}
                  degree={item.degree}
                />
              </>
            ))
          }
          <a href="#" className="text-blue-600 hover:underline">View all Data Science degrees</a>
        </div>

        {/* Business Section */}
        <div>

          {
            array2.map((item) => (
              <>
                <h2 className="text-lg font-bold mb-4">{item.title}</h2>
                <DegreeItem
                  logo={item.logo}
                  university={item.university}
                  degree={item.degree}
                />
              </>
            ))
          }
          <a href="#" className="text-blue-600 hover:underline">View all Business degrees</a>
        </div>
      </div>
    </>
  );
};


export default AcadmyNavbar;
