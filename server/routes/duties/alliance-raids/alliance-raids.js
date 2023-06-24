const express = require("express");
const router = express.Router();
const { getAllAllianceRaids } = require("../../../controller/duties/alliance-raids/alliance-raids");

router.get("/", getAllAllianceRaids);

module.exports = router;