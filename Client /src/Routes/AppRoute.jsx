import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import MainPage from "../Components/MainPage/MainPage";
import MainSection from "../Components/MainSection/MainSection";
import AboutPage from "../Pages/TeamPage";
// import Chat from "../pages/Chat";

const AppRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/mainsection" element={<MainSection />} />
        <Route path="/our-team" element={<AboutPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoute;
