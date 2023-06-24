const express = require("express");
const router = express.Router();
const { getAllNormalRaidsSavage } = require("../../../controller/duties/normal-raids/normal-raids-savage");

router.get("/", getAllNormalRaidsSavage);

module.exports = router;