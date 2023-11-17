import React from "react";

const RecipeCategoryHome = ({ link, img, recipeCat }) => {
  return (
    <div className="items-center justify-center relative hover:scale-105 transition duration-500 cursor-pointer">
      <a href={link}>
        <img src={img} alt="/" className="w-full shadow-lg rounded-full" />
        <div class="absolute inset-0 bg-white bg-opacity-75 rounded-full"></div>
        <div class="absolute inset-0 flex items-center justify-center">
          <h2 class="text-green-800 text-2xl font-titillium font-bold">
            {recipeCat}
          </h2>
        </div>
      </a>
    </div>
  );
};

export default RecipeCategoryHome;
