"use client";
import React from "react";
import Image from "next/image";
import fac from "../../../public/Fac.jpg";
import office from "../../../public/office.webp";
import english from "../../../public/sEnglish.webp";
import frontend from "../../../public/frontend.webp";
import seo from "../../../public/seo.webp";
import design from "../../../public/gdesign.webp";
import { IoCloseCircleOutline } from "react-icons/io5";

import { useState } from "react";

const Academy = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openIndex1, setOpenIndex1] = useState<number | null>(null);

  const isOpen1 = (index: number) => openIndex === index;
  const isOpen2 = (index: number) => openIndex1 === index;

  const arrImage = [
    {
      img: office,
      heading: "Basic Account & Office",
      para: "Microsoft Office is a suite of applications designed to help with productivity and completing common tasks on a computer. You can create and edit documents containing text and images, work with data in spreadsheets and databases, and create presentations and posters. View More",
      btn: "Enroll Now",
      h2:"Microsoft Office is a productivity suite for creating and editing documents, managing data and designing presentations."
      
    },
    {
      img: design,
      heading: "Graphic Design",
      para: "A design is a plan or specification for the construction of an object or system or for the implementation of an activity or process or the result of that plan or specification in the form of a prototype, product, or process. The verb to design expresses the process of developing a design.",
      btn: "Enroll Now",
    },
    {
      img: english,
      heading: "Spoken English",
      para: "Learning English by yourself can be a challenge but it is possible. There are ways you can improve your reading, writing, listening and speaking skills ,even though there is no-one physically around you to help you practice.",
      btn: "Enroll Now",
    },
    {
      img: frontend,
      heading: "Front End Web Development",
      para: "The front end stack is made up of many different languages and libraries. While these vary from application to application, there are only a few generic languages understood by all web browsers. These three main front-end coding languages are HTML, CSS and JavaScript",
      btn: "Enroll Now",
    },
  ];
  const arrImage1 = [
    {
      img: seo,
      heading: "Basic Account & Office",
      para: "Microsoft Office is a suite of applications designed to help with productivity and completing common tasks on a computer. You can create and edit documents containing text and images, work with data in spreadsheets and databases, and create presentations and posters. View More",
      btn: "Enroll Now",
    },
    {
      img: design,
      heading: "Graphic Design",
      para: "A design is a plan or specification for the construction of an object or system or for the implementation of an activity or process or the result of that plan or specification in the form of a prototype, product, or process. The verb to design expresses the process of developing a design.",
      btn: "Enroll Now",
    },
    {
      img: english,
      heading: "Spoken English",
      para: "Learning English by yourself can be a challenge but it is possible. There are ways you can improve your reading, writing, listening and speaking skills — even though there is no-one physically around you to help you practice.",
      btn: "Enroll Now",
    },
    {
      img: frontend,
      heading: "Front End Web Development",
      para: "The front end stack is made up of many different languages and libraries. While these vary from application to application, there are only a few generic languages understood by all web browsers. These three main front-end coding languages are HTML, CSS and JavaScript",
      btn: "Enroll Now",
    },
  ];

  return (
    <div>
      <Image
        src={fac}
        alt="elearn"
        className="w-screen h-[300px] object-cover"
      />

      <div className="w-5/6 flex gap-8 py-10 justify-center m-auto">
        {arrImage.map((course, index) => (
          <div key={index} className="border rounded-lg shadow-lg">
            <div>
            <Image
              src={course.img}
              alt={course.heading}
              className="w-auto object-cover"
              onClick={() => setOpenIndex(isOpen1(index) ? null : index)}
            />
            <div>
            </div>
            </div>
            {isOpen1(index) && (
              <div className="flex">
                <div className="absolute flex left-[16.5%] gap-6 top-auto w-4/6 py-4">
                  <div className="w-3/6 py-10">
                  <div>
                  <Image
                      src={course.img}
                      alt={course.heading}
                      className=" object-cover mb-4"
                    />
                    <strong>{}</strong>
                  </div>
                  </div>
                  <div className="flex flex-col items-end gap-12 justify-between w-3/6 my-auto">
                    <span className=" text-black  text-3xl cursor-pointer">
                      <IoCloseCircleOutline
                        onClick={() =>
                          setOpenIndex(isOpen1(index) ? null : index)
                        }
                      />
                    </span>
                    <div>
                      
                      <h3 className="text-3xl font-semibold mb-2">
                        {course.heading}
                      </h3>
                      <p className="mb-4 text-[18px] leading-8 text-[#6d7882]">
                        {course.para}
                      </p>
                      <button className="bg-[#FA8500] text-[18px] text-white rounded-[40px] px-6 py-2 my-10 hover:bg-black hover:text-white">
                        {course.btn}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
        ))}
      </div>

      <div
        className={`w-5/6 flex  m-auto gap-8 justify-center transition-all duration-300 ${
          openIndex !== null ? "mt-[25%]" : ""
        }`}
      >
        {arrImage1.map((course, index) => (
          <div key={index} className=" border rounded-lg shadow-lg">
            <Image
              src={course.img}
              alt={course.heading}
              className="w-auto object-cover"
              onClick={() => setOpenIndex1(isOpen2(index) ? null : index)}
            />
            {isOpen2(index) && (
              <div className="flex">
                <div className="absolute z-10 top-auto flex left-[16.5%] gap-6 w-4/6 py-4">
                  <div className="w-3/6 py-10">
                    <Image
                      src={course.img}
                      alt={course.heading}
                      className=" object-cover mb-4"
                    />
                  </div>
                  <div className="flex flex-col items-end gap-12 justify-between w-3/6 my-auto">
                    <span className=" text-black  text-3xl cursor-pointer">
                      <IoCloseCircleOutline
                        onClick={() =>
                          setOpenIndex(isOpen1(index) ? null : index)
                        }
                      />
                    </span>
                    <div>
                      
                      <h3 className="text-3xl font-semibold mb-2">
                        {course.heading}
                      </h3>
                      <p className="mb-4 text-[18px] leading-8 text-[#6d7882]">
                        {course.para}
                      </p>
                      <button className="bg-[#FA8500] text-[18px] text-white rounded-[40px] px-6 py-2 my-10 hover:bg-black hover:text-white">
                        {course.btn}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Academy;
