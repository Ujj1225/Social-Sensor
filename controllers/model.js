const { PythonShell } = require("python-shell");

let options = {
  scriptPath: "path",
  args: [""],
};

PythonShell.run("filename.py", options, (err, res) => {
  if (err) {
    console.log(err);
  }
  if (res) {
    console.log(res);
  }
});

const testing = async (req, res) => {
  res.send("Hello Baba!");
};
module.exports = { testing };
