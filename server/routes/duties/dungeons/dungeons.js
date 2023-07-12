const express = require("express");
const router = express.Router();
const { getAllDungeons, getDungeonByName} = require("../../../controller/duties/dungeons/dungeons");

router.get("/duties", getAllDungeons);
router.get("/duties/name", getDungeonByName);

module.exports = router;