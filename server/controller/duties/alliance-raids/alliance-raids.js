const AllianceRaids = require('../../../models/duties/alliance-raids/alliance-raids');
const duties = require("../duties");

exports.getAllAllianceRaids = (req, res) => {
    return duties.getAllDuties(req, res, AllianceRaids);
};