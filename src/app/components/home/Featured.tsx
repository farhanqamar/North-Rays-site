import React from "react";
import { FaUsersGear } from "react-icons/fa6";
import { GrSecure } from "react-icons/gr";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { LuWallet } from "react-icons/lu";

// Define the type for each featured item
interface FeaturedItem {
  id: number;
  icon: JSX.Element; // The icon will be a JSX element
  headline: string;
  details: string;
}

// Data for the featured section
const featuredData: FeaturedItem[] = [
  {
    id: 1,
    icon: <LuWallet className="text-4xl text-white" />,
    headline: "Transforming Businesses with Innovation",
    details: "Our AI-powered solutions and VR/AR projects have revolutionized multiple industries, driving efficiency and customer satisfaction.",
  },
  {
    id: 2,
    icon: <GrSecure className="text-4xl text-white" />,
    headline: "Pioneering the Future with AI, VR, and AR",
    details: "We adopt the latest technologies to create cutting-edge solutions, providing clients with a competitive edge in the digital age.",
  },
  {
    id: 3,
    icon: <AiOutlineSecurityScan className="text-4xl text-white" />,
    headline: "Recognized for Excellence",
    details: "Awarded the 'Top Emerging AR/VR Developer' and 'Innovative Solutions in AI' for our ground-breaking projects.",
  },
  {
    id: 4,
    icon: <FaUsersGear className="text-4xl text-white" />,
    headline: "Dedicated Team of Experts",
    details: "Our experienced team of developers and marketers work closely with clients to deliver tailored solutions for each business challenge.",
  },
];

const FeaturedCards = () => {
  return (
    <div className="px-4 sm:px-8 md:px-10 lg:px-20 py-48 bg-[#4a5052]">

      <div className="flex flex-col xl:flex-row bg-[#fefeff] px-3 lg:px-6 py-6 rounded-lg">

        {/* contant */}
        <div className="w-full xl:w-1/2 text-black py-10">
          <div className="lg:w-[600px] xl:w-[550px] text-justify m-auto">
            <p className="text-lg">Our Key Benefits</p>

            <h4 className="font-light">
              Empowering Businesses in the Digital Age
            </h4>
            <div className="leading-8 py-10 font-light">
              <p className="px-2">
                A dynamic technology solutions and marketing firm dedicated to
                helping businesses thrive in the digital age.
              </p>
              <button className="bg-black text-white hover:bg-[#222324] hover:text-white transition-colors duration-300 ease-in-out text-[18px] font-semibold hover:bg-gradient-to-r from-[#70797e] to-[#F8DFD4] rounded-[40px] px-6 py-2 mt-10">
                Start for free
              </button>
            </div>
          </div>
        </div>


        <div className="flex flex-wrap justify-end gap-4 w-full xl:w-1/2">
          {featuredData.map((item) => (
            <div
              // data-aos="zoom-in-up"
              key={item.id}
              className="flex flex-col items-center justify-center text-white hover:text-white  p-2 py-2 px-6 bg-opacity-90 shadow-lg rounded-lg bg-gradient-to-r from-[#828d99] to-[#d1cecc] transition-transform duration-300 hover:scale-105 cursor-pointer md:w-[45%] lg:w-[23%] xl:w-[45%] text-start"
            >
              {/* Icon */}
              <div className="text-start mb-4">{item.icon}</div>

              {/* Headline */}
              <h2 className="text-start text-xl font-semibold">
                {item.headline}
              </h2>

              {/* Details */}
              <p className="text-base mb-4">{item.details}</p>

              {/* Learn more with hover effect */}
              {/* <div className="flex items-center justify-center mt-auto group">
        <a
          href="#"
          className="text-red-600 flex items-center group-hover:text-orange-500 transition-colors duration-300"
        >
          Learn more
          <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div> */}
            </div>
          ))}
        </div>


      </div>
    </div>
  );
};

export default FeaturedCards;