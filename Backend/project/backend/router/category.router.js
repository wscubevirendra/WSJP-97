const express = require('express');
const categoryRouter = express.Router();
const { create, read, update, status, deleteById } = require("../controller/category.controller")
const fileuploader = require('express-fileupload')


categoryRouter.post("/create", fileuploader({ createParentPath: true }), create);
categoryRouter.get("/:id?", read);
categoryRouter.patch("/status/:id", status);
categoryRouter.delete("/delete/:id", deleteById);
categoryRouter.put("/update/:id", fileuploader({ createParentPath: true }), update);

module.exports = categoryRouter