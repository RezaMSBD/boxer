import React from "react";
import "./ContactUS.css";
import { FaAddressCard } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactUS = () => {
  return (
    <div className="contactUs container">
      <div className="contact_us_wrapper">
        <div className="c_us_left">
          <h2>CONTACT US</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
          <div className="address_wrapper">
            <address className="c_address">
              <div className="icon_wrapper">
                <FaAddressCard className="contact_icon" />
              </div>
              1234 Street Name, City Name, United States
            </address>
            <phone className="c_address">
              <div className="icon_wrapper">
                <FaPhoneSquareAlt className="contact_icon" />
              </div>
              0992 234234 / 0234 234234
            </phone>
            <email className="c_address">
              <div className="icon_wrapper">
                <MdEmail className="contact_icon" />
              </div>
              hello@octetit.com
            </email>
          </div>
        </div>
        <div className="c_us_right">
          <div className="form_wrapper">
            <div className="name_and_email">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
            </div>

            <input type="text" placeholder="Subject" />
            <textarea type="text" placeholder="Message" />
            <button type="submit" className="c_us_button">
              SEND
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
