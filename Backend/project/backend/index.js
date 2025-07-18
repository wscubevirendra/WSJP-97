const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const categoryRouter = require('./router/category.router');
const server = express();
server.use(express.json());
server.use(cors([{ origin: "http://localhost:3000" }]));
server.use("/category", categoryRouter)

mongoose.connect("mongodb://localhost:27017/", {
    dbName: "wsjp97"
}).then(
    () => {
        console.log("DataBase Connect")
        server.listen(5000, () => {
            console.log(`Server is listening on port 5000`);
        });
    }
).catch(
    () => {
        console.log("Unable to connect database")
    }
)


