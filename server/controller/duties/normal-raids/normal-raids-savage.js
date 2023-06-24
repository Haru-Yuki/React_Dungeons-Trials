const NormalRaidsSavage = require('../../../models/duties/normal-raids/normal-raids-savage');

exports.getAllNormalRaidsSavage = async (req, res) => {
    let duties;
    const {expansion, sort} = req.query;

    if (expansion === 'ALL') {
        duties = await NormalRaidsSavage
            .find()
            .sort({level: sort, iLevel: sort});
    } else {
        duties = await NormalRaidsSavage
            .find({patchName: expansion})
            .sort({level: sort, iLevel: sort});
    }

    res.json(duties);
};