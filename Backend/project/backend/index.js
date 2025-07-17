const express = require('express');
const mongoose = require('mongoose');
const server = express();



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


