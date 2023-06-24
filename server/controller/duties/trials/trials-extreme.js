const TrialsExtreme = require('../../../models/duties/trials/trials-extreme');

exports.getAllTrialsExtreme = async (req, res) => {
    let duties;
    const {expansion, sort} = req.query;

    if (expansion === 'ALL') {
        duties = await TrialsExtreme
            .find()
            .sort({level: sort, iLevel: sort});
    } else {
        duties = await TrialsExtreme
            .find({patchName: expansion})
            .sort({level: sort, iLevel: sort});
    }

    res.json(duties);
};