const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const server = express();
const UserRoute = require("./router/user.router")
server.use(express.json())
server.use(cors([{ origin: "http://localhost:3000" }]));
server.use("/user", UserRoute)


mongoose.connect("mongodb://localhost:27017/", { dbName: "wsjp97" }).then(
    () => {
        console.log("DataBase connect")
        server.listen(
            5000,
            () => {
                console.log("Server Started")
            }
        )

    }
).catch(
    () => {
        console.log("Unable to connect dataBase")
    }
)

