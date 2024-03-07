const { PythonShell } = require("python-shell");
const fs = require("fs").promises;

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const sensorModel = async (req, res) => {
  const { keyword } = req.body;
  console.log(keyword);

  let options = {
    scriptPath: "../LSTM_model",
    args: [keyword],
  };

  try {
    const pythonRes = await PythonShell.run("Keyword_extractor.py", options);
    console.log(pythonRes);
    let data;
    let jsonData;

    // Wait for the file to be created
    while (true) {
      try {
        console.log("here");
        data = await fs.readFile("./filtered_data.json", "utf8");
        console.log(jsonData);
        jsonData = JSON.parse(data);
        break; // Exit the loop if successful
      } catch (error) {
        // Handle file not found error
        console.error("File not found. Retrying...");
        await wait(5000); // Wait for 7 second before retrying
      }
    }
    res.json({
      Title: jsonData.Title,
      Link: jsonData.Link,
      Sentiment: jsonData.Sentiment,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

const testing = async (req, res) => {
  res.send("Hello Baba!");
};

const refreshDataset = async (req, res) => {
  let options = {
    scriptPath: "../LSTM_model",
    args: [],
  };
  PythonShell.run("Web_scrapper_and_analyzer.py", options);
};

module.exports = { testing, sensorModel, refreshDataset };
