const orderModel = require('../models/order-model');

class OrderService {
  async addOrder(userid, orderlist, totalprice) {
    const neworder = await orderModel.create({ userid, orderlist, totalprice });
    return {
      order: neworder
    }
  }
}

module.exports = new OrderService();