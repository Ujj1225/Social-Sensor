import Choose from "../Components/Choose";
import Features from "../Components/Features";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Hero from "../Components/Hero";

import Layout from "../Layout/Layout";

const LandingPage = () => {
  return (
    <>
      <Layout>
        <Header />
        <Hero />
        <Features />
        <Choose />
        <Footer />
      </Layout>
    </>
  );
};

export default LandingPage;
