import { useState } from "react";
const MainPage = () => {
  //example data for the catagorized sentiments
  const catagorizedSentiment = [
    { catagory: "Positive", Sentiments: "This is positive sentiments post " },
    { catagory: "Negative", Sentiments: "This is  negative sentiments post " },
    { catagory: "Neutral", Sentiments: "This is neutral sentiments post " },
  ];

  //state  to store the selected catagory and its corresponding text
  const [selectedText, setSelectedText] = useState("");

  //Function to handle the catagorized selection
  const handleCatagorySlection = async (category) => {
    try {
      // Fetch text from external source based on category
      const response = await fetch(
        `URL_TO_EXTERNAL_SOURCE_FOR_${category.toUpperCase()}`
      );
      const data = await response.text();

      //update selected text state
      setSelectedText(data);
    } catch (error) {
      console.log("Error Fetching Data", error);
    }
  };
  return (
    <div className="container mx-auto mt-8">
      <div className=" flex justify-between items-left mb-8">
        <h1 className=" text-4xl font-bold text-purple-700 font-serif">
          Categorized Sentements
        </h1>
        <div className="ml-4">
          {catagorizedSentiment.map((item, index) => (
            <div key={index} className="mb-2">
              <div className="text-lg font-semibold">{item.category}</div>
              <div className="text-sm">{item.sentiment}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Main Catagory  */}
      <div className="j justify-start">
        <div className="w-1/2 grid grid-cols-3 gap-4">
          <div
            className=" bg-blue-500 text-white text-center py-4 rounded-lg cursor-pointer hover:bg-purple-400"
            onClick={() => handleCatagorySlection("Positive")}
          >
            Positive
          </div>
          <div
            className="bg-green-500 text-white text-center py-4 rounded-lg cursor-pointer hover:bg-purple-400"
            onClick={() => handleCatagorySlection("Neutral")}
          >
            Neutral
          </div>
          <div
            className="bg-red-500 text-white text-center py-4 rounded-lg cursor-pointer hover:bg-purple-400"
            onClick={() => handleCatagorySlection("Negative")}
          >
            Negative
          </div>
        </div>
      </div>
      {selectedText && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Selected Text:</h2>
          <p>{selectedText}</p>
        </div>
      )}
    </div>
  );
};

export default MainPage;
