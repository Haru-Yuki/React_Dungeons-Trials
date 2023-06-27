module.exports.getAllDuties = async (req, res, dutyModel) => {
    const data = _prepareData(req.query);

    res.json(await dutyModel.find(data.find).sort(data.sort));
};

const _prepareData = (query) => {
    const {expansion, name, sort} = query;

    if (expansion === 'ALL') {
        return {
            find: name ? {$regex: name} : null,
            sort: {level: sort, iLevel: sort}
        }
    } else {
        return {
            find: name ? {patchName: expansion, name:{$regex: name}} : {patchName: expansion},
            sort: {level: sort, iLevel: sort}
        }
    }
};