const Router = require('express').Router;
const userController = require('../controllers/user-controller');
const { body } = require('express-validator');
const authMiddleware = require('../middlewares/auth-middleware');
const productController = require('../controllers/product-controller');
const orderController = require('../controllers/order-controller');

const router = new Router();
export { };


router.post('/addorder', authMiddleware, orderController.addNewOrder)
router.post('/postorders', authMiddleware, orderController.postOrders)
router.post('/registration',
    body('name'),
    body('email').isEmail(),
    body('password').isLength({ min: 3, max: 32 }),
    userController.registration);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/users', authMiddleware, userController.getUsers);
router.get('/products', authMiddleware, productController.getAllProducts)



module.exports = router;
