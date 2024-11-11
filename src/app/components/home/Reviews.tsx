import React from "react";
import Image from "next/image";
import { TiStar } from "react-icons/ti";
const Reviews = () => {
  const reviews = [
    {
      name: "Client XYZ",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptate consequatur alias fugit eos, assumenda impedit aut maiores veritatis amet.",
      image: "/clients.jpg",
    },
    {
      name: "Client ABC",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptate consequatur alias fugit eos, assumenda impedit aut maiores veritatis amet.",
      image: "/clients.jpg",
    },
    {
      name: "Client DEF",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptate consequatur alias fugit eos, assumenda impedit aut maiores veritatis amet.",
      image: "/clients.jpg",
    },
  ];

  return (
    <section className="bg-gray-200 py-8">
      <div className="max-w-6xl mx-auto text-center">
        <div className="pt-20">
        <h2 className="text-3xl font-bold mb-8 relative">
          What Our Clients Say!
          <span className="absolute left-1/2 transform -translate-x-1/2 text-[#e6b251]0] h-1 w-2/12 bg-current -bottom-5"></span>
        </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-8 py-20 ">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg w-80 hover:bg-gradient-to-r from-[#f67e60] to-[#f8dfd4] hover:text-white">
              <Image
                src={review.image}
                alt="client"
                width={100}
                height={100}
                className="mx-auto rounded-full"
              />
              <p className="font-bold mt-4">{review.name}</p>
              <p className=" mt-2 text-[16px]">{review.text}</p>
              <div className="flex justify-center py-5">
              <TiStar className="text-[#FF8000] text-xl"/>
              <TiStar className="text-[#FF8000] text-xl"/>
              <TiStar className="text-[#FF8000] text-xl"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
