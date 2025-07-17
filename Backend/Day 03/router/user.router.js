const express = require("express");
const UserRoute = express.Router();
const user = require("../controller/user.controller")


UserRoute.post("/create", user.create);
UserRoute.get("/", user.read);
UserRoute.delete("/delete/:id", user.userdelete);
UserRoute.patch("/status-update/:id", user.statusUpdate);


module.exports = UserRoute
