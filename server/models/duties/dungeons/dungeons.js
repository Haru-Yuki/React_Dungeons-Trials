const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DungeonsSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    imageLink: { type: String, default: '' },
    name: { type: String, default: 'Dungeon name' },
    patchName: { type: String, default: 'Patch name' },
    level: { type: Number, default: 0 },
    iLevel: {type: Number, default: 0 },
    description: { type: String, default: 'Description...' }
}, { collection: 'Dungeons' })

module.exports = mongoose.model('Dungeons', DungeonsSchema);