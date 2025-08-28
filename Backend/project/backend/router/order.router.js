const orderRouter = require('express').Router();

const { orderPlace,orderSuccess,getOrder } = require("../controller/order.controller")
orderRouter.post("/order-place", orderPlace)
orderRouter.post('/success',orderSuccess)
orderRouter.get('/',getOrder)

module.exports = orderRouter