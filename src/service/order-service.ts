const orderModel = require('../models/order-model');

class OrderService {
    async addOrder(orderdate: string, userid: number, orderlist: Array<any>, totalprice: number) {
        const neworder = await orderModel.create({ orderdate, userid, orderlist, totalprice });
        return {
            order: neworder
        }
    }

    async postOrders(userid: number) {
        const orders = await orderModel.find({ userid })
        return orders
    }
}

module.exports = new OrderService();
