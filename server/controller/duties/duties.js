const Joi = require('joi');
const validationSchemas = require("../../models/validation/dutyQuery.schema");

module.exports.getAllDuties = async (req, res, dutyModel) => {
    const query = req.query;

    if (_validateDutyQuery(query) === true) {
        const data = _prepareData(query);

        res.json(await dutyModel.find(data.find).sort(data.sort));
    } else {
        res.status(422).json({message: _validateDutyQuery(query).message, status: 422}).end();
    }
};

module.exports.getDutyByName = async (req, res, dutyModel) => {
  const {name} = req.query;

  res.json(await dutyModel.findOne({name}));
};

const _prepareData = (query) => {
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
}