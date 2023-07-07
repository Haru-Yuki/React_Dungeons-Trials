const express = require("express");
const router = express.Router();
const { getAllNormalRaids, getNormalRaidByName } = require("../../../controller/duties/normal-raids/normal-raids");

router.get("/", getAllNormalRaids);
router.get("/name/", getNormalRaidByName);

module.exports = router;