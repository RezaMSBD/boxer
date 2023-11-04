import React from "react";
import { IoIosLaptop } from "react-icons/io";
import { BsTwitter } from "react-icons/bs";
import { TbLetterA } from "react-icons/tb";
import "./HomeBlog.css";

const HomeBlog = () => {
  const cards = [
    {
      icon: <IoIosLaptop />,
      title: "RESPONSIVE LAYOUT",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    },
    {
      icon: <BsTwitter />,
      title: "BOOTSTRAP 3.3.4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    },
    {
      icon: <TbLetterA />,
      title: "GOOGLE FONT",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    },
  ];

  return (
    <div className="home_blog container">
      {cards.map((card, index) => (
        <div className="card_division" key={index}>
          <div className="blog_icon">{card.icon}</div>
          <h2>{card.title}</h2>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default HomeBlog;
