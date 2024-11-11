import React from "react";
// import tach1 from "../../../public/tach1.jpg"
import techs from "../../../../public/techs.webp";
// import tech2 from "../../../public/tech2.jfif"
// import tech3 from "../../../public/tech3.jfif"
import Image from "next/image";

const ExploreCoursera = () => {
  const courses = [
    {
      img: techs,
      sub: "Data Science",
      number: "425 courses",
    },
    {
      img: techs,
      sub: "Business",
      number: "425 courses",
    },
    {
      img: techs,
      sub: "Science",
      number: "425 courses",
    },
    {
      img: techs,
      sub: "Data ",
      number: "425 courses",
    },
    {
      img: techs,
      sub: "Math",
      number: "425 courses",
    },
    {
      img: techs,
      sub: "Data Science",
      number: "425 courses",
    },
    {
      img: techs,
      sub: "Data Science",
      number: "425 courses",
    },
    {
      img: techs,
      sub: "Data Science",
      number: "425 courses",
    },
    {
      img: techs,
      sub: "Data Science",
      number: "425 courses",
    },
    {
      img: techs,
      sub: "Data Science",
      number: "425 courses",
    },
    {
      img: techs,
      sub: "Data Science",
      number: "425 courses",
    },
    {
      img: techs,
      sub: "Data Science",
      number: "425 courses",
    },
    {
      img: techs,
      sub: "Data Science",
      number: "425 courses",
    },
    {
      img: techs,
      sub: "Data Science",
      number: "425 courses",
    },
    {
      img: techs,
      sub: "Data Science",
      number: "425 courses",
    },
    {
      img: techs,
      sub: "Data Science",
      number: "425 courses",
    },
  ];

  return (
    <>
      <div className="md:w-4/6 mx-auto space-y-10 px-5">
        <div>
          <p>
            Each university determines admission and the number of pre-approved
            prior learning credits that may count toward the degree requirements
            according to institutional policies, which may consider any existing
            credits you may have.
          </p>
          <h2 className="pt-10">Explore Courseria</h2>
        </div>

        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1">
          {courses.map((course, index) => (
            <div
              key={index}
              className="flex items-center m-5 shadow-lg" // Each card takes 1/4th of the row
            >
              <Image src={course.img} width={70} alt="image" height={60} />
              <div className="p-2">
                <p className="text-[16px] font-bold">{course.sub}</p>
                <p className="text-[16px]">{course.number}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExploreCoursera;