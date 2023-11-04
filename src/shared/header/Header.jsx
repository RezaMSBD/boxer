import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="container">
      <div className="header_wrapper ">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="header_ul">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/features">Features</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/download">Download</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/calc">Calculator</Link>
            </li>
            <li>
              <Link to="/learning">Learning</Link>
            </li>
          </ul>
        </div>
        <div className="header_login">
          <button>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
