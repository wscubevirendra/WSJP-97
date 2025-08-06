const express = require('express');
const adminRouter = express.Router();
const { login ,logout} = require("../controller/admin.controller")
adminRouter.post("/login",login)
adminRouter.get("/logout",logout)
module.exports = adminRouter