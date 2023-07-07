const express = require("express");
const router = express.Router();
const { getAllTrialsExtreme, getTrialExtremeByName } = require("../../../controller/duties/trials/trials-extreme");

router.get("/", getAllTrialsExtreme);
router.get("/name/", getTrialExtremeByName);

module.exports = router;