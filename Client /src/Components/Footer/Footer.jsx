// import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col gap-10 justify-between items-center w-full bg-black text-gray-300 py-6 pt-10 text-sm">
      <div className="mx-auto flex justify-evenly items-center w-full">
        <div className="flex flex-col gap-1 justify-center items-start">
          {/* <Link to="/">
            <div className="text-4xl font-bold">Social Sensor</div>
          </Link> */}
          <div className="text-xl text-gray-400">Social Sensor Web app</div>
          <div className="mt-3 flex text-xl gap-2 text-gray-500 ">
            <FaFacebook className="hover:text-purple-900" />
            <FaInstagram className="hover:text-purple-900" />
            <FaTiktok className="hover:text-purple-900" />
            <FaTwitter className="hover:text-purple-900" />
            <FaLinkedin className="hover:text-purple-900" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl text-white">About</h1>
          <div className="hover:text-purple-900">About Us</div>
          <div className="hover:text-purple-900">Features</div>
          <div className="hover:text-purple-900">News</div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl text-white">Account</h1>
          <div className="hover:text-purple-900">Support Center</div>
          <div className="hover:text-purple-900">Feedback</div>
          <div className="hover:text-purple-900">Contact Us</div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl text-white"> Company</h1>
          <Link to="/our-team">
            <div className="hover:text-purple-900">Our Team</div>
          </Link>
          <div className="hover:text-purple-900">Partner</div>
          <div className="hover:text-purple-900">FAQ</div>
        </div>
      </div>
      <div className="text-gray-400 text-lg">
        &#169; Social Sensor 2024. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
