const express = require('express');
const cartRouter = express.Router();
const { dbtoCart, addcart } = require("../controller/cart.controller")
cartRouter.post("/db-to-cart", dbtoCart)
cartRouter.post("/add-cart", addcart)

module.exports = cartRouter