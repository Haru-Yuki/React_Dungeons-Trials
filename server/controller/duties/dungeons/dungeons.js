const Dungeons = require('../../../models/duties/dungeons/dungeons');

exports.getAllDungeons = async (req, res) => {
    let duties;
    const {expansion, sort} = req.query;

    if (expansion === 'ALL') {
        duties = await Dungeons
            .find()
            .sort({level: sort, iLevel: sort});
    } else {
        duties = await Dungeons
            .find({patchName: expansion})
            .sort({level: sort, iLevel: sort});
    }

    res.json(duties);
};