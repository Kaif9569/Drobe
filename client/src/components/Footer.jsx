import React from "react";
// import { assets } from "../assets/assets.js";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="">
      <div className="flex flex-col sm:justify-center sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-20 text-sm">
        <div className="mx-auto">
          <Link to="/">
            <p className="text-[32px] mb-5 font-Orbitron">Drobe</p>
          </Link>{" "}
          <p className="w-full md:w-2/3 text-gray-600">
            Experience the best shopping with Drobe – your go-to destination for
            quality products at unbeatable prices. From trendy fashion to
            must-have essentials, we’ve got you covered. Enjoy secure payments,
            fast shipping, and easy returns. Stay connected for exclusive deals
            and updates. Your satisfaction is our top priority. Need help?
            Contact our support team anytime. Happy shopping with Drobe
          </p>
        </div>{" "}
        <div className="mx-auto">
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="mx-auto">
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91-9120770518</li>
            <li>contact@drobe.com</li>
          </ul>
        </div>
      </div>
      <div className="">
        <hr />
        <p className="py-5 text-sm text-center">
          {" "}
          Copyright 2024 &copy; drobe.com - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
