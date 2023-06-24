const AllianceRaids = require('../../../models/duties/alliance-raids/alliance-raids');

exports.getAllAllianceRaids = async (req, res) => {
    let duties;
    const {expansion, sort} = req.query;

    if (expansion === 'ALL') {
        duties = await AllianceRaids
            .find()
            .sort({level: sort, iLevel: sort});
    } else {
        duties = await AllianceRaids
            .find({patchName: expansion})
            .sort({level: sort, iLevel: sort});
    }

    res.json(duties);
};