import React from "react";

const WelcomeCategoryHome = ({ img }) => {
  return (
    <div>
      <div className="col-span-2 hover:scale-105 transition duration-500 cursor-pointer">
        <img className="w-96 rounded-t-lg" src={img} />
        <div className="text-center p-3 shadow-xl rounded-b-lg bg-white bg-opacity-10 cursor-pointer">
          <h3 className="text-lg text-[#002904]">TRAVEL & SPORTS</h3>
        </div>
      </div>
    </div>
  );
};

export default WelcomeCategoryHome;
