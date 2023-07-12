const express = require("express");
const router = express.Router();
const { getAllTrials, getTrialByName, getAllTrialsQuest} = require("../../../controller/duties/trials/trials");

router.get("/duties", getAllTrials);
router.get("/duties/name", getTrialByName);

router.get("/quests", getAllTrialsQuest);

module.exports = router;