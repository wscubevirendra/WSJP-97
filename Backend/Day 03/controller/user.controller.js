const UserModel = require("../model/user.model")

const user = {
    async create(req, res) {
        try {
            const userExitsing = await UserModel.findOne({ email: req.body.email });

            if (userExitsing) {
                return res.status(500).json({
                    message: "Try  with diff. email id ",
                    success: false,
                    status: "error"
                })
            }
            const user = await UserModel.create({
                name: req.body.name,
                email: req.body.email,
                contact: req.body.contact,
                password: req.body.password
            })

            await user.save();


            res.status(201).json({
                message: "User accound create",
                success: true,
                status: "success"
            })


        } catch (err) {
            console.log(err)
            res.status(500).json({
                message: "Internal Server error",
                success: false,
                status: "error"
            })
        }
    },

    async read(req, res) {
        try {
            const users = await UserModel.find();
            res.status(200).json({
                message: "User find",
                success: true,
                status: "success",
                users: users
            })

        } catch (error) {
            res.status(500).json({
                message: "Internal Server error",
                success: false,
                status: "error"
            })
        }
    },
    async userdelete(req, res) {
        try {
            const id = req.params.id
            if (id) {
                await UserModel.findByIdAndDelete(id)
                res.status(200).json({
                    message: "User delete",
                    success: true,
                    status: "success"
                })
            }

        } catch (error) {
            res.status(500).json({
                message: "Internal Server error",
                success: false,
                status: "error"
            })
        }
    },
    async statusUpdate(req, res) {
        try {
            const id = req.params.id;
            const user = await UserModel.findById(id);
            await UserModel.updateOne(
                { _id: id },
                {
                    $set: {
                        status: !user.status
                    }
                }
            )

            res.status(200).json({
                message: "User status update",
                success: true,
                status: "success"
            })

        } catch (error) {
            res.status(500).json({
                message: "Internal Server error",
                success: false,
                status: "error"
            })
        }
    }
}

module.exports = user