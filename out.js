var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// src/models/user-model.js
var require_user_model = __commonJS({
  "src/models/user-model.js"(exports, module2) {
    var { Schema, model } = require("mongoose");
    var UserSchema = new Schema({
      name: { type: String },
      email: { type: String, unique: true, required: true },
      password: { type: String, required: true },
      isActivated: { type: Boolean, default: false },
      activationLink: { type: String }
    });
    module2.exports = model("User", UserSchema);
  }
});

// src/service/mail-service.js
var require_mail_service = __commonJS({
  "src/service/mail-service.js"(exports, module2) {
    var nodemailer = require("nodemailer");
    var MailService = class {
      constructor() {
        this.transporter = nodemailer.createTransport({
          // host: 'smtp.gmail.com',
          // port: 587,
          // secure: false,
          service: "gmail",
          auth: {
            user: "soft.web.mail.ru@gmail.com",
            pass: "ldntcmradqmqbfjd"
          }
        });
      }
      async sendActivationMail(to, link) {
        await this.transporter.sendMail({
          from: "soft.web.mail.ru@gmail.com",
          to,
          subject: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u043F\u043E\u0447\u0442\u044B \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 " + process.env.API_URL,
          text: "",
          html: `
            <!DOCTYPE html><html lang="ru"><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1 user-scalable=no"><link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap" rel="stylesheet"><link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <title>Soft web</title> </head> <style> body{ font-family: "Comfortaa", cursive; background-color: #FFDC8D; margin: 0; } .logo{ height: 10%; width: auto; display: flex; margin: 5% auto; } @media (min-width:600px) { .mail{ display: flex; flex-direction: column; justify-content: center; background-color: #FFDC8D; margin: 0 auto; width: 600px; height: 600px; } .mail_title{ font-family: 'Comfortaa'; font-style: normal; font-weight: 700; font-size: 36px; line-height: 40px; text-align: center; color: #000000; } .mail_h2_title{ font-family: 'Comfortaa'; font-style: normal; font-weight: 500; font-size: 16px; line-height: 18px; text-align: center; color: #001227; } .mail_h3_title{ font-family: 'Comfortaa'; font-style: normal; font-weight: 500; font-size: 14px; line-height: 16px; text-align: center; color: #00070F; } .mail_link{ font-family: 'Comfortaa'; font-style: normal; font-weight: 700; font-size: 20px; line-height: 22px; text-align: center; color: #53A0ED; } } @media (max-width:601px) { .mail{ display: flex; flex-direction: column; justify-content: center; background-color: #FFDC8D; margin: 0 auto; width: 300px; height: 600px; } .mail_title{ font-family: 'Comfortaa'; font-style: normal; font-weight: 700; font-size: 32px; line-height: 40px; text-align: center; color: #000000; } .mail_h2_title{ width: 90%; margin: 0 auto; font-family: 'Comfortaa'; font-style: normal; font-weight: 500; font-size: 14px; line-height: 18px; text-align: center; color: #001227; } .mail_h3_title{ width: 90%; margin: 0 auto; font-family: 'Comfortaa'; font-style: normal; font-weight: 500; font-size: 12px; line-height: 16px; text-align: center; color: #00070F; } .mail_link{ width: 90%; margin: 0 auto; font-family: 'Comfortaa'; font-style: normal; font-weight: 700; font-size: 18px; line-height: 22px; text-align: center; color: #53A0ED; } } .mail_page{ display: flex; flex-direction: column; justify-content: center; height: 70%; gap: 5%; background-color: #fff; border-radius: 50px; } </style> <body > <div class="mail"> <img class="logo" src="https://ellckid.com/assets/img/logo.png" /> <div class="mail_page"> <h1 class="mail_title"> \u041F\u0440\u0438\u0432\u0435\u0442 !</h1> <h2 class="mail_h2_title">\u0420\u0430\u0434\u044B \u0432\u0438\u0434\u0435\u0442\u044C \u0412\u0430\u0441 \u0432 \u043D\u0430\u0448\u0435\u043C \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0435</h2> <h3 class="mail_h3_title">\u0414\u043B\u044F \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043F\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043F\u043E \u0441\u0441\u044B\u043B\u043A\u0435 \u043D\u0438\u0436\u0435</h3> <a class="mail_link" href=${link}> ${link}</a> </div> </div> </body> </html>
            `
        });
      }
    };
    module2.exports = new MailService();
  }
});

// src/models/token-model.js
var require_token_model = __commonJS({
  "src/models/token-model.js"(exports, module2) {
    var { Schema, model } = require("mongoose");
    var TokenSchema = new Schema({
      user: { type: Schema.Types.ObjectId, ref: "user" },
      refreshToken: { type: String, required: true }
    });
    module2.exports = model("Token", TokenSchema);
  }
});

// src/service/token-service.js
var require_token_service = __commonJS({
  "src/service/token-service.js"(exports, module2) {
    var jwt = require("jsonwebtoken");
    var tokenModel = require_token_model();
    var TokenService = class {
      generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: "30m" });
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: "30d" });
        return {
          accessToken,
          refreshToken
        };
      }
      async saveToken(userId, refreshToken) {
        const tokenData = await tokenModel.findOne({ user: userId });
        if (tokenData) {
          tokenData.refreshToken = refreshToken;
          return tokenData.save();
        }
        const token = await tokenModel.create({ user: userId, refreshToken });
        return token;
      }
      async removeToken(refreshToken) {
        const tokenData = await tokenModel.deleteOne({ refreshToken });
        return tokenData;
      }
      async findToken(refreshToken) {
        const tokenData = await tokenModel.findOne({ refreshToken });
        return tokenData;
      }
      validateAccessToken(token) {
        try {
          const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
          return userData;
        } catch (e) {
          return null;
        }
      }
      validateRefreshToken(token) {
        try {
          const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
          return userData;
        } catch (e) {
          return null;
        }
      }
    };
    module2.exports = new TokenService();
  }
});

// src/dtos/user-dto.js
var require_user_dto = __commonJS({
  "src/dtos/user-dto.js"(exports, module2) {
    module2.exports = class UserDto {
      name;
      email;
      id;
      isActivated;
      constructor(model) {
        this.name = model.name;
        this.email = model.email;
        this.id = model._id;
        this.isActivated = model.isActivated;
      }
    };
  }
});

// src/exceptions/api-error.js
var require_api_error = __commonJS({
  "src/exceptions/api-error.js"(exports, module2) {
    module2.exports = class ApiError extends Error {
      status;
      errors;
      constructor(status, message, errors = []) {
        super(message);
        this.status = status;
        this.errors = errors;
      }
      static UnauthorizedError() {
        return new ApiError(401, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043D\u0435 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u043D (");
      }
      static BadRequest(message, errors = []) {
        return new ApiError(400, message, errors);
      }
    };
  }
});

// src/service/user-service.js
var require_user_service = __commonJS({
  "src/service/user-service.js"(exports, module2) {
    var UserModel = require_user_model();
    var bcrypt = require("bcrypt");
    var uuid = require("uuid");
    var mailService = require_mail_service();
    var tokenService = require_token_service();
    var UserDto = require_user_dto();
    var ApiError = require_api_error();
    var userModel = require_user_model();
    var userService = class {
      async registration(name, email, password) {
        const candidate = await UserModel.findOne({ email });
        if (candidate) {
          throw ApiError.BadRequest("\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0441 \u0442\u0430\u043A\u043E\u0439 \u043F\u043E\u0447\u0442\u043E\u0439 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 ! ");
        }
        const hashPassword = await bcrypt.hash(password, 3);
        const activationLink = uuid.v4();
        const user = await UserModel.create({ name, email, password: hashPassword, activationLink });
        await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`);
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({ ...userDto });
        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return {
          ...tokens,
          user: userDto
        };
      }
      async activate(activationLink) {
        const user = await UserModel.findOne({ activationLink });
        if (!user) {
          throw ApiError.BadRequest("\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0430\u044F \u0441\u0441\u044B\u043B\u043A\u0430 \u0430\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u0438 ( ");
        }
        user.isActivated = true;
        await user.save();
      }
      async login(email, password) {
        const user = await userModel.findOne({ email });
        if (!user) {
          throw ApiError.BadRequest("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0441 \u0442\u0430\u043A\u0438\u043C email \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D (");
        }
        const isPassEquals = await bcrypt.compare(password, user.password);
        if (!isPassEquals) {
          throw ApiError.BadRequest("\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C (");
        }
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({ ...userDto });
        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return { ...tokens, user: userDto };
      }
      async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken);
        return token;
      }
      async refresh(refreshToken) {
        if (!refreshToken) {
          throw ApiError.UnauthorizedError();
        }
        const userData = tokenService.validateRefreshToken(refreshToken);
        const tokenFromDb = await tokenService.findToken(refreshToken);
        if (!userData || !tokenFromDb) {
          throw ApiError.UnauthorizedError();
        }
        const user = await UserModel.findById(userData.id);
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({ ...userDto });
        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return { ...tokens, user: userDto };
      }
      async getAllUsers() {
        const users = await userModel.find();
        return users;
      }
    };
    module2.exports = new userService();
  }
});

// src/controllers/user-controller.js
var require_user_controller = __commonJS({
  "src/controllers/user-controller.js"(exports, module2) {
    var userService = require_user_service();
    var { validationResult } = require("express-validator");
    var ApiError = require_api_error();
    var UserController = class {
      async registration(req, res, next) {
        try {
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            return next(ApiError.BadRequest("\u043E\u0448\u0438\u0431\u043A\u0430 \u0432 \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u0438 \u043F\u043E\u0447\u0442\u044B \u0438\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044F", errors.array()));
          }
          const { name, email, password } = req.body;
          const userData = await userService.registration(name, email, password);
          res.cookie("refreshToken", userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1e3, httpsOnly: true });
          return res.json(userData);
        } catch (e) {
          next(e);
        }
      }
      async login(req, res, next) {
        try {
          const { email, password } = req.body;
          const userData = await userService.login(email, password);
          res.cookie("refreshToken", userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1e3, httpsOnly: true });
          return res.json(userData);
        } catch (e) {
          next(e);
        }
      }
      async logout(req, res, next) {
        try {
          const { refreshToken } = req.cookies;
          const token = await userService.logout(refreshToken);
          res.clearCookie("refreshToken");
          return res.json(token);
        } catch (e) {
          next(e);
        }
      }
      async activate(req, res, next) {
        try {
          const activationLink = req.params.link;
          await userService.activate(activationLink);
          return res.redirect(process.env.CLIENT_URL);
        } catch (e) {
          next(e);
        }
      }
      async refresh(req, res, next) {
        try {
          const { refreshToken } = req.cookies;
          const userData = await userService.refresh(refreshToken);
          res.cookie("refreshToken", userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1e3, httpsOnly: true });
          return res.json(userData);
        } catch (e) {
          next(e);
        }
      }
      async getUsers(req, res, next) {
        try {
          const users = await userService.getAllUsers();
          return res.json(users);
        } catch (e) {
          next(e);
        }
      }
    };
    module2.exports = new UserController();
  }
});

// src/middlewares/auth-middleware.js
var require_auth_middleware = __commonJS({
  "src/middlewares/auth-middleware.js"(exports, module2) {
    var ApiError = require_api_error();
    var tokenService = require_token_service();
    module2.exports = function(req, res, next) {
      try {
        const authorizationHeader = req.headers.authorization;
        if (!authorizationHeader) {
          return next(ApiError.UnauthorizedError());
        }
        const accessToken = authorizationHeader.split(" ")[1];
        if (!accessToken) {
          return next(ApiError.UnauthorizedError());
        }
        const userData = tokenService.validateAccessToken(accessToken);
        if (!userData) {
          return next(ApiError.UnauthorizedError());
        }
        req.user = userData;
        next();
      } catch (e) {
        return next(ApiError.UnauthorizedError());
      }
    };
  }
});

// src/models/product-model.js
var require_product_model = __commonJS({
  "src/models/product-model.js"(exports, module2) {
    var { Schema, model } = require("mongoose");
    var ProductSchema = new Schema({
      title: { type: String, required: true },
      color: { type: String, required: true },
      price: { type: Number, required: true },
      url: { type: String, required: true }
    });
    module2.exports = model("Product", ProductSchema);
  }
});

// src/service/product-service.js
var require_product_service = __commonJS({
  "src/service/product-service.js"(exports, module2) {
    var jwt = require("jsonwebtoken");
    var productModel = require_product_model();
    var tokenModel = require_token_model();
    var ProductService = class {
      async findAll() {
        const productList = await productModel.find();
        return productList;
      }
    };
    module2.exports = new ProductService();
  }
});

// src/controllers/product-controller.js
var require_product_controller = __commonJS({
  "src/controllers/product-controller.js"(exports, module2) {
    var productService = require_product_service();
    var ProductController = class {
      async getAllProducts(req, res, next) {
        try {
          const productData = await productService.findAll();
          return res.json(productData);
        } catch (e) {
          next(e);
        }
      }
    };
    module2.exports = new ProductController();
  }
});

// src/models/order-model.js
var require_order_model = __commonJS({
  "src/models/order-model.js"(exports, module2) {
    var { Schema, model } = require("mongoose");
    var OrderSchema = new Schema({
      orderdate: { type: String, required: true },
      userid: { type: String, required: true },
      orderlist: { type: Array },
      totalprice: { type: Number, required: true }
    });
    module2.exports = model("Order", OrderSchema);
  }
});

// src/service/order-service.js
var require_order_service = __commonJS({
  "src/service/order-service.js"(exports, module2) {
    var orderModel = require_order_model();
    var OrderService = class {
      async addOrder(orderdate, userid, orderlist, totalprice) {
        const neworder = await orderModel.create({ orderdate, userid, orderlist, totalprice });
        return {
          order: neworder
        };
      }
      async postOrders(userid) {
        const orders = await orderModel.find({ userid });
        return orders;
      }
    };
    module2.exports = new OrderService();
  }
});

// src/controllers/order-controller.js
var require_order_controller = __commonJS({
  "src/controllers/order-controller.js"(exports, module2) {
    var { validationResult } = require("express-validator");
    var ApiError = require_api_error();
    var orderService = require_order_service();
    var OrderController = class {
      async addNewOrder(req, res, next) {
        try {
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            return next(ApiError.BadRequest("\u043E\u0448\u0438\u0431\u043A\u0430 \u0432 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438 \u043D\u043E\u0432\u043E\u0433\u043E \u0437\u0430\u043A\u0430\u0437\u0430 ! ", errors.array()));
          }
          const { orderdate, userid, orderlist, totalprice } = req.body;
          const neworder = await orderService.addOrder(orderdate, userid, orderlist, totalprice);
          return res.json(neworder);
        } catch (e) {
          next(e);
        }
      }
      async postOrders(req, res, next) {
        try {
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            return next(ApiError.BadRequest("\u043E\u0448\u0438\u0431\u043A\u0430 \u0432 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438 \u0441\u043F\u0438\u0441\u043A\u0430 \u0437\u0430\u043A\u0430\u0437\u043E\u0432 ", errors.array()));
          }
          const { userid } = req.body;
          const orders = await orderService.postOrders(userid);
          return res.json(orders);
        } catch (e) {
          next(e);
        }
      }
    };
    module2.exports = new OrderController();
  }
});

// src/router/index.js
var require_router = __commonJS({
  "src/router/index.js"(exports, module2) {
    var Router = require("express").Router;
    var userController = require_user_controller();
    var router2 = new Router();
    var { body } = require("express-validator");
    var authMiddleware = require_auth_middleware();
    var productController = require_product_controller();
    var orderController = require_order_controller();
    router2.post("/addorder", authMiddleware, orderController.addNewOrder);
    router2.post("/postorders", authMiddleware, orderController.postOrders);
    router2.post(
      "/registration",
      body("name"),
      body("email").isEmail(),
      body("password").isLength({ min: 3, max: 32 }),
      userController.registration
    );
    router2.post("/login", userController.login);
    router2.post("/logout", userController.logout);
    router2.get("/activate/:link", userController.activate);
    router2.get("/refresh", userController.refresh);
    router2.get("/users", authMiddleware, userController.getUsers);
    router2.get("/products", authMiddleware, productController.getAllProducts);
    module2.exports = router2;
  }
});

// src/middlewares/error-middleware.js
var require_error_middleware = __commonJS({
  "src/middlewares/error-middleware.js"(exports, module2) {
    var ApiError = require_api_error();
    module2.exports = function(err, req, res, next) {
      console.log(err);
      if (err instanceof ApiError) {
        return res.status(err.status).json({
          message: err.message,
          errors: err.errors
        });
      }
      return res.status(500).json({ message: "\u044F \u0445\u0437 \u0447\u0435 \u044D\u0442\u043E \u0437\u0430 \u043E\u0448\u0438\u0431\u043A\u0430, \u043F\u043E\u0445\u043E\u0434\u0443 \u0431\u0435\u0434\u0430 \u043F\u043E\u043B\u043D\u0430\u044F " });
    };
  }
});

// src/index.js
require("dotenv").config();
var express = require("express");
var cors = require("cors");
var cookieParser = require("cookie-parser");
var mongoose = require("mongoose");
var router = require_router();
var errorMiddleware = require_error_middleware();
var PORT = process.env.PORT || 5100;
var app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: process.env.CLIENT_URL
}));
app.use("/api", router);
app.use(errorMiddleware);
var start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    app.listen(PORT, () => console.log("server started"));
  } catch (e) {
    console.log(e);
  }
};
start();
