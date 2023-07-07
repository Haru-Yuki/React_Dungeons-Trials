const TrialsExtreme = require('../../../models/duties/trials/trials-extreme');
const duties = require("../duties");

exports.getAllTrialsExtreme = async (req, res) => {
    return duties.getAllDuties(req, res, TrialsExtreme);
};

exports.getTrialExtremeByName = async (req, res) => {
    return duties.getDutyByName(req, res, TrialsExtreme);
}