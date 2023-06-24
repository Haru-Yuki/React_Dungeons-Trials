const express = require("express");
const router = express.Router();
const { getAllDungeons } = require("../../../controller/duties/dungeons/dungeons");

router.get("/", getAllDungeons);

module.exports = router;