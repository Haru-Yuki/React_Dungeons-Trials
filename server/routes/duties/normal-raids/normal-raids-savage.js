const express = require("express");
const router = express.Router();
const { getAllNormalRaidsSavage, getNormalRaidSavageByName } = require("../../../controller/duties/normal-raids/normal-raids-savage");

router.get("/duties", getAllNormalRaidsSavage);
router.get("/duties/name", getNormalRaidSavageByName);

module.exports = router;