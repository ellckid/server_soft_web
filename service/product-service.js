const jwt = require('jsonwebtoken');
const productModel = require('../models/product-model');
const tokenModel = require('../models/token-model')

class ProductService {
    async findAll() {
        const productList = await productModel.find();
        return productList;
    }
}

module.exports = new ProductService();