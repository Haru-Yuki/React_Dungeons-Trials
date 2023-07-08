const Joi = require('joi');

const expansionAllowed = ['ALL', 'ARR', 'Heavensward', 'Stormblood', 'Shadowbringers', 'Endwalker'];
const sortAllowed = ['desc', 'asc'];

const validationSchemas = {
    duty: Joi.object().keys({
        expansion: Joi.string().valid(...expansionAllowed).required(),
        sort: Joi.string().valid(...sortAllowed).required(),
        name: Joi.optional()
    })
};

module.exports = validationSchemas;