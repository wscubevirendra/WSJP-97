const express = require('express');
const brandRouter = express.Router();
const { create, read, deleteById } = require("../controller/brand.controller")
const fileuploader = require('express-fileupload')


brandRouter.post("/create", fileuploader({ createParentPath: true }), create);
brandRouter.get("/:id?", read);
brandRouter.delete("/delete/:id", deleteById);

module.exports = brandRouter