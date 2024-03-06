const express = require("express");
const router = express.Router();

const { sensorModel, testing } = require("../controllers/model");

router.get("/model", sensorModel)
router.get("/test", testing);

module.exports = router;
