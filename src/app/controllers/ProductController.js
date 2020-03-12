const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {

  async get(req, res) {
    const products = await Product.find();

    return res.json(products);

  },

  async post(req, res) {
    const product = await Product.create(req.body);

    return res.json(product);
  },
};