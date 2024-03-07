const { PythonShell } = require("python-shell");
const fs = require("fs").promises; 

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

    const data = await fs.readFile("filtered_data.json", "utf8");
    const jsonData = JSON.parse(data);
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
