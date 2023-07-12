const Trials = require('../../../models/duties/trials/trials');
const duties = require("../duties");

exports.getAllTrials = async (req, res) => {
    return duties.getAllDuties(req, res, Trials);
};

exports.getAllTrialsQuest = async (req, res) => {
    return duties.getAllDutiesQuest(req, res, Trials);
};

exports.getTrialByName = async (req, res) => {
    return duties.getDutyByName(req, res, Trials);
}