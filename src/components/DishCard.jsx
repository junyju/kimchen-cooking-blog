import React from "react";

const DishCard = ({ img, name, description }) => {
  return (
    <div>
      <div className="items-center justify-center relative hover:scale-110 transition duration-500 cursor-pointer">
        <img
          src={img}
          alt="/"
          className="w-full h-100 shadow-lg rounded-t-lg"
        />
        <div className="text-left p-3 shadow-xl rounded-b-lg bg-[#002904] bg-opacity-10 cursor-pointer">
          <h3 className="text-center sm:text-left text-lg text-green-800 font-dosis sm:pb-2">
            {name}
          </h3>
          <span className="hidden sm:flex">{description}</span>
        </div>
      </div>
    </div>
  );
};

export default DishCard;
