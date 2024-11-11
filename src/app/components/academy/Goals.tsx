import React from "react";
import Image from "next/image";
import Learns from "../../../../public/learns.jpg";
const Goals = () => {
  return (
    <>
      <div className="md:w-4/6 mt-[100px] mx-auto px-5">
        <div className="md:flex justify-between">
          <div>
            <Image src={Learns} width={500} height={500} alt="goals" />
          </div>
          <div className="md:w-3/6 my-auto">
            <h3 className="text-sm">
              Take the next step toward your personal and professional goals
              with Coursera.
            </h3>
            <p>
              Join now to receive personalized recommendations from the full
              Coursera catalog.
            </p>
            <button className="bg-[#0056D2] text-white py-3 px-5 my-10 text-[18px]">
              Join For Free
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Goals;
