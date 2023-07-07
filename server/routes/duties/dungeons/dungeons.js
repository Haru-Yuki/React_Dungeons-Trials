const express = require("express");
const router = express.Router();
const { getAllDungeons, getDungeonByName } = require("../../../controller/duties/dungeons/dungeons");

router.get("/", getAllDungeons);
router.get("/name", getDungeonByName);

module.exports = router;