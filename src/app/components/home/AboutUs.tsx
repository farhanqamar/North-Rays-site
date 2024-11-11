"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import aboutBgImage from "../../../../public/s-shape-opacity.png";
import { aboutdetail } from "./ServicesDetail";

const AboutUs = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set isMobile based on window width
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);

      const handleScroll = () => setScrollPosition(window.scrollY);
      const handleResize = () => setIsMobile(window.innerWidth < 768);

      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const containerHeight = 400;
  const translateY = Math.max(0, Math.min(scrollPosition / 8, containerHeight));
  const gradientOpacity = Math.min(scrollPosition / 200, 1);

  return (
    <section>
      <div className="flex flex-col md:flex-row lg:py-12 pl-2 lg:px-20">
        <div className="relative w-full flex justify-center border-b lg:border-none py-12 lg:py-0 px-4 lg:px-6">
          <Image
            src={aboutBgImage}
            alt="Image"
            width={250}
            height={250}
            className="absolute md:w-[250px] w-[150px] top-[40px] z-0 xl:left-[20%] md:transition-transform md:duration-50"
            style={{
              transform: !isMobile ? `translateY(${translateY}px)` : "none",
              transition: "transform 0.3s ease",
            }}
          />
          <div className="relative md:h-[400px] flex items-start ">
            <div>
              <p
                className="transition-transform duration-50 text-sm text-[#5b5f6e]"
                style={{ transform: !isMobile ? `translateY(${translateY}px)` : "none" }}
              >
                About Us
              </p>

              <h2
                className="text-lg h-full flex items-start justify-center md:text-xl lg:text-2xl xl:text-6xl lg:w-[500px] xl:w-[800px] bg-clip-text text-transparent transition-transform duration-300"
                style={{
                  backgroundImage: `linear-gradient(90deg, rgba(255,0,150,${gradientOpacity}) 0%, rgba(0,204,255,${gradientOpacity}) 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: gradientOpacity === 0 ? "black" : "transparent",
                  transform: !isMobile ? `translateY(${translateY}px)` : "none",
                }}
              >
                Empowering our global clientele to embrace modern technology, rethink processes, and elevate experiences
              </h2>
            </div>
          </div>
        </div>

        <div className={`border-s ${aboutdetail.length > 3 ? "overflow-y-auto h-[600px] scrollbar-hide" : ""}`}>
          {aboutdetail.map((item, index) => (
            <div
              key={index}
              className={`p-2 md:p-4 xl:p-8 space-y-6 ${index === 0 ? "border-none" : "border-t"}`}
              data-aos="fade-up"
            >
              <h3 className="text-2xl font-normal text-black">{item.h3}</h3>
              <p className="text-base xl:text-xl text-black">{item.p}</p>
              <Link href={""} className="flex items-center">
                <div className="group inline-block">
                  <button className="text-[#F68E60] font-normal text-lg">{item.button}</button>
                  <hr className="h-[3px] w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 bg-[#f68e60]" />
                </div>
                <IoIosArrowRoundForward className="text-[#f68e60] text-2xl mx-1 " />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
