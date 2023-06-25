const Trials = require('../../../models/duties/trials/trials');
const duties = require("../duties");

exports.getAllTrials = async (req, res) => {
    return duties.getAllDuties(req, res, Trials);
};