import React from "react";
import RecipeCategoryHome from "./RecipeCategoryHome";
import asianCat from "../homepage_assets/asianCat.png";
import drinkCat from "../homepage_assets/drinkCat.png";
import dessertCat from "../homepage_assets/dessertCat.png";
import koreanCat from "../homepage_assets/koreanCat.png";
import pastaCat from "../homepage_assets/pastaCat.png";
import westernCat from "../homepage_assets/westernCat.png";

const HomeRecipes = () => {
  return (
    <div className="bg-[#fffaf1]">
      <div id="HomeRecipes" className="max-w-[1040px] m-auto px-10 p-4 py-16">
        <h1 className="text-4xl text-center text-green-800 font-dosis pb-10">
          STILL HUNGRY?
        </h1>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-8">
          <RecipeCategoryHome img={koreanCat} recipeCat="KOREAN" />
          <RecipeCategoryHome img={asianCat} recipeCat="ASIAN" />
          <RecipeCategoryHome img={westernCat} recipeCat="WESTERN" />
          <RecipeCategoryHome img={pastaCat} recipeCat="PASTA" />
          <RecipeCategoryHome img={dessertCat} recipeCat="DESSERT" />
          <RecipeCategoryHome img={drinkCat} recipeCat="DRINKS" />
        </div>
      </div>
    </div>
  );
};

export default HomeRecipes;
