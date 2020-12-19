const Product = require('../models/product.model');

exports.getAll = async (req, res) => {
    try {
        res.json(await Product.find());
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
};

exports.getById = async (req, res) => {
  try {
    const prod = await Product.findById(req.params.id);
    if(!prod) res.status(404).json({ message: 'Not found' });
    else res.json(prod);
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};
