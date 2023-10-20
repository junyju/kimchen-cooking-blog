import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SubscribeBar from "./components/SubscribeBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Recipes from "./Recipes";

function App() {
  return (
    <div>
      <SubscribeBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
