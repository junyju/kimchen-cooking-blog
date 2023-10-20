import React from "react";
import DishCard from "./DishCard";
import pestoPasta from "../assets/creampestopasta.png";
import jeonGol from "../assets/jeongol.png";
import katsuDon from "../assets/katsudon.png";
import honeyPizza from "../assets/honeypizza.png";

const HomeFeatured = () => {
  return (
    <div className="bg-[#fffaf1]">
      <div
        id="HomeFeatured"
        className="max-w-[1120px] m-auto px-10 py-6 flex flex-col items-center"
      >
        <div className="sm:block hidden py-4">
          <h1 className="sm:text-4xl font-dosis text-center text-green-800">
            DO YOU HAVE NO MONEY AND AN EMPTY TUMMY?
          </h1>
          <p className="sm:text-2xl text-center pt-5">
            You're in the right place...
          </p>
        </div>
        <h3 className="block sm:hidden text-md sm:text-2xl underline-offset-4 font-dosis text-green-900">
          FEATURED RECIPES
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-12 py-4 sm:py-8">
          <DishCard
            img={pestoPasta}
            name="PESTO CREAM PASTA"
            description="Do you like thick and creamy textures finishing in <15 minutes? Yes I do."
          />
          <DishCard
            img={jeonGol}
            name="MUSHROOM JEONGOL"
            description="Satisfy your Asian soup cravings with budget shabu at home. Slurp!"
          />
          <DishCard
            img={katsuDon}
            name="KATSU DON"
            description="To be honest if it wasn't for the excess oil I'd make this everyday. "
          />
          <DishCard
            img={honeyPizza}
            name="HONEY PIZZA"
            description="Fancy prosciutto pizzas at quirky spots are $25 per pie? Yea, make it at home instead."
          />
        </div>
        <div className="py-7">
          <button className="flex justify-center items-center px-4 py-2 bg-[#002904] text-white rounded-lg">
            View more recipes here!
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeFeatured;
