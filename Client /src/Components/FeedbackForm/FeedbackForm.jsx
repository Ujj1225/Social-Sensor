import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

const FeedbackSection = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/2 p-6">
        <div className="text-start ml-48">
          <h2 className="text-4xl text-start mb-4">
            Send us a{" "}
            <span className=" text-blue-500 cursor-pointer">Message...</span>
          </h2>
          <p className="text-gray-600 mb-8">
            We value your feedback! Please share your thoughts, suggestions, or
            any issues you've encountered. Your input helps us improve our
            service and better meet your needs. Thank you for taking the time to
            reach out to us.{" "}
          </p>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
            <span className="text-gray-600">+977 9800000000</span>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            <span className="text-gray-600">contact@example.com</span>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
            <span className="text-gray-600">Kathmandu,Nepal</span>
          </div>
        </div>
      </div>
      <div className="w-1/2 p-6">
        <FeedbackForm />
      </div>
    </div>
  );
};

const FeedbackForm = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
      <form>
        <div className="mr-28">
          <label htmlFor="name" className="block font-bold mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full border rounded-md px-3 py-2 outline-none"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-bold mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border rounded-md px-3 py-2 outline-none"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="feedback" className="block font-bold mb-1">
            Feedback
          </label>
          <textarea
            id="feedback"
            className="w-full border rounded-md px-3 py-2 outline-none"
            rows="5"
            placeholder="Enter your feedback"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};
export default FeedbackSection;
