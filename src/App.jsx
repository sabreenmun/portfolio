import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/HomePage";
import Photography from "./pages/PhotographyPage";
import About from "./pages/AboutPage";
import Guide from "./pages/GuidePage";
import OtherPage from "./pages/OtherPage";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/other" element={<OtherPage />} />
         <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
