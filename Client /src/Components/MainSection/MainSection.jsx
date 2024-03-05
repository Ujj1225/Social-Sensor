import { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";

function MainSection() {
  const [publicFigure, setPublicFigure] = useState("");
  const [keyword, setKeyword] = useState("");
  const [sentimentResult, setSentimentResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Assuming you have an API endpoint for sentiment analysis
    try {
      const response = await fetch("/api/sentiment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          publicFigure,
          keyword,
        }),
      });
      const data = await response.json();
      setSentimentResult(data.sentiment);
    } catch (error) {
      console.error("Error analyzing sentiment:", error);
    }
  };

  return (
    <div className="mx-32 flex flex-col justify-center items-center">
      <Header />
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-blue-700 p-8 rounded-2xl h-96 w-auto">
          <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
            Social Media Sentiment Analysis
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="publicFigure">
                Choose a Public Figure or Politician:
              </label>
              <select
                id="publicFigure"
                name="publicFigure"
                value={publicFigure}
                onChange={(e) => setPublicFigure(e.target.value)}
                className="w-full border rounded-md px-3 py-2 outline-none"
              >
                <option value="">Select</option>
                <option value="Elon Musk">Elon Musk</option>
                <option value="Barack Obama">Barack Obama</option>
                <option value="Angela Merkel">Angela Merkel</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="keyword">
                Enter a Keyword:
              </label>
              <input
                type="text"
                id="keyword"
                name="keyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="e.g., scandal, controversy"
                className="w-full border rounded-md px-3 py-2 outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
            >
              Analyze Sentiment
            </button>
          </form>
          {sentimentResult && (
            <div className="mt-4">
              <h2 className="text-lg font-bold">Sentiment Analysis Result:</h2>
              <p className="mt-2">
                {sentimentResult === "positive" && (
                  <>
                    The sentiment towards the chosen public figure or politician
                    regarding the given keyword is positive.
                  </>
                )}
                {sentimentResult === "negative" && (
                  <>
                    The sentiment towards the chosen public figure or politician
                    regarding the given keyword is negative.
                  </>
                )}
                {sentimentResult === "neutral" && (
                  <>No sentiment analysis result available.</>
                )}
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainSection;
