const express = require("express");
const router = express.Router();
const { getAllTrials, getTrialByName } = require("../../../controller/duties/trials/trials");

router.get("/", getAllTrials);
router.get("/name/", getTrialByName);

module.exports = router;