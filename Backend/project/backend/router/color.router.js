const express = require('express');
const colorRouter = express.Router();
const { create, read, update, status, deleteById } = require("../controller/color.controller")
const authMiddleware = require('../middleware/authMiddleware')



colorRouter.post("/create", authMiddleware, create);
colorRouter.get("/:id?", read);
colorRouter.patch("/status/:id", status);
colorRouter.delete("/delete/:id", deleteById);
colorRouter.put("/update/:id", update);

module.exports = colorRouter