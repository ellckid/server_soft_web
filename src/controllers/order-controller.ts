const { validationResult } = require('express-validator');
const ApiError = require('../exceptions/api-error');
const orderService = require('../service/order-service');
export { };
class OrderController {
    async addNewOrder(req: any, res: any, next: any) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(ApiError.BadRequest('ошибка в создании нового заказа ! ', errors.array()));
            }
            const { orderdate, userid, orderlist, totalprice } = req.body;
            const neworder = await orderService.addOrder(orderdate, userid, orderlist, totalprice);
            return res.json(neworder);
        } catch (e) {
            next(e);
        }
    }
    async postOrders(req: any, res: any, next: any) {
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
