import React, { useState } from "react";
import { PiCookingPotBold, PiBowlFoodBold } from "react-icons/pi";
import { AiOutlineMenu, AiOutlineHome, AiOutlineClose } from "react-icons/ai";
import { RxPerson } from "react-icons/rx";
import { MdFastfood, MdSportsBasketball } from "react-icons/md";
import { HiOutlineBookmark } from "react-icons/hi";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [navState, setNav] = useState(false);
  const handleNav = () => {
    setNav(!navState);
    console.log("state changed");
  };

  return (
    <div>
      <nav className="bg-[#f6eee3]">
        <div className="max-w-[1280px] m-auto px-20 p-4 py-1 sm:py-3">
          <div className="flex justify-center sm:justify-between">
            {/* logo & name */}
            <div className="flex space-x-4">
              <div>
                <a href="#" className="flex items-center py-3 px-4">
                  <PiCookingPotBold
                    href="/"
                    size={40}
                    className="mr-1 sm:mr-4 text-green-800"
                  />
                  <span className="body-font font-skranji font-bold text-2xl sm:text-3xl">
                    Kimchen
                  </span>
                </a>
              </div>
              <div className="hidden md:flex flex items-center space-x-9"></div>
            </div>
            <AiOutlineMenu
              size={20}
              onClick={handleNav}
              className="absolute top-14 right-4 md:hidden cursor-pointer hover:scale-110"
            />
            {navState ? (
              <div>
                <div className="fixed inset-y-0 right-0 w-72 h-screen bg-[#f6eee3]/95 flex flex-col items-center p-10 z-20">
                  <div
                    onClick={handleNav}
                    className="absolute top-6 right-4 cursor-pointer hover:scale-110"
                  >
                    <AiOutlineClose size={20} />
                  </div>
                  <a
                    href="/"
                    // home button styling guide
                    className="w-[75%] flex justify-center items-center bg-[#f6eee3]-100 p-3 cursor-pointer hover:scale-110 ease-in duration-200"
                  >
                    <AiOutlineHome size={20} />
                    <span className="pl-4 text-xl">Home</span>
                  </a>
                  <a
                    href="/recipes"
                    // home button styling guide
                    className="w-[75%] flex justify-center items-center bg-[#f6eee3]-100 p-3 cursor-pointer hover:scale-110 ease-in duration-200"
                  >
                    <PiBowlFoodBold size={20} />
                    <span className="pl-4 text-xl">Recipes</span>
                  </a>
                  <a
                    href="#aboutme"
                    // home button styling guide
                    className="w-[75%] flex justify-center items-center bg-[#f6eee3]-100 p-3 cursor-pointer hover:scale-110 ease-in duration-200"
                  >
                    <RxPerson size={20} />
                    <span className="pl-4 text-xl">About Me</span>
                  </a>
                  <a
                    href="#outsideeats"
                    // home button styling guide
                    className="w-[75%] flex justify-center items-center bg-[#f6eee3]-100 p-3 cursor-pointer hover:scale-110 ease-in duration-200"
                  >
                    <MdFastfood size={20} />
                    <span className="pl-4 text-xl">Restaurants</span>
                  </a>
                  <a
                    href="#sportstalk"
                    // home button styling guide
                    className="w-[75%] flex justify-center items-center bg-[#f6eee3]-100 p-3 cursor-pointer hover:scale-110 ease-in duration-200"
                  >
                    <MdSportsBasketball size={20} />
                    <span className="pl-4 text-xl">Sports Talk</span>
                  </a>
                  <a
                    href="#essentials"
                    // home button styling guide
                    className="w-[75%] flex justify-center items-center bg-[#f6eee3]-100 p-3 cursor-pointer hover:scale-110 ease-in duration-200"
                  >
                    <HiOutlineBookmark size={20} />
                    <span className="pl-4 text-xl">Essentials</span>
                  </a>
                  <div className="flex justify-evenly items-center pt-16 max-w-[200px] w-full">
                    <FaTwitter className="cursor-pointer" size={20} />
                    <FaFacebook className="cursor-pointer" size={20} />
                    <FaInstagram className="cursor-pointer" size={20} />
                    <FaLinkedin className="cursor-pointer" size={20} />
                  </div>
                </div>
              </div>
            ) : (
              <div className="hidden md:flex flex font-dosis text-xl items-center space-x-5">
                <a
                  href="/"
                  className="py-5 px-3 text-gray-700 hover:text-black"
                >
                  Home
                </a>
                <a
                  href="/recipes"
                  className="py-5 px-3 text-gray-700 hover:text-black"
                >
                  Recipes
                </a>
                {/* <a href="" className="py-5 px-3 text-gray-700 hover:text-black">
                  Essentials
                </a> */}
                <a href="" className="py-5 px-3 text-gray-700 hover:text-black">
                  About Me
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
