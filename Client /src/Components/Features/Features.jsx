import PropTypes from "prop-types";

// Feature component for individual feature items
const Feature = ({ title, description, image }) => {
  return (
    <div className="rounded-lg shadow-md flex flex-col items-center justify-center hover:bg-blue-200 cursor-pointer p-8 transform transition-transform hover:scale-105">
      <div style={{ height: "60px" }}>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
      </div>
      {image && (
        <img
          src={image}
          alt={title}
          className="mb-4"
          style={{ width: "300px", height: "200px" }}
        />
      )}
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

// Define prop types for Feature component
Feature.propTypes = {
  title: PropTypes.string.isRequired, // Validate title prop as a required string
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
};

// FeatureList component to hold multiple features
const FeatureList = () => {
  const features = [
    {
      title: "Data Collection And Analysis",
      description:
        "The system collects data from social media and online sources about public figures, using web scraping. It then analyzes this data to determine the sentiment expressed towards them, focusing on posts and content related to the individuals.",
      image: "./src/assets/images/datacollection.jpeg",
    },
    {
      title: "Sentiment Analysis and Alert System",
      description:
        " After analyzing the sentiment, the system checks if it exceeds predefined thresholds indicating potential harm. If so, it promptly sends alerts via email, text messages, or other methods to notify users of harmful posts in real-time.",
      image: "/src/assets/images/alert.jpeg",
    },
    {
      title: "User Interface and Insights",
      description:
        "The system presents sentiment analysis results through a user-friendly interface, allowing users to visualize trends and access insights into sentiment landscapes. Users can customize monitoring parameters and track their online presence effectively.",
      image: "/src/assets/images/userinterface.png",
    },
  ];

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
        {features.map((feature, index) => (
          <Feature
            key={index}
            title={feature.title}
            description={feature.description}
            image={feature.image}
          />
        ))}
      </div>
    </div>
  );
};

// FeatureComponent as the main container component
const FeatureComponent = () => {
  return (
    <div className="py-12 px-4 flex flex-col items-center justify-center font-montserrat">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">How It Works</h2>
      <p className="text-black text-sm text-center w-1/2 mb-8">
        The Social Sensor web app monitors social media for content related to
        public figures, using advanced scraping and sentiment analysis. It
        alerts users in real-time if harmful sentiment is detected, providing
        timely awareness and protection.
      </p>

      <div className="border border-gray-300 rounded-lg overflow-hidden">
        <FeatureList />
      </div>
    </div>
  );
};

export default FeatureComponent;
