import React from "react";
import Image from "next/image";
import std from "../../../../public/student.png";
import img from "../../../../public/micro.webp";
import MarqueTag from "./MarqueTag";


const HeroAcademy = () => {


  return (
    <>
      <div className="flex lg:w-4/6 mx-auto justify-around items-center pt-40">
        <div className="md:w-3/6 w-full px-5">
          <h2>Learn Without Limits</h2>
          <p className="md:text-[18px] text-sm text-justify">
            Start, switch, or advance your career with more than 7,000 courses,
            Professional Certificates, and degrees from world-class universities
            and companies.
          </p>
          <div className="py-10">
            <button className="bg-[#0056D2] text-white py-3 px-5 md:text-[18px]">
              Join For Free
            </button>
            <button className="bg-white border border-[#0056D2] text-[#0056D2] py-3 px-5 md:text-[18px]">
              Try Coursera For Business
            </button>
          </div>
        </div>
        <div className="md:block hidden">
          <Image src={std} alt="img" className="w-[20vw] object-cover" />
        </div>
      </div>
     <div className="py-6 lg:block hidden">     <MarqueTag/>
     </div>
      <div className="lg:w-4/6 mx-auto md:mt-20 px-5">
        <div>
          <div className="flex text-[32px] py-10">
            <h3>Launch a new career in as little as 6 months</h3>
          </div>
          <div className="py-2 md:block hidden">
            <ul className="text-black flex justify-between border py-2 px-10 border-b-blue-300">
              <li>Project Manager</li>
              <li>Data Analyst</li>
              <li>Digital Marketer</li>
              <li>IT Support Specialist</li>
              <li>Business Anaylist</li>
              <li>Cyber Security</li>
              <li>Frontend Development</li>
              <li>UX Designer</li>
            </ul>
          </div>
        </div>
        <div className="md:flex border border-gray-400 px-3 md:p-14">
          <div className="md:pr-5 md:w-3/6">
            <h2 className="text-[24px] py-5">Project Maneger</h2>
            <p className="text-[14px]">
              Oversee the planning and execution of projects to ensure they are
              successful
            </p>
            <p className="text-[18px] font-bold">Median Salary</p>
            <button className="bg-[#0056D2] text-white my-10 w-full text-left px-2 py-2 md:px-5 text-[16px]">
              Project Manager
            </button>
            <p className="text-[14px]">Job openings: 336,402**</p>
            <p className="text-[14px]">Projected 10 year growth: +11.1%***</p>
            <p className="text-[14px]">
              Earning my Google Project Management: Professional Certificate is
              one of the biggest accomplishments I have made in my education, and
              it was a key stepping stone to my new career. Adrienne
            </p>
          </div>
          <div className="md:w-4/6">
            <h4 className="py-5">Recommended Professional Certificates</h4>
            <div className="md:flex md:space-x-4 justify-between">
              <div className="p-4 box-border rounded-lg shadow-md w-full md:w-1/2 ">
                <Image
                  className="w-full h-auto"
                  src={img}
                  alt="microsoft"
                  width={300}
                  height={300}
                />
                <span>Microsoft</span>
                <p className="text-[14px] font-bold">
                  Microsoft Project Management
                </p>
                <p className="text-[14px]">
                  Skills you will gain: Risk management, Budgeting, Stakeholder
                  management, Planning.
                </p>
                <p className="text-[14px]">
                  Beginner Professional Certificate
                </p>
              </div>

              <div className="p-4 box-border rounded-lg shadow-md w-full md:w-1/2 ">
                <Image
                  className="w-full h-auto"
                  src={img}
                  alt="microsoft"
                  width={300}
                  height={300}
                />
                <span>Microsoft</span>
                <p className="text-[14px] font-bold">
                  Microsoft Project Management
                </p>
                <p className="text-[14px]">
                  Skills you will gain: Risk management, Budgeting, Stakeholder
                  management, Planning.
                </p>
                <p className="text-[14px]">
                  Beginner Professional Certificate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroAcademy;
