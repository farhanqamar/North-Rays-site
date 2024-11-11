import React from "react";
import Banner from "@/app/components/service/Banner";
import GetStarted from "@/app/components/service/GetStarted";
import Fields from "@/app/components/service/Fields";
import Explore from "@/app/components/service/Explore";
import Security from "@/app/components/service/Security";
import { IoIosArrowRoundForward } from "react-icons/io";


const page = () => {
  return (
    <div className="space-y-20 overflow-hidden">
      <Banner
      span="Empowering Businesses in the Digital Age"
      p="A dynamic technology solutions and marketing firm dedicated to helping businesses thrive in the digital age."
      btn="Get In Touch"
      href="/"
      />

      <GetStarted 
      imagSrc='/AI-imagination.png' 
      h3='Where data meets imagination, AI fuels innovation' 
      p='Crafting a future where data and AI power innovation and limitless possibilities abound. With a pragmatic approach, we balance realism and boundless potential, bringing your ideas to life. Let us solve your business problems and help in achieving the impossible.' 
      btn = "Let's Get Started"
      href='/' 
      icon = {<IoIosArrowRoundForward/>}
      />  

      <Fields />

      <GetStarted 
      imagSrc='/ai-business.png' 
      h3='Your Business with Generative AI' 
      p="Whether you're looking to transform your business or revolutionize your industry, we're here to turn your vision into reality. Partner with us and unlock a world of endless possibilities to drive business success." 
      btn = "Let's Get Started"
      href='/'
      icon = {<IoIosArrowRoundForward/>}
      /> 

      <Explore />

      <Security />
{/* 
      <div>
        <Banner
        span="Unleash Endless Possibilities with Generative AI - Streamline & Revolutionize Your Projects Today!"
        p=""
        btn="Contact Us"
        href="/"
        />
      </div> */}
    </div>
  );
};

export default page;
