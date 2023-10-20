import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f6eee3] text-green-800">
      <div className="md:flex md:justify-around md:items-center sm:px-12 px-4 bg-[#ffffff19] py-8 font-dosis">
        <div>
          <div className="flex hidden md:flex flex items-center space-x-8">
            <a href="" className="py-5 px-3 text-gray-700 hover:text-black">
              Home
            </a>
            <a href="" className="py-5 px-3 text-gray-700 hover:text-black">
              Recipes
            </a>
            <a href="" className="py-5 px-3 text-gray-700 hover:text-black">
              About Me
            </a>
            <a href="" className="py-5 px-3 text-gray-700 hover:text-black">
              Projects
            </a>
            <a href="" className="py-5 px-3 text-gray-700 hover:text-black">
              Contact
            </a>
          </div>
        </div>
        <div className="flex justify-evenly items-center pt-1 max-w-[200px] w-full">
          <FaTwitter className="cursor-pointer" size={20} />
          <FaFacebook className="cursor-pointer" size={20} />
          <FaInstagram className="cursor-pointer" size={20} />
          <FaLinkedin className="cursor-pointer" size={20} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
