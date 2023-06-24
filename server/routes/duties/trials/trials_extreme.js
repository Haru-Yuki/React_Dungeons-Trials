const express = require("express");
const router = express.Router();
const { getAllTrialsExtreme } = require("../../../controller/duties/trials/trials-extreme");

router.get("/", getAllTrialsExtreme);

module.exports = router;