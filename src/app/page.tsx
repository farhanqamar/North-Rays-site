"use client"; // Ensure this is at the top for client-side components
import { useEffect } from 'react';
import Hero from "./components/home/Hero";
import AboutUs from "./components/home/AboutUs";
import Services from "./components/home/Services";
import Technology from "./components/home/Technology";
import Featured from "./components/home/Featured";
// import Lontacts from "./components/home/Contacts";
import Reviews from './components/home/Reviews';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Home() {


  useEffect(() => {
    // Initialize AOS on the client side
    if (typeof window !== "undefined") {
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: false,
      });
      AOS.refreshHard(); // Refresh animations
    }
  }, []);


  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <Technology />
      <Featured />
<Reviews/>
      {/* <Lontacts /> */}
      {/* <Footer /> */}
    </>
  );
}
