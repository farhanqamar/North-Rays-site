import React from "react";
import HeroAcademy from "../components/academy/HeroAcademy";
import PopularCertificate from "../components/academy/PopularCertificate";
import ExploreCoursera from "../components/academy/ExploreCoursera";
import Outcomes from "../components/academy/Outcomes";
import Goals from "../components/academy/Goals";
import AcadmyNavbar from "@/components/AcadmyNavbar/AcadmyNavbar";
import ResponsiveNavbar from "@/components/AcadmyNavbar/ResponsiveNavbar";


const page = () => {
  return (
    <>
    <div>
      <span className="hidden lg:block"><AcadmyNavbar/></span>
      <span className="lg:hidden"><ResponsiveNavbar /></span>
    </div>
      <div>
        <HeroAcademy />
      </div>
      <div>
        <PopularCertificate
          para="Specialization adn Professional Certificates"
          heading="Most Popular Certificates"
          para2="Explore our most popular programs, get job-ready for an in-demand
              career."
          btn1="Join For Free"
          btn2="            Try Coursera For Business
"
        /><PopularCertificate
        para="Professional Certificates"
        heading=" Popular Certificates"
        para2="Explore popular programs, get job-ready for an in-demand
            career."
        btn1="Join For Free"
        btn2="            Try Coursera For Business
"
      /><PopularCertificate
      para="Certificates"
      heading="Most Popular Certificates"
      para2="Explore our most popular programs, get job-ready for an in-demand
          career."
      btn1="Join For Free"
      btn2="            Try Coursera For Business
"
    /><PopularCertificate
    para=" Professional Certificates"
    heading="Most Popular Certificates"
    para2="Explore our most popular programs, get job-ready for an in-demand
        career."
    btn1="Join For Free"
    btn2="            Try Coursera For Business
"
  />
      </div>
      <div><ExploreCoursera/></div>
      <div>
      </div>
      <Outcomes/>
      <Goals/>
      {/* <Academy/> */}
    </>
  );
};

export default page;
