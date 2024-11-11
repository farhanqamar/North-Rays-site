import React from "react";
import recbg from "../../../public/recbg.svg";
import Image from "next/image";
import ai from "../../../public/AI.png";
const Portfolio = () => {
  const data = [
    {
      title: "AI-Driven Law GPT",
      description:
        "Law Chat GPT employs advanced ML and NLP technologies to efficiently generate precise and natural-sounding legal text, providing valuable assistance to legal professionals amid the growing complexity of legal matters.",
      image: ai, // Image path
      alt: "AI-driven law assistant",
      btn:"View Case Study"
    },
    {
      title: "AI-Driven Law GPT",
      description:
        "Law Chat GPT employs advanced ML and NLP technologies to efficiently generate precise and natural-sounding legal text, providing valuable assistance to legal professionals amid the growing complexity of legal matters.",
      image: ai,
      alt: "AI-driven law assistant",
      btn:"View Case Study"

    },
    {
      title: "AI-Driven Law GPT",
      description:
        "Law Chat GPT employs advanced ML and NLP technologies to efficiently generate precise and natural-sounding legal text, providing valuable assistance to legal professionals amid the growing complexity of legal matters.",
      image: ai,
      alt: "AI-driven law assistant",
      btn:"View Case Study"

    },
    {
      title: "AI-Driven Law GPT",
      description:
        "Law Chat GPT employs advanced ML and NLP technologies to efficiently generate precise and natural-sounding legal text, providing valuable assistance to legal professionals amid the growing complexity of legal matters.",
      image: ai,
      alt: "AI-driven law assistant",
      button:"View Case Study"

    },
  ];

  return (
    <>
      <div
        className="bg-cover bg-center mx-auto text-black "
        style={{ backgroundImage: `url(${recbg.src})` }}
      >
        <div className="mx-auto w-[950px] pt-20">
        <h3 className="font-bold text-[42px] w-4/5">Experience the transformative results of our expertly executed projects</h3>
        </div>
        <div className="grid grid-cols-2 mx-auto pt-20 justify-items-center w-3/5">
          {data.map((item, index) => (
            <div key={index} className=" text-[42px] w-[400px] mb-10">
              <Image
                src={item.image} 
                alt={item.alt}
                width={400} 
                height={300} 
                className="rounded-[20px]"

              />
              <h3 className="pt-5">{item.title}</h3>
              <p className="text-[14px]">{item.description}</p>
              <button className="bg-black text-[18px] text-white rounded-[40px] px-6 py-2 my-10 hover:bg-white hover:text-black">
              Get In Touch
            </button>            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
