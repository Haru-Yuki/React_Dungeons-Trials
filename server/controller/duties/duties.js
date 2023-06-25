module.exports.getAllDuties = async (req, res, dutyModel) => {
    let duties;
    const {expansion, sort} = req.query;

    if (expansion === 'ALL') {
        duties = await dutyModel
            .find()
            .sort({level: sort, iLevel: sort});
    } else {
        duties = await dutyModel
            .find({patchName: expansion})
            .sort({level: sort, iLevel: sort});
    }

    res.json(duties);
};

module.exports.getDutiesByName = async (req, res, dutyModel) => {
    const {name, sort} = req.query;

    const duties = await dutyModel
        .find({name: {$regex: name}})
        .sort({level: sort})

    res.json(duties);
}