import React from "react";
import DishCard from "./components/DishCard";
import RecipeCategoryHome from "./components/RecipeCategoryHome";
import pestoPasta from "./homepage_assets/pestoCreamPastaHome.png";
import jeonGol from "./homepage_assets/jeonGolHome.png";
import musubi from "./homepage_assets/musubiHome.png";
import honeyPizza from "./homepage_assets/honeyPizzaHome.png";
import asianCat from "./homepage_assets/asianCat.png";
import drinkCat from "./homepage_assets/drinkCat.png";
import dessertCat from "./homepage_assets/dessertCat.png";
import koreanCat from "./homepage_assets/koreanCat.png";
import pastaCat from "./homepage_assets/pastaCat.png";
import westernCat from "./homepage_assets/westernCat.png";

const Recipes = () => {
  return (
    <div className="bg-[#fffaf1]">
      <div className="max-w-[1120px] m-auto px-10 py-6">
        <h1 className="text-3xl sm:text-4xl font-dosis text-center text-green-800 py-3 sm:py-6 pb-6 sm:pb-10">
          RECIPES
        </h1>
        <div class="flex items-center pb-6">
          <div class="grow border-b border-green-800"></div>
          <span class="shrink px-3 pb-1 text-2xl text-green-800">
            Recipes by Category
          </span>
          <div class="grow border-b border-green-800"></div>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-8 py-2 pt-2 pb-8">
          <RecipeCategoryHome
            link={"recipes-korean"}
            img={koreanCat}
            recipeCat="KOREAN"
          />
          <RecipeCategoryHome
            link={"recipes-asian"}
            img={asianCat}
            recipeCat="ASIAN"
          />
          <RecipeCategoryHome img={westernCat} recipeCat="WESTERN" />
          <RecipeCategoryHome img={pastaCat} recipeCat="PASTA" />
          <RecipeCategoryHome img={dessertCat} recipeCat="DESSERT" />
          <RecipeCategoryHome img={drinkCat} recipeCat="DRINKS" />
        </div>
        <div>
          <div class="flex items-center pt-8">
            <div class="grow border-b border-green-800"></div>
            <span class="shrink px-3 pb-1 text-2xl text-green-800">
              Featured Recipes
            </span>
            <div class="grow border-b border-green-800"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 sm:gap-6 py-4 sm:py-8">
            <DishCard img={pestoPasta} name="PESTO CREAM PASTA" />
            <DishCard img={jeonGol} name="MUSHROOM JEONGOL" />
            <DishCard link={"spam-musubi"} img={musubi} name="MUSUBI " />
            <DishCard img={honeyPizza} name="HONEY PIZZA" />
          </div>
        </div>
        <div>
          <div class="flex items-center pt-8">
            <div class="grow border-b border-green-800"></div>
            <span class="shrink px-3 pb-1 text-2xl text-green-800">Korean</span>
            <div class="grow border-b border-green-800"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 sm:gap-6 py-4 sm:py-8">
            <DishCard img={jeonGol} name="MUSHROOM JEONGOL" />
          </div>
        </div>
        <div>
          <div class="flex items-center pt-8">
            <div class="grow border-b border-green-800"></div>
            <span class="shrink px-3 pb-1 text-2xl text-green-800">Asian</span>
            <div class="grow border-b border-green-800"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 sm:gap-6 py-4 sm:py-8">
            <DishCard link={"spam-musubi"} img={musubi} name="MUSUBI " />
          </div>
        </div>
        <div>
          <div class="flex items-center pt-8">
            <div class="grow border-b border-green-800"></div>
            <span class="shrink px-3 pb-1 text-2xl text-green-800">
              Western
            </span>
            <div class="grow border-b border-green-800"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 sm:gap-6 py-4 sm:py-8">
            <DishCard img={honeyPizza} name="HONEY PIZZA" />
          </div>
        </div>

        <div>
          <div class="flex items-center pt-8">
            <div class="grow border-b border-green-800"></div>
            <span class="shrink px-3 pb-1 text-2xl text-green-800">Pasta</span>
            <div class="grow border-b border-green-800"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 sm:gap-6 py-4 sm:py-8">
            <DishCard img={pestoPasta} name="PESTO CREAM PASTA" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
