const NormalRaids = require('../../../models/duties/normal-raids/normal-raids');
const duties = require("../duties");

exports.getAllNormalRaids = async (req, res) => {
    return duties.getAllDuties(req, res, NormalRaids);
};

exports.getNormalRaidByName = async (req, res) => {
    return duties.getDutyByName(req, res, NormalRaids);
}