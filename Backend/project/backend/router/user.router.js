const userRouter = require('express').Router();
const { register, login,address } = require("../controller/user.controller")
userRouter.post("/register", register)
userRouter.post("/login", login)
userRouter.patch('/address-update/:id', address)
module.exports = userRouter