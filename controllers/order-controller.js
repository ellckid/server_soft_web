const { validationResult } = require('express-validator');
const ApiError = require('../exceptions/api-error');
const orderService = require('../service/order-service');

class OrderController {
  async addNewOrder(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest('ошибка в создании нового заказа ! ', errors.array()));
      }
      const { userid, orderlist, totalprice } = req.body;
      const neworder = await orderService.addOrder(userid, orderlist, totalprice);
      return res.json(neworder);
    } catch (e) {
      next(e);
    }
  }
  async postOrders(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest('ошибка в получении списка заказов ', errors.array()));
      }
      const { userid } = req.body;
      const orders = await orderService.postOrders(userid);
      return res.json(orders);
    } catch (e) {
      next(e);
    }

  }
}

module.exports = new OrderController();