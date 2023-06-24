const Trials = require('../../../models/duties/trials/trials');

exports.getAllTrials = async (req, res) => {
    let duties;
    const {expansion, sort} = req.query;

    if (expansion === 'ALL') {
        duties = await Trials
            .find()
            .sort({level: sort, iLevel: sort});
    } else {
        duties = await Trials
            .find({patchName: expansion})
            .sort({level: sort, iLevel: sort});
    }

    res.json(duties);
};