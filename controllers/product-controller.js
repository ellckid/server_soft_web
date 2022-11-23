const productService = require("../service/product-service");

class ProductController {
    async getAllProducts(req, res, next) {
        try {
            const productData = await productService.findAll();
            return res.json(productData);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new ProductController();