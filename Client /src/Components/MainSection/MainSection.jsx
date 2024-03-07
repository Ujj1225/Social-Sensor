import { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";

function MainSection() {
  const [publicFigure, setPublicFigure] = useState("kp oli");
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
    <div className="mx-32 flex flex-col">
      <Header />
      <div className="min-h-screen">
        <div className="bg-white">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            Sentiment Analysis
          </h1>
          <span className=" text-gray-400">
            What's the sentiment of the media coverage on public figure ?
          </span>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block  mb-2 mt-8" htmlFor="publicFigure">
                Select a Public Figure or Politician
              </label>
              <select
                id="publicFigure"
                name="publicFigure"
                value={publicFigure}
                onChange={(e) => setPublicFigure(e.target.value)}
                style={{
                  maxWidth: "450px",
                  height: "3.5rem",
                  backgroundColor: "white",
                }}
                className="w-full border rounded-2xl px-3 py-2 outline-none overflow-y-auto"
                tabIndex={0}
              >
                Select
                <option value="kp oli">Kp Oli</option>
                <option value="sher bahadur">Shre Bahadur Deuba</option>
                <option value="prachanda">Prachanda</option>
                <option value="Rabi lamichhhane">Rabi Lamichhane</option>
                <option value="Swastima khadka">Swastima Khadka</option>
                <option value="puja sharma">Puja Sharma</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block  mb-2" htmlFor="keyword">
                Enter a Keyword
              </label>
              <input
                type="text"
                id="keyword"
                name="keyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="e.g., scandal, controversy"
                style={{
                  maxWidth: "450px",
                  height: "3.5rem",
                }}
                className="w-full border rounded-2xl px-3 py-2 outline-none"
              />
            </div>
            <button
              type="submit"
              style={{
                maxWidth: "450px",
              }}
              className="w-full bg-green-500 text-white py-2 rounded-2xl hover:bg-green-600"
            >
              See Result
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
