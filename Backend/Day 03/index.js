const express = require("express");
const mongoose = require("mongoose");
const server = express();
server.use(express.json())

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        default: null

    },
    status: {
        type: Boolean,
        default: true
    }

})

const UserModel = mongoose.model("user", userSchema)



server.post("/user/create", async (req, res) => {
    try {
        const user = await UserModel.create({
            name: req.body.name,
            email: req.body.email,
            contact: req.body.contact,
            password:req.body.password
        })

        await user.save()
        res.status(201).json({
            message: "User create ",
            flag: 1
        })


    } catch (err) {
        res.status(500).json({
            message: "Internal Server error",
            flag: 0
        })
    }


})




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

