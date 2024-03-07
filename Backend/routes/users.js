const express = require("express");
const router = express.Router();

const { sensorModel, testing, refreshDataset } = require("../controllers/model");

router.post("/model", sensorModel);
router.post("/refresh", refreshDataset);
router.get("/test", testing);

module.exports = router;
