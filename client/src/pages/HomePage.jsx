import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ClientSection from "../components/ClientSection";
import HomeSection from "../components/HomeSection";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ClientSection />
      <HomeSection />
    </>
  );
};

export default HomePage;
