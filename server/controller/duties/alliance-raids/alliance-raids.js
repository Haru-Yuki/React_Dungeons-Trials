const AllianceRaids = require('../../../models/duties/alliance-raids/alliance-raids');
const duties = require("../duties");

exports.getAllAllianceRaids = (req, res) => {
    return duties.getAllDuties(req, res, AllianceRaids);
};

exports.getAllAllianceRaidsQuest = (req, res) => {
    return duties.getAllDutiesQuest(req, res, AllianceRaids);
};

exports.getAllianceRaidByName = async (req, res) => {
    return duties.getDutyByName(req, res, AllianceRaids);
}