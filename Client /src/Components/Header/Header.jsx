import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center text-gray-600 my-10">
      {/* Logo Section */}
      <div className="flex justify-center items-center text-2xl ">
        Social Sensor
      </div>

      {/* Navigation section */}
      <ul className="flex justify-center items-center gap-20">
        <li className="text-gray-600 hover:text-purple-700  cursor-pointer">
          About
        </li>
        <li className="text-gray-600 hover:text-purple-700  cursor-pointer">
          Analysis
        </li>
        <li className="text-gray-600 hover:text-purple-700  cursor-pointer">
          Report
        </li>
        <Link to="/our-team">
          <li className="text-gray-600 hover:text-purple-700  cursor-pointer">
            Our Team
          </li>
        </Link>
      </ul>

      {/* Get Started button */}
      <Link to="/mainsection">
        <button className="bg-indigo-700 text-white  text-xl px-3 py-2 rounded-2xl hover:bg-purple-950">
          Get Started
        </button>
      </Link>
    </header>
  );
};

export default Header;
