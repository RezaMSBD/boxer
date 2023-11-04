import React from "react";
import Hero from "../components/hero/Hero";
import HomeBlog from "../components/homeBlog/HomeBlog";
import Feature from "../components/feature/Feature";
import Software from "../components/software/Software";
import Pricing from "../components/pricing/Pricing";
import Download from "../components/download/Download";
import ContactUS from "../components/contactUs/ContactUS";
import Calculator from "./Calculator";

const Home = () => {
  return (
    <div>
      <Hero />
      <HomeBlog />
      <Feature />
      <Software />
      <Pricing />
      <Download />
      <ContactUS />
      <Calculator />
    </div>
  );
};

export default Home;
