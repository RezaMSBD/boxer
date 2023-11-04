import React from "react";
import "./Hero.css";
import HeroLaptop from "../../assets/images/hero_laptop.png";

const Hero = () => {
  return (
    <div>
      <div className="hero container">
        <div className="hero_wrapper">
          <h1>Software Landing Page</h1>
          <p>
            This is a fully Responsive, Clean Design, Modern, and Flexible
            Software Landing Page for startups, businesses and agencies. It is
            built with HTML5 & CSS3, Bootstrap 3.3.4, Font Awesome 4.3.0, and
            much more. Designed by templatemo. Images by Pixabay
          </p>
          <img src={HeroLaptop} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
