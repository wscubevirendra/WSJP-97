const jwt = require('jsonwebtoken');
const userModel = require('../model/user.model');
const { successResponse, errorResponse, serverErrorResponse, createdResponse, updatedResponse } = require('../utility/response');
const Cryptr = require('cryptr');
const cryptr = new Cryptr(process.env.SECRET_KEY);

const user = {
    async register(req, res) {
        try {
            const { email, password, name } = req.body;
            const encryptedPass = cryptr.encrypt(password);

            // 1. Find user
            const existingUser = await userModel.findOne({ email });
            if (existingUser) return errorResponse(res, "Try with diffrent email id");
            const user = await userModel.create({ name, email, password: encryptedPass })
            await user.save()

            const token = jwt.sign({ id: user._id }, process.env.REFRESH_TOKEN_SECRET, {
                expiresIn: '7d',
            });

            return createdResponse(res, "User Account create", {
                token,
                user: { ...user.toJSON(), password: null },
            });

        } catch (error) {
            console.log(error)
            return serverErrorResponse(res, error.message || "Internal server error");
        }
    },
    async login(req, res) {
        try {
            const { email, password } = req.body;
            // 1. Find user
            const user = await userModel.findOne({ email });
            const decryPass = cryptr.decrypt(user.password);
            if (password !== decryPass) {
                return errorResponse(res, "invalid password")
            }
            const token = jwt.sign({ id: user._id }, process.env.REFRESH_TOKEN_SECRET, {
                expiresIn: '7d',
            });

            return successResponse(res, "User Login", {
                token,
                user: { ...user.toJSON(), password: null },
            });

        } catch (error) {
            return serverErrorResponse(res, error.message || "Internal server error");
        }
    },
    async address(req, res) {
        try {
            const userId = req.params.id;
            const { address } = req.body
            const userData = await userModel.findByIdAndUpdate(
                userId,
                { $push: { shipping_address: address } },
                { new: true }
            )

            return updatedResponse(res)

        } catch (error) {
            return serverErrorResponse(res, error.message || "Internal server error");

        }

    }
}

module.exports = user