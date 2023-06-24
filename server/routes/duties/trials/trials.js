const express = require("express");
const router = express.Router();
const { getAllTrials } = require("../../../controller/duties/trials/trials");

router.get("/", getAllTrials);

module.exports = router;