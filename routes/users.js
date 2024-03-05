const express = require("express");
const router = express.Router();

const { sensorModel, testing } = require("../controllers/model");

router.get("/", testing);

module.exports = router;
