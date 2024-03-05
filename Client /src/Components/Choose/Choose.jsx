import PropTypes from "prop-types"; // Import PropTypes

// Choose component for individual choose items
const Choose = ({ title, description }) => {
  return (
    <div className="rounded-lg shadow-md flex flex-col items-center justify-center hover:bg-blue-200">
      <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-4">{title}</h3>
      <div className="w-1/2 h-p mb-4"></div>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

// Define prop types for Choose component
Choose.propTypes = {
  title: PropTypes.string.isRequired, // Validate title prop as a required string
  description: PropTypes.string.isRequired, // Validate description prop as a required string
};

// ChooseList component to hold multiple choose options
const ChooseList = () => {
  const chooses = [
    {
      title: "Accurate Insight",
      description:
        "Leverage our advanced AI models to analyze and interpret public sentiment with high accuracy.",
    },
    {
      title: "Fast Result",
      description:
        "Get real-time analysis and insights in minutes, not days, to inform your decision-making and engagement strategies.",
    },
    {
      title: "Easy Integration",
      description:
        "Integrate with your existing systems and tools, including social media management platforms, CRMs, and more, for seamless access to sentiment insights.",
    },
  ];

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4 divide-y divide-gray-300 border border-gray-300 rounded-lg">
        {/* Added border style to create a clear visible border line */}
        {chooses.map((choose, index) => (
          <Choose
            key={index}
            title={choose.title}
            description={choose.description}
          />
        ))}
      </div>
    </div>
  );
};

// ChooseComponent as the main container component
const ChooseComponent = () => {
  return (
    <div className=" py-12 px-4">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        Why Choose Social Sentiment?
      </h2>

      {/* Outer border */}
      <div className="border border-gray-300 rounded-lg overflow-hidden">
        {/* Choose list with border line */}
        <ChooseList />
      </div>
    </div>
  );
};

export default ChooseComponent;
