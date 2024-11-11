import React from "react";
import recbg from "../../../public/recbg.svg";
import Image from "next/image";
import ai from "../../../public/AI.png";
import Navbar from "@/components/Navbar/Navbar";
const page = () => {
  const data = [
    {
      title: "AI-Driven Law GPT",
      description:
        "Law Chat GPT employs advanced ML and NLP technologies to efficiently generate precise and natural-sounding legal text, providing valuable assistance to legal professionals amid the growing complexity of legal matters.",
      image: ai, // Image path
      alt: "AI-driven law assistant",
      btn: "View Case Study",
    },
    {
      title: "AI-Driven Law GPT",
      description:
        "Law Chat GPT employs advanced ML and NLP technologies to efficiently generate precise and natural-sounding legal text, providing valuable assistance to legal professionals amid the growing complexity of legal matters.",
      image: ai,
      alt: "AI-driven law assistant",
      btn: "View Case Study",
    },
    {
      title: "AI-Driven Law GPT",
      description:
        "Law Chat GPT employs advanced ML and NLP technologies to efficiently generate precise and natural-sounding legal text, providing valuable assistance to legal professionals amid the growing complexity of legal matters.",
      image: ai,
      alt: "AI-driven law assistant",
      btn: "View Case Study",
    },
    {
      title: "AI-Driven Law GPT",
      description:
        "Law Chat GPT employs advanced ML and NLP technologies to efficiently generate precise and natural-sounding legal text, providing valuable assistance to legal professionals amid the growing complexity of legal matters.",
      image: ai,
      alt: "AI-driven law assistant",
      button: "View Case Study",
    },
  ];

  return (
    <>
      <div
        className="bg-cover bg-center mx-auto text-black "
        style={{ backgroundImage: `url(${recbg.src})` }}>
        <Navbar />
        <div className="mx-auto w-[1400px] pt-20">
          <h3 className="font-bold text-[42px] w-3/5">
            Experience the transformative results of our expertly executed
            projects
          </h3>
        </div>
        <div className="flex flex-wrap justify-evenly w-4/5 m-auto pt-10">
          {data.map((item, index) => (
            <div key={index} className="text-[42px] w-1/2 mb-10 px-10">
              <Image
                src={item.image}
                alt={item.alt}
                sizes=""
                className="rounded-[20px] w-full"
              />
              <h3 className="pt-5 text-[24px] px-5 font-bold">{item.title}</h3>
              <p className="text-[14px] px-5">{item.description}</p>
              <button className="bg-black text-[18px] text-white rounded-[40px] mx-5 px-6 py-2 hover:bg-white hover:text-black">
                Get In Touch
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
