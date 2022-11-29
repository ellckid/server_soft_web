const orderModel = require('../models/order-model');

class OrderService {
  async addOrder(userid, orderlist, totalprice) {
    const neworder = await orderModel.create({ userid, orderlist, totalprice });
    return {
      order: neworder
    }
  }

  async postOrders(userid) {
    const orders = await orderModel.find({ userid })
    return orders
  }
}

module.exports = new OrderService();