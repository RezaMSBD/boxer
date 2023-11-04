import React from "react";
import "./Pricing.css";

const Pricing = () => {
  const cards = [
    {
      title: "BASIC PLAN",
      price: "$10",
      duration: "Monthly",
      description: (
        <>
          2 GB SPACE <br /> 200 GB BRANDWIDTH <br /> 20 MORE THEMES <br />
          LIFETIME SUPPORT
        </>
      ),
    },
    {
      title: "BUSINESS PLAN",
      price: "$20",
      duration: "Monthly",
      description: (
        <>
          5 GB SPACE <br /> 500 GB BRANDWIDTH <br /> 50 MORE THEMES <br />
          LIFETIME SUPPORT
        </>
      ),
    },
    {
      title: "PRO PLAN",
      price: "$30",
      duration: "Monthly",
      description: (
        <>
          10 GB SPACE <br /> 1,000 GB BRANDWIDTH <br /> 100 MORE THEMES <br />
          LIFETIME SUPPORT
        </>
      ),
    },
  ];
  return (
    <div className="pricing container">
      <h1>OUR PRICING</h1>
      <div className="pricing_wrapper">
        {cards.map((card, index) => (
          <div className="pricing_card_div">
            <div className="card_top">
              <h2>{card.title}</h2>
              <h3>{card.price}</h3>
              <p>{card.duration}</p>
            </div>
            <div className="card_bottom">
              <div className="descrioption">
                <text>{card.description}</text>
              </div>
              <button type="submit" className="pricing_sign_up">
                SIGN UP
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
