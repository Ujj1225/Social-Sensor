import { Link } from "react-router-dom";

// import React from "react";
const HeroSection = () => {
  return (
    <div className=" py-12 px-4 flex items-center justify-between">
      {/* Content */}
      <div className=" justify-start">
        <div className=" flex flex-col justify-center items-start gap-1 tracking-wider mr-24">
          <p className="text-3xl text-white">
            <span className="text-4xl e font-bold bg-gradient-to-r from-black to-orange-400 text-transparent bg-clip-text">
              From{" "}
            </span>
            <br />
            <span className="text-5xl e font-bold bg-gradient-to-r from-black to-orange-400 text-transparent bg-clip-text">
              Viral Misinformation to
            </span>
          </p>
          <p className="py-2 text-6xl font-bold bg-gradient-to-r from-black to-orange-400 text-transparent bg-clip-text">
            Digital Safety
          </p>
          <p className="text-xl text-black font-serif">
            Introducing Social Sensor for Nepal Social Media Environment
          </p>
        </div>
        <Link to="/mainpage">
          <button className="bg-black text-white font-semibold px-6 py-3 rounded-lg shadow-lg cursor-pointer w-32 mt-8">
            Try Now
          </button>
        </Link>
      </div>

      {/* Image */}
      <div>
        <img
          className="object-cover rounded-lg shadow-lg w-98 h-80" // Adjust the width and height as desired
          src="./src/assets/images/hero-socialmedia.png"
          alt="Hero Image"
        />
      </div>
    </div>
  );
};

export default HeroSection;
