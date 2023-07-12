const express = require("express");
const router = express.Router();
const { getAllTrialsExtreme, getTrialExtremeByName } = require("../../../controller/duties/trials/trials-extreme");

router.get("/duties", getAllTrialsExtreme);
router.get("/duties/name", getTrialExtremeByName);

module.exports = router;