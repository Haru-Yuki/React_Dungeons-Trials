const NormalRaidsSavage = require('../../../models/duties/normal-raids/normal-raids-savage');
const duties = require("../duties");

exports.getAllNormalRaidsSavage = async (req, res) => {
    return duties.getAllDuties(req, res, NormalRaidsSavage);
};

exports.getNormalRaidSavageByName = async (req, res) => {
    return duties.getDutyByName(req, res, NormalRaidsSavage);
}