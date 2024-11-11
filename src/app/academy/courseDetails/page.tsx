"use client";
import React, {useState} from 'react';
import Image from 'next/image';
import ibmLogo from "../../../../public/ibm-logo.png";
import ResponsiveNavbar from "@/components/AcadmyNavbar/ResponsiveNavbar";
import AcadmyNavbar from "@/components/AcadmyNavbar/AcadmyNavbar";
import { FaStar } from "react-icons/fa";
import { FaListCheck, FaLinkedin } from "react-icons/fa6";
import { TbMessageDots } from "react-icons/tb";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


const CourseDetils = () => {
  return (
    <>
      <section className=''>
        <div>
          <span className="hidden lg:block"><AcadmyNavbar /></span>
          <span className="lg:hidden"><ResponsiveNavbar /></span>
        </div>
        <div className='bg-neutral-100'>
          <div className='2xl:w-[1440px] mx-auto'>
            <div className="py-6 px-2 sm:p-6">
              <Image
                src={ibmLogo}
                alt="IBM logo"
                className="w-24 mb-4"
              />
              <h1 className="text-2xl font-bold mb-4">
                IBM Back-End Development Professional Certificate
              </h1>
              <p className="text-gray-700 mb-4">
                Prepare for a career as a back-end developer. Gain the in-demand skills
                and hands-on experience to get job-ready in less than 6 months.
              </p>
              <div className="flex items-center mb-4">
                <Image
                  src={ibmLogo} // Use a placeholder for instructor images
                  alt="Instructor"
                  className="w-12 h-12 rounded-full"
                />
                <p className="ml-2 text-sm text-gray-700">
                  Instructors: <span className="font-bold">John Rofrano</span> +12 more{' '}
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold ml-2 px-2.5 py-0.5 rounded">
                    Top Instructor
                  </span>
                </p>
              </div>
              <div className='flex gap-4 items-center'>
                <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-700 mb-4">
                  Enroll for Free
                </button>
                <p className="text-xs text-gray-600">Financial aid available</p>
              </div>
              <p className="text-xs text-gray-600 mb-1">
                Starts <span className="font-semibold">Oct 21</span>
              </p>
              <p className="text-sm text-blue-600 mb-4 cursor-pointer">
                Try for Free: Enroll to start your 7-day full access free trial
              </p>
              <p className="text-sm text-gray-700 mt-4">
                <span className="font-bold">19,805</span> already enrolled
              </p>
              <div className="mt-4">
                <Image
                  src={ibmLogo}
                  alt="Coursera Plus"
                  className="w-6 h-6 inline mr-2"
                />
                <span className="text-sm text-blue-600">Included with Coursera Plus</span>
              </div>
            </div>

            {/* Course Details Box */}
            <div className='bg-neutral-100 pb-5 sm:px-5'>
              <div className="bg-white shadow-md sm:rounded-lg p-4 mt-4 lg:flex justify-between items-center">
                {/* Course Info */}
                <div className="text-left lg:text-center mb-4 lg:mb-0">
                  <h2 className="font-bold text-lg">15 course series</h2>
                  <p className="text-gray-600 text-sm">Earn a career credential that demonstrates your expertise</p>
                </div>

                {/* Rating Section */}
                <div className="text-left lg:text-center lg:border-l-2 lg:pl-4 mb-4 lg:mb-0 flex lg:flex-col items-center">
                  <h2 className="font-bold text-lg flex items-center">
                    <span>4.6</span>
                    <span className="text-blue-600 ml-2"><FaStar /></span>
                  </h2>
                  <p className="text-gray-600 text-sm lg:mt-2">(7,080 reviews)</p>
                </div>

                {/* Level Section */}
                <div className="text-left lg:text-center lg:border-l-2 lg:pl-4 mb-4 lg:mb-0">
                  <h2 className="font-bold text-lg">Beginner level</h2>
                  <p className="text-gray-600 text-sm">No prior experience required</p>
                </div>

                {/* Schedule Section */}
                <div className="text-left lg:text-center lg:border-l-2 lg:pl-4 mb-4 lg:mb-0">
                  <h2 className="font-bold text-lg">Flexible schedule</h2>
                  <p className="text-gray-600 text-sm">5 months, 10 hours a week</p>
                  <p className="text-blue-500 text-sm cursor-pointer">Learn at your own pace</p>
                </div>

                {/* Degree Section */}
                <div className="text-left lg:text-center lg:border-l-2 lg:pl-4">
                  <h2 className="font-bold text-lg">Build toward a degree</h2>
                  <p className="text-blue-500 text-sm cursor-pointer">Learn more</p>
                </div>
              </div>
            </div>
          </div>

          {/* {isOpen && (
            <div className="fixed inset-0 bg-black opacity-50 z-10" />
          )} */}
        </div>

        {/* course Details */}
        <div className='max-w-screen-xl mx-auto pt-2 pb-10'>
          <div className="max-w-screen-lg px-4 py-8 text-start">
            {/* Tabs */}
            <div className="flex space-x-6 border-b hidden sm:block">
              <button
                className="text-gray-700 font-medium pb-2 border-b-2 border-transparent hover:border-blue-500"
              >
                About
              </button>
            </div>

            {/* Content Section */}
            <div className="mt-8">
              {/* What you'll learn */}
              <div>
                <h2 className="text-lg font-semibold mb-4">What you will learn</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li>✔️ Use generative AI tools to develop ideas and content, make informed decisions.</li>
                    <li>✔️ Use AI responsibly by identifying potential biases.</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>✔️ Write clear and specific prompts for summarizing, creating taglines, etc.</li>
                    <li>✔️ Develop strategies to stay up-to-date in AI.</li>
                  </ul>
                </div>
              </div>

              {/* Skills You'll Gain */}
              <div className="mt-8">
                <h2 className="text-lg font-semibold mb-4">Skills you will gain</h2>
                <div className="flex flex-wrap gap-2">
                  {['Artificial Intelligence (AI)', 'Prompt Engineering', 'LLMs', 'Generative AI'].map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-sm text-gray-600 py-1 px-3 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Details */}
              <div className="mt-8">
                <h2 className="text-lg font-semibold mb-4">Details to know</h2>
                <div className="flex flex-wrap gap-4">
                  <div className="space-y-2">
                    <span className='text-2xl text-blue-600'><FaLinkedin /></span>
                    {/* <img src="./linkedin-logo.png" alt="LinkedIn" className="w-6 h-6 mr-2" /> */}
                    <p className='text-base font-medium'>Earn a career certificate</p>
                    <p className='text-sm'>Add to your LinkedIn profile</p>
                  </div>
                  <div className="space-y-2">
                    <span className='text-2xl text-[#878788]'><FaListCheck /></span>
                    <p className='text-base font-medium'>Assignments</p>
                    <p className='text-sm'>12 assignments</p>
                  </div>
                  <div className="space-y-2">
                    <span className='text-2xl text-[#878788]'><TbMessageDots /></span>
                    <p className='text-base font-medium'>Taught in English</p>
                    <p className='text-sm text-blue-600'>Urdu language available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='border-2 rounded-md flex'>
            <div className='text-2xl font-semibold w-3/5 p-8'>
              <div className='w-1/2'>
                <h4 className='text-2xl'>Earn a career certificate</h4>
                <p className='text-xs'>Add this credential to your LinkedIn profile, resume, or CV
                  Share it on social media and in your performance review</p>
              </div>
            </div>
            <div className='w-2/5 overflow-hidden'>
              <Image
                src={`/certificate.jpg`}
                className='w-full h-[170px]'
                width={100}
                height={100}
                alt='Certificate'
              />
            </div>
          </div>
        </div>

        <div>
          <MoreCourses />
        </div>
      </section>
    </>
  )
}

const MoreCourses = () => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);


  return (
    <>
      <div className='pb-4'>
        <div className='text-black w-3/5 m-auto'>
          <div>
            <h1 className='text-3xl font-bold mb-7'>More Courses</h1>
          </div>
          <div className='border-2 rounded-lg p-10'>
            <div className='border-b-2 py-1'>
              <div className='flex items-center justify-between'>
                <h1 className='text-xl list font-bold underline cursor-pointer hover:text-blue-600'>If I live outside the US, can I place an order? </h1>
                <span onClick={() => setFirst(!first)} className='flex gap-2 hover:text-blue-600 hover:bg-blue-100 py-7 p-2 cursor-pointer rounded-md'>
                  <span>Course Details</span>
                  <span className='relative top-1'>{first ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                </span>
              </div>
              {first && (
                <div className='py-1'>
                  <p className='text-sm'>If you order original art for sale with us today, it will be delivered to your doorstep in 5 working days. Regarding bulk orders, the delivery time can vary depending on the scenario.</p>
                </div>
              )}
            </div>

            <div className='border-b-2 py-1'>
              <div className='flex items-center justify-between'>
                <h1 className='text-xl list font-bold underline cursor-pointer hover:text-blue-600'>If I live outside the US, can I place an order? </h1>
                <span onClick={() => setSecond(!second)} className='flex gap-2 hover:text-blue-600 hover:bg-blue-100 py-7 p-2 cursor-pointer rounded-md'>
                  <span>Course Details</span>
                  <span className='relative top-1'>{second ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                </span>
              </div>
              {second && (
                <div className='py-4'>
                  <p className='list text-sm'>Miguel Camarena Art Gallery is at 6220 E. Cave Creek Road, Cave Creek, AZ 85331. Feel free to stop by and visit our showroom!</p>
                </div>
              )}
            </div>

            <div className='border-b-2 py-1'>
              <div className='flex items-center justify-between'>
                <h1 className='text-xl list font-bold underline cursor-pointer hover:text-blue-600'>If I live outside the US, can I place an order? </h1>
                <span onClick={() => setThird(!third)} className='flex gap-2 hover:text-blue-600 hover:bg-blue-100 py-7 p-2 cursor-pointer rounded-md'>
                  <span>Course Details</span>
                  <span className='relative top-1'>{third ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                </span>
              </div>



              {third && (
                <div className='py-4'>
                  <p className='list text-sm'>Yes, we do ship outside the US. The customer will bear the shipment cost, which can vary depending on your location. Please contact us for an accurate shipping cost.</p>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default CourseDetils;