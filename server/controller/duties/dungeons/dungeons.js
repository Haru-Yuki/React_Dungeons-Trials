const Dungeons = require('../../../models/duties/dungeons/dungeons');
const duties = require("../duties");

exports.getAllDungeons = async (req, res) => {
    if (req.query.name) {
        return duties.getDutiesByName(req, res, Dungeons);
    } else {
        return duties.getAllDuties(req, res, Dungeons);
    }
};