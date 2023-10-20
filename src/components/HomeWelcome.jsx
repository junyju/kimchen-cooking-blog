import React from "react";
import aboutMeImage from "../assets/aboutMeImage.png";
import moreRecipesImage from "../assets/restaurantImage.png";
import sportsImage from "../assets/sportsImage.png";
import outsideFoodImage from "../assets/outsideFoodImage.jpg";

const HomeWelcome = () => {
  return (
    <div className="bg-[#f6eee3]">
      <div
        id="HomeWelcome"
        className="max-w-[1120px] m-auto px-5 sm:px-10 pb-12 p-2 sm:p-4 flex flex-col items-center"
      >
        <div className="py-8">
          <h1 className="text-4xl text-center text-green-800 font-dosis py-2">
            CHECK OUT MORE
          </h1>
          {/* <p className="hidden sm:flex text-2xl text-center py-3">
            Check out more...
          </p> */}
        </div>
        <div class="grid grid-cols-3 gap-3 sm:gap-6 py-1 sm:pb-10">
          <div className="hover:scale-105 transition duration-500 cursor-pointer">
            <img
              src={aboutMeImage}
              alt="/"
              className="w-full shadow-lg rounded-t-lg"
            />
            <div className="text-left p-3 shadow-xl rounded-b-lg bg-white bg-opacity-10 cursor-pointer">
              <h3 className="text-center sm:text-left text-lg text-[#002904] font-dosis">
                ABOUT ME
              </h3>
              <span className="hidden sm:flex">
                What's good y'all, I'm Jun! Welcome to my food blog! I'm a
                full-time product manager but tbh my life outside of work is way
                more interesting. Click here to learn more...
              </span>
            </div>
          </div>
          <div className="hover:scale-105 transition duration-500 cursor-pointer">
            <img className="rounded-t-lg" src={sportsImage} />
            <div className="p-3 shadow-xl rounded-b-lg bg-white bg-opacity-10 cursor-pointer">
              <h3 className="text-center sm:text-left text-lg text-[#002904] font-dosis">
                SPORTS TALK
              </h3>
              <span className="hidden sm:flex">
                What's good y'all, I'm Jun! Welcome to my food blog! I'm a
                full-time product manager but tbh my life outside of work is way
                more interesting. Click here to learn more...
              </span>
            </div>
          </div>
          <div className="hover:scale-105 transition duration-500 cursor-pointer">
            <img className="rounded-t-lg" src={moreRecipesImage} />
            <div className="p-3 shadow-xl rounded-b-lg bg-white bg-opacity-10 cursor-pointer">
              <h3 className="text-center sm:text-left text-lg text-[#002904] font-dosis">
                OUTSIDE EATS
              </h3>
              <span className="hidden sm:flex">
                What's good y'all, I'm Jun! Welcome to my food blog! I'm a
                full-time product manager but tbh my life outside of work is way
                more interesting. Click here to learn more...
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeWelcome;
