import React from "react";
import Link from "next/link";

interface bannerPropsTypes {
  span : string,
  p : string,
  btn : string,
  href : string
}

const Banner: React.FC<bannerPropsTypes> = ({span, p, btn, href}) => {
  return (
    <div className="overflow-hidden">
    <div>
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 z-[-1] w-full h-full object-cover bg-center bg-no-repeat filter blur-sm"
      >
        <source src="/bgvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="flex items-center justify-center min-h-screen">
        <div className="lg:w-4/5 text-center text-[#ffff]">
          <div className="mx-auto lg:w-4/6">
            <span className="text-2xl md:text-3xl lg:text-5xl font-bold">
              {span}
            </span>
            <div className="text-2xl py-10 w-3/5 mx-auto">
             {p && <p className="text-center">
               {p}
              </p>}
              <Link href={href}><button className="border text-[18px] bg-white rounded-[40px] px-6 py-2 my-10 text-[#F68E60] border-[#F68E60] hover:text-white hover:bg-[#F68E60]">
               {btn}
              </button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Banner;
