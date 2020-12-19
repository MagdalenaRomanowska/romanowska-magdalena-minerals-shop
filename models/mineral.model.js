const mongoose = require('mongoose');

const mineralSchema = new mongoose.Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
});

module.exports = mongoose.model('Mineral', mineralSchema);