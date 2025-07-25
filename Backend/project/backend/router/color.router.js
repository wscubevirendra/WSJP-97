const express = require('express');
const colorRouter = express.Router();
const { create, read, update, status, deleteById } = require("../controller/color.controller")



colorRouter.post("/create", create);
colorRouter.get("/:id?", read);
colorRouter.patch("/status/:id", status);
colorRouter.delete("/delete/:id", deleteById);
colorRouter.put("/update/:id", update);

module.exports = colorRouter