const express = require('express');
const categoryRouter = express.Router();
const { create, read } = require("../controller/category.controller")


categoryRouter.post("/create", create);
categoryRouter.get("/", read);

module.exports = categoryRouter