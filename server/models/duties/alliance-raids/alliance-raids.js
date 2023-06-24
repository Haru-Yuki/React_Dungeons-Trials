const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AllianceRaidsScheme = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    imageLink: { type: String, default: '' },
    name: { type: String, default: 'Trial name' },
    patchName: { type: String, default: 'Patch name' },
    level: { type: Number, default: 0 },
    iLevel: {type: Number, default: 0 },
    description: { type: String, default: 'Description...' }
}, { collection: 'Alliance Raids' })

module.exports = mongoose.model('AllianceRaids', AllianceRaidsScheme);
