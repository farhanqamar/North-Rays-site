import React from "react";
// import bgvideo from "../../../../public/bg-video.mp4";

const Hero = () => {
  return (
    <>
      <div className="relative w-full h-[100vh] ">
      <div>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/bg-video.mp4" // or use an external URL
        autoPlay
        loop
        muted
        playsInline
      />
      </div>
        <div className="absolute top-0 left-0 bg-black opacity-65 z-10"></div>

        <div className="h-screen absolute top-0 w-full z-20">
          <div></div>
          <div>
            <div className="flex items-end px-3 sm:pl-10 lg:pl-48 h-[92.5vh]">
              <div className="md:w-[720px] text-white">
                <h1 className="font-bold">
                  Empowering Businesses in the Digital Age
                </h1>
                <div className="md:leading-10 py-10 font-light">
                  <p className="px-2 text-sm">
                    A dynamic technology solutions and marketing firm dedicated
                    to helping businesses thrive in the digital age.
                  </p>
                  <button className="bg-white text-black hover:bg-[#023047] hover:text-white 
                   text-[18px] font-medium rounded-[40px] px-4 py-[2px] my-10 transition-colors duration-300 ease-in-out">
                    Get In Touch
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
