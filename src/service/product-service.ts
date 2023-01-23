const productModel = require('../models/product-model');


class ProductService {
    async findAll() {
        const productList = await productModel.find();
        return productList;
    }
}

module.exports = new ProductService();
