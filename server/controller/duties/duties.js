const validationSchemas = require("../../models/validation/dutyQuery.schema");
const Trials = require('../../models/duties/trials/trials');
const TrialsExtreme = require('../../models/duties/trials/trials-extreme')
const Dungeons = require('../../models/duties/dungeons/dungeons');

module.exports.getAllDuties = async (req, res, dutyModel) => {
    const query = req.query;

    if (_validateDutyQuery(query) === true) {
        const data = _prepareDataDuties(query);

        res.json(await dutyModel.find(data.find).sort(data.sort));
    } else {
        res.status(422).json({message: _validateDutyQuery(query).message, status: 422}).end();
    }
};

module.exports.getAllDutiesQuest = async (req, res, dutyModel) => {
    const query = req.query;
    const data = _prepareDataQuests(query);

    if (dutyModel.collection.collectionName === 'Trials') {
        const trials = await Trials.find(data.find).sort(data.sort)

        switch (query.quest) {
            case 'The Four Lords':
                const dungeons = await Dungeons.find(data.find).sort(data.sort);
                res.json(dungeons.concat(trials));
                return;
            case 'Primal':
                const trialsExtreme = await TrialsExtreme.find(data.find).sort(data.sort);
                res.json(trialsExtreme.concat(trials));
                return;
        }
    }

    res.json(await dutyModel.find(data.find).sort(data.sort));
}

module.exports.getDutyByName = async (req, res, dutyModel) => {
  const {name} = req.query;

  res.json(await dutyModel.findOne({name}));
};

const _prepareDataDuties = (query) => {
    const {expansion, name, sort} = query;

    if (expansion === 'ALL') {
        return {
            find: name ? {name:{$regex: name}} : null,
            sort: {level: sort, iLevel: sort}
        }
    } else {
        return {
            find: name ? {patchName: expansion, name:{$regex: name}} : {patchName: expansion},
            sort: {level: sort, iLevel: sort}
        }
    }
};

const _validateDutyQuery = (query) => {
    const { error } = validationSchemas.duty.validate(query);
    const valid = error === undefined;

    return valid || error;
};

const _prepareDataQuests = (query) => {
    const {quest, name} = query;

    return {
        find: name? {quest, name:{$regex: name}} : {quest},
        sort: {level: 'asc', iLevel: 'asc'}
    }
}