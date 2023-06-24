const express = require("express");
const router = express.Router();
const { getAllNormalRaids } = require("../../../controller/duties/normal-raids/normal-raids");

router.get("/", getAllNormalRaids);

module.exports = router;