import { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

function MainSection() {
  const [publicFigure, setPublicFigure] = useState("kp oli");
  const [keyword, setKeyword] = useState("");
  const [sentimentResult, setSentimentResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setKeyword("");

    // api
    try {
      console.log("trying1");
      const response = await fetch("http://localhost:3000/api/v1/model", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify({
          keyword,
        }),
      });
      console.log("trying2");
      const data = await response.json();
      console.log(data);
      setSentimentResult(data.Sentiment);
    } catch (error) {
      console.error("Error analyzing sentiment:", error);
    }
  };

  // Calculate sentiment data
  const calculateSentimentData = () => {
    return [
      {
        name: "Negative",
        value: sentimentResult
          ? Object.values(sentimentResult).filter((score) => score < 0).length
          : 0,
      },
      {
        name: "Neutral",
        value: sentimentResult
          ? Object.values(sentimentResult).filter(
              (score) => score >= 0 && score <= 0.2
            ).length
          : 0,
      },
      {
        name: "Positive",
        value: sentimentResult
          ? Object.values(sentimentResult).filter((score) => score > 0).length
          : 0,
      },
    ];
  };

  // Prepare data for PieChart and BarChart
  const sentimentData = calculateSentimentData();

  // Colors for PieChart and BarChart
  const COLORS = ["#FF5733", "#82ca9d", "#4299E1"];

  //input part
  return (
    <div className="mx-32 flex flex-col">
      <Header />
      <div className="min-h-screen">
        <div className="bg-white">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            Sentiment Analysis
          </h1>
          <span className="text-gray-400">
            What's the sentiment of the media coverage on public figure ?
          </span>
          <form onSubmit={handleSubmit}>
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
                placeholder="e.g., government uml rsp"
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
              className="w-full bg-blue-600 text-white py-2 rounded-2xl hover:bg-green-600"
            >
              See Result
            </button>
          </form>
          {sentimentResult && (
            <div className="mt-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-800  ">
                Result
              </h2>
              <ul>
                {Object.values(sentimentResult).map((score, index) => {
                  let sentiment;
                  if (score < 0) {
                    sentiment = "Negative";
                  } else if (score >= 0 && score <= 0.5) {
                    sentiment = "Neutral";
                  } else {
                    sentiment = "Positive";
                  }
                })}
              </ul>

              {/* output result part */}
              <div className=" flex ">
                <table>
                  <thead>
                    <tr>
                      <th
                        className="bg-red-500 p-4 rounded-tl-3xl rounded-tr-3xl text-center"
                        style={{ width: "150px" }}
                      >
                        Negative
                      </th>
                      <th
                        className="bg-yellow-500 p-4 rounded-tl-3xl rounded-tr-3xl  text-center"
                        style={{ width: "150px" }}
                      >
                        Neutral
                      </th>
                      <th
                        className="bg-blue-500 p-4 rounded-tl-3xl rounded-tr-3xl text-center"
                        style={{ width: "150px" }}
                      >
                        Positive
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="bg-red-300 p-4 text-center">
                        {sentimentData[0].value}
                      </td>
                      <td className="bg-yellow-300 p-4 text-center">
                        {sentimentData[1].value}
                      </td>
                      <td className="bg-blue-300 p-4 text-center">
                        {sentimentData[2].value}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Bard Chart */}
              <div className="flex mt-12">
                <div
                  className="mt-12"
                  style={{ width: "80%", padding: "10px" }}
                >
                  <h1 className="text-4xl font-bold mb-4 text-gray-800 ml-60">
                    Bar Chart
                  </h1>
                  <BarChart width={600} height={250} data={sentimentData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#8884d8" />
                  </BarChart>
                </div>

                {/* pi Chart  */}
                <div
                  className="mt-12"
                  style={{ width: "80%", padding: "10px" }}
                >
                  <h1 className="text-4xl font-bold mb-4 text-gray-800 ml-52">
                    Pie Chart
                  </h1>
                  <PieChart width={600} height={250}>
                    <Pie
                      data={sentimentData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius="100%"
                      fill="#8884d8"
                      label
                    >
                      {sentimentData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainSection;
