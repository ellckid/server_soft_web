const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
    title: { type: String, required: true },
    color: { type: String, required: true },
    price: { type: Number, required: true },
    url: { type: String, required: true }
})

module.exports = model("Product", ProductSchema);