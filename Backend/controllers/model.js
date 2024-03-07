const { PythonShell } = require("python-shell");
const fs = require("fs").promises;

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const sensorModel = async (req, res) => {
  const { keyword } = req.body;
  console.log(keyword);

  let options = {
    scriptPath: "/home/ujjwaljha/Social-Sensor/LSTM_model",
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
        data = await fs.readFile("filtered_data.json", "utf8");
        jsonData = JSON.parse(data);
        break; // Exit the loop if successful
      } catch (error) {
        // Handle file not found error
        console.error("File not found. Retrying...");
        await wait(7000); // Wait for 1 second before retrying
      }
    }
    res.json(jsonData);
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

module.exports = { testing, sensorModel };
