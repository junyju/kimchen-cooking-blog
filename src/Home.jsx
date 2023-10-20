import React from "react";
import HomeRecipes from "./components/HomeRecipes";
import HomeWelcome from "./components/HomeWelcome";
import HomeFeatured from "./components/HomeFeatured";

const Home = () => {
  return (
    <div>
      <HomeFeatured />
      <HomeWelcome />
      <HomeRecipes />
    </div>
  );
};

export default Home;
