const express = require('express');
const categoryRouter = express.Router();
const { create, read, update, status, deleteById } = require("../controller/category.controller")
const mi = require("../middleware/authMiddleware")
const fileuploader = require('express-fileupload')
const authMiddleware = require('../middleware/authMiddleware')


categoryRouter.post("/create", [authMiddleware, fileuploader({ createParentPath: true })], create);
categoryRouter.get("/:id?", read);
categoryRouter.patch("/status/:id", authMiddleware, status);
categoryRouter.delete("/delete/:id", deleteById);
categoryRouter.put("/update/:id", fileuploader({ createParentPath: true }), update);

module.exports = categoryRouter