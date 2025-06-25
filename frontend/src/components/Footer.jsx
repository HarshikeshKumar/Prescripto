import React from "react";
import { assets } from "./../assets/assets";

const Footer = () => {
  return (
    <div>
      <div>
        {/* -----------------LEFT SECTION------------ */}
        <div>
          <img src={assets.logo} alt="" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* -----------------CENTER SECTION------------ */}
        <div>
          <p>COMPANY</p>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* -----------------RIGHT SECTION------------ */}
        <div>
          <p>GET IN TOUCH</p>
          <ul>
            <li>+91 79707 85645</li>
            <li>harshikeshkoili214@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* -----------Copyright Text----------- */}
      <div>
        <hr />
        <p>Copyright 2025 @ Harshikesh.dev - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
