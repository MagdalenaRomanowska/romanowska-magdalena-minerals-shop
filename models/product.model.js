const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: { type: String, required: true },
    titleProduct: { type: String, required: true },
});

module.exports = mongoose.model('Product', productSchema);