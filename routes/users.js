const express = require("express");
const router = express.Router();

const { sensorModel } = require("../controllers/model");

router.get("/", (req, res) => {
  res.send("Hello Baba!");
});

module.exports = router;