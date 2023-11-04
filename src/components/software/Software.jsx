import React from "react";
import { AiFillCheckCircle } from "react-icons/ai"; // Import the icon
import "./Software.css";
import featureImg from "../../assets/images/fe_and_soft-img.png";

const Software = () => {
  return (
    <div className="software container">
      <div className="software_wrapper">
        <div className="wrapper_img">
          <img src={featureImg} alt="" />
        </div>

        <div className="software_wrapper_right">
          <h2>MORE OF YOUR SOFTWARE</h2>
          <text className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </text>

          <div className="software_incon_and_text">
            <div className="software_f_icon">
              <AiFillCheckCircle />
            </div>
            <p className="software_p2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="software_incon_and_text">
            <div className="software_f_icon">
              <AiFillCheckCircle />
            </div>
            <p className="software_p2">
              Lorem ipsum dolor sit amet, consectetur na aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Software;
