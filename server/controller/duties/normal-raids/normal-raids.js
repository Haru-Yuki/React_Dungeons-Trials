const NormalRaids = require('../../../models/duties/normal-raids/normal-raids');

exports.getAllNormalRaids = async (req, res) => {
    let duties;
    const {expansion, sort} = req.query;

    if (expansion === 'ALL') {
        duties = await NormalRaids
            .find()
            .sort({level: sort, iLevel: sort});
    } else {
        duties = await NormalRaids
            .find({patchName: expansion})
            .sort({level: sort, iLevel: sort});
    }

    res.json(duties);
};