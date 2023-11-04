import React from "react";
import "./Download.css";
import dImg from "../../assets/images/download.png";
import { BsFillArrowDownSquareFill } from "react-icons/bs";

const Download = () => {
  return (
    <div className="download container">
      <div className="download_wrraper">
        <div className="d_left">
          <h2>DOWNLOAD OUR SOFTWARE</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
          <button className="down_btn">
            <BsFillArrowDownSquareFill />
            DOWNLOAD
          </button>
        </div>
        <div className="d_right">
          <img src={dImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Download;
