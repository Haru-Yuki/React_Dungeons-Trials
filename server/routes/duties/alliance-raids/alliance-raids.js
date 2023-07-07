const express = require("express");
const router = express.Router();
const { getAllAllianceRaids, getAllianceRaidByName } = require("../../../controller/duties/alliance-raids/alliance-raids");

router.get("/", getAllAllianceRaids);
router.get("/name/", getAllianceRaidByName);

module.exports = router;