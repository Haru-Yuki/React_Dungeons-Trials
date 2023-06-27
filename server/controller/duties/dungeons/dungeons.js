const Dungeons = require('../../../models/duties/dungeons/dungeons');
const duties = require("../duties");

exports.getAllDungeons = async (req, res) => {
    return duties.getAllDuties(req, res, Dungeons);
};