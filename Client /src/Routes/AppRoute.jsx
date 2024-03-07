import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import MainSection from "../Components/MainSection/MainSection";
import AboutPage from "../Pages/TeamPage";
import ProjectAbstractPage from "../Components/AboutPage/AboutPage";

const AppRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mainpage" element={<ProjectAbstractPage />} />
        <Route path="/mainsection" element={<MainSection />} />
        <Route path="/our-team" element={<AboutPage />} />
        <Route path="/Hero-section" element={<LandingPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoute;
