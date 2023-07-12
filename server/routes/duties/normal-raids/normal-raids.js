const express = require("express");
const router = express.Router();
const { getAllNormalRaids, getNormalRaidByName, getAllNormalRaidsQuest } = require("../../../controller/duties/normal-raids/normal-raids");

router.get("/duties", getAllNormalRaids);
router.get("/duties/name", getNormalRaidByName);

router.get("/quests", getAllNormalRaidsQuest);

module.exports = router;