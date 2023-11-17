import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SubscribeBar from "./components/SubscribeBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Recipes from "./Recipes";
import KoreanRecipes from "./KoreanRecipes";
import Musubi from "./indiv-recipes/spam_musubi.jsx";

function App() {
  return (
    <div>
      <SubscribeBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes-korean" element={<KoreanRecipes />} />
        <Route path="/spam-musubi" element={<Musubi />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
