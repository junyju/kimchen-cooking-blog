import React from "react";
import RecipeCategoryHome from "./RecipeCategoryHome";
import catPlaceholder from "../assets/trialim2.jpg";

const HomeRecipes = () => {
  return (
    <div className="bg-[#fffaf1]">
      <div id="HomeRecipes" className="max-w-[1040px] m-auto px-10 p-4 py-16">
        <h1 className="text-4xl text-center text-green-800 font-dosis pb-10">
          STILL HUNGRY?
        </h1>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-8">
          <RecipeCategoryHome img={catPlaceholder} recipeCat="KOREAN" />
          <RecipeCategoryHome img={catPlaceholder} recipeCat="WESTERN" />
          <RecipeCategoryHome img={catPlaceholder} recipeCat="PASTA" />
          <RecipeCategoryHome img={catPlaceholder} recipeCat="DESSERT" />
          <RecipeCategoryHome img={catPlaceholder} recipeCat="PASTA" />
          <RecipeCategoryHome img={catPlaceholder} recipeCat="DESSERT" />
        </div>
      </div>
    </div>
  );
};

export default HomeRecipes;
