import React from "react";
import { Link } from "react-router-dom";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="bg-tertiary max-padd-container text-white py-12 rounded-xl" id="contact">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center md:items-start">
          <Link to={"/"} className="bold-24 mb-4">
            <h3 className="">
              Fusion<span className="text-secondary">Mart</span>
            </h3>
          </Link>
          <p className="text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quos
            modi omnis ducimus sequi esse iste, commodi praesentium dignissimos
            voluptas?
          </p>
        </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="bold-20 mb-4">Quick Links</h4>
              <ul className="space-y-2 regular-15 text-gray-30">
                <li><a href="/" className="hover:text-secondary">Home</a></li>
                <li><a href="/" className="hover:text-secondary">Categories</a></li>
                <li><a href="/" className="hover:text-secondary">Shop</a></li>
                <li><a href="/" className="hover:text-secondary">Contact Us</a></li>
              </ul>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg mb-4">Contact Us</h4>
            <p>Email: <a href="" className="hover:text-secondary">support@fusionmart.com</a></p>
            <p>Phone: <a href="" className="hover:text-secondary">1234567890</a></p>
            <p>Address: 123 Fusion Street, City, Country</p>
          </div>
      </div>
          <div className="flex flex-col items-center mt-8 w-full">
            <SocialIcons />
            <hr className="h-[1px] w-full max-w-screen-md my-4 border-white"/>
            <p className="text-center text-sm">&copy; {new Date().getFullYear()} fusionmart | All rights reserved</p>
          </div>
    </footer>
  );
};

export default Footer;
