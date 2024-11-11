import React from "react";
import Image from "next/image";
import cloudera from "../../../../public/Cloudera.webp";
import formpipe from "../../../../public/formpipe.webp";
import informat from "../../../../public/Informat.webp";
import salesforce from "../../../../public/salesforce.png";
import temonos from "../../../../public/temenos.webp";
import ibm from "../../../../public/ibm.webp";
import msoft from "../../../../public/msoft.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Technology = () => {
  const images = [
    { src: cloudera, alt: "aws" },
    { src: formpipe, alt: "pipe" },
    { src: informat, alt: "informat" },
    { src: salesforce, alt: "salesforce" },
    { src: temonos, alt: "temonos" },
    { src: ibm, alt: "microsoft" },
    { src: msoft, alt: "microsoft" },
  ];
  const settings = {
    // dots: true,
    infinite: true, // Infinite scrolling
    speed: 1000, // Transition speed (1 second)
    slidesToShow: 4, // Show 4 images at a time
    slidesToScroll: 1, // Scroll one image at a time
    autoplay: true, // Auto-slide feature
    autoplaySpeed: 3000, // 3 seconds between each slide
    pauseOnHover: true, // Pause sliding when hovered
    responsive: [
      {
        breakpoint: 1024, // Screens below 1024px
        settings: {
          slidesToShow: 3, // Show 3 images at a time
        },
      },
      {
        breakpoint: 768, // Screens below 768px
        settings: {
          slidesToShow: 2, // Show 2 images at a time
        },
      },
    ],
  };
  return (
    <div className="xl:w-5/6 px-5 mx-auto my-20">
      <div className="xl:flex justify-center">
        <div className="xl:w-2/4 lg:px-10 w-full md:py-10 text-center">
          <h3 className="font-bold">
            Translating technology into a positive impact
          </h3>
          <p className="text-[17px] py-6">
            Our approach allows us to deliver exceptional experiences that drive
            growth and success for all stakeholders. Let’s rise to new heights
            with the power of digital transformation.
          </p>
          <div className="text-[#FA8500] text-[18px]"> Learn More</div>
        </div>
        <div className="grid grid-col-1 sm:grid-cols-2 gap-5 lg:grid-cols-2 justify-start xl:w-3/6 md:pt-10 xl:border-l border-slate-400">
          <div className="md:pb-20 sm:text-center">
            <h2 className="font-medium">47+</h2>
            <p className="text-[14px]">Years of continual excellence</p>
          </div>
          <div className="md:pb-20 sm:text-center">
            <h2 className="font-medium">7000+</h2>
            <p className="text-[14px]">Change makers driving revolution</p>
          </div>
          <div className="md:pb-20 sm:text-center">
            <h2 className="font-medium">16+</h2>
            <p className="text-[14px]">
              Countries with our presence and clientele
            </p>
          </div>
          <div className="md:pb-20 sm:text-center">
            <h2 className="font-medium">168+</h2>
            <p className="text-[14px]">Active clients across the globe</p>
          </div>
        </div>
      </div>
      <h5 className="text-center text-xl font-normal pt-10 sm:py-10">
        We rethink business growth for you through our collective experience
        with strategic partner ecosystem.
      </h5>
      <div className="my-20">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}
            className="px-5">
              <Image
                className="object-cover"
                src={image.src}
                alt={image.alt}
                width={200}
                height={200}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default Technology;