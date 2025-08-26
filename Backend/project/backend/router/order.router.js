const orderRouter = require('express').Router();
const { orderPlace } = require("../controller/order.controller")
orderRouter.post("/order-place", orderPlace)

module.exports = orderRouter