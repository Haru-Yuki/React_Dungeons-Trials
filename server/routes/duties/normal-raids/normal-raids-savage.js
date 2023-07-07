const express = require("express");
const router = express.Router();
const { getAllNormalRaidsSavage, getNormalRaidSavageByName } = require("../../../controller/duties/normal-raids/normal-raids-savage");

router.get("/", getAllNormalRaidsSavage);
router.get("/name/", getNormalRaidSavageByName);

module.exports = router;