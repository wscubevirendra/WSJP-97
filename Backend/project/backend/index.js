require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
var cookieParser = require('cookie-parser')
const categoryRouter = require('./router/category.router');
const colorRouter = require('./router/color.router');
const brandRouter = require('./router/brand.router');
const productRouter = require('./router/product.router');
const adminRouter = require('./router/admin.router');
const server = express();
server.use(express.json());
server.use(cookieParser())

server.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

server.use("/category", categoryRouter);
server.use("/color", colorRouter)
server.use("/brand", brandRouter);
server.use("/product", productRouter)
server.use("/admin", adminRouter)
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


