const express = require('express');
const productRouter = express.Router();
const { create, read, status, deleteById, images } = require("../controller/product.controller")
const fileuploader = require('express-fileupload')


productRouter.post("/create", fileuploader({ createParentPath: true }), create);
productRouter.get("/:id?", read);
productRouter.patch("/status/:id", status);
productRouter.delete("/delete/:id", deleteById);
productRouter.patch("/images/:id", fileuploader({ createParentPath: true }), images);

module.exports = productRouter