const mongoose = require('mongoose');

const mineralSchema = new mongoose.Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    // text: { type: String, required: true },
    // price: { type: String, required: true },
    // price2: { type: String, required: true }, 
    // price3: { type: String, required: true }, 
});

module.exports = mongoose.model('Mineral', mineralSchema);