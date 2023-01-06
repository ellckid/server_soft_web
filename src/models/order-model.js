const { Schema, model } = require('mongoose');

const OrderSchema = new Schema({
    orderdate: { type: String, required: true },
    userid: { type: String, required: true },
    orderlist: { type: Array },
    totalprice: { type: Number, required: true }
})

module.exports = model("Order", OrderSchema);
