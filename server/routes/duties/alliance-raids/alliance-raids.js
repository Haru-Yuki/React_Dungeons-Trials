const express = require("express");
const router = express.Router();
const { getAllAllianceRaids, getAllianceRaidByName, getAllAllianceRaidsQuest } = require("../../../controller/duties/alliance-raids/alliance-raids");

router.get("/duties", getAllAllianceRaids);
router.get("/duties/name", getAllianceRaidByName);

router.get("/quests", getAllAllianceRaidsQuest);

module.exports = router;