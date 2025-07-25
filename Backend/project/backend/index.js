require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const categoryRouter = require('./router/category.router');
const server = express();
server.use(express.json());
server.use(cors([{ origin: "http://localhost:3000" }]));
server.use("/category", categoryRouter);
server.use(express.static('public'));

mongoose.connect(process.env.DATABASE_URL, {
    dbName: process.env.DATABSE_NAME
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


