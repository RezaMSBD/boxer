import React from "react";
import { AiFillCheckCircle } from "react-icons/ai"; // Import the icon
import "./Feature.css";
import featureImg from "../../assets/images/fe_and_soft-img.png";

const Feature = () => {
  return (
    <div className="feature container">
      <div className="feature_wrapper">
        <div className="wrapper_left">
          <h2>OUR SOFTWARE FEATURES</h2>
          <text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </text>

          <div className="incon_and_text">
            <div className="f_icon">
              <AiFillCheckCircle />
            </div>
            <p className="p2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="incon_and_text">
            <div className="f_icon">
              <AiFillCheckCircle />
            </div>
            <p className="p2">
              Lorem ipsum dolor sit amet, consectetur na aliqua.
            </p>
          </div>
        </div>

        <div className="wrapper_right">
          <img src={featureImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Feature;
