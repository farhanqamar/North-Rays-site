"use client"
import React from "react";
import { useState } from "react";
import { videoData } from "./Data";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";


const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videoData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + videoData.length) % videoData.length
    );
  };

  const { videoUrl, title, description } = videoData[currentIndex];
  return (
    <section>
      <div>
        <div className="bg-[#002761] w-full py-12">
            <div className="py-12 text-white w-4/5 m-auto text-lg">
                <h3>Hear why students enjoy learning on Coursera</h3>
            </div>
          <div className="flex justify-center items-center">
            <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-full lg:w-2/3">
              <div className="w-full lg:w-1/2">
                <video
                  src={videoUrl}
                  controls
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 w-full lg:w-1/2 flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-2">{title}</h2>
                <p className="text-gray-700 mb-4">{description}</p>
                
              </div>
            </div>
          </div>
          <div className="flex space-x-4 justify-center py-4">
                  <button
                    onClick={handlePrev}
                    className="bg-white text-blue-500 px-4 py-4 border border-blue-500 rounded transition"
                  >
                  <MdOutlineArrowBackIos />
                  </button>
                  <button
                    onClick={handleNext}
                    className="bg-white text-blue-500 px-4 py-4 border border-blue-500 rounded transition"
                  >
                    <MdOutlineArrowForwardIos />
                  </button>
                </div>
            
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
