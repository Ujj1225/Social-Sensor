const { PythonShell } = require("python-shell");
const fs = require("fs");

const sensorModel = async (req, res) => {
  const { keyword } = req.body;

  let options = {
    scriptPath: "../../LSTM_model/",
    args: [keyword],
  };

  PythonShell.run("Keyword_extractor.py", options, (err, pythonRes) => {
    if (err) {
      console.log(err);
    }
    if (pythonRes) {
      console.log(pythonRes);
    }
  });

  await fs.readFile("path/to/your/file.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    } else {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    }
  });
};

const testing = async (req, res) => {
  res.send("Hello Baba!");
};

module.exports = { testing, sensorModel };
