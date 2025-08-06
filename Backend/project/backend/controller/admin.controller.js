const jwt = require('jsonwebtoken');
const AdminModel = require('../model/admin.model');
const { successResponse, errorResponse, serverErrorResponse } = require('../utility/response');



const generateRefreshToken = (payload) => {
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: '7d',
    });
};

const admin = {
    async login(req, res) {
        try {
            const { email, password } = req.body;

            // 1. Find admin
            const adminData = await AdminModel.findOne({ email });
            if (!adminData) return errorResponse(res, "Admin not found");
            if (password !== adminData.password) return errorResponse(res, "Incorrect password");

            // 3. Create payload
            const payload = {
                id: adminData._id,
                role: adminData.role,
                email: adminData.email
            };

            const token = generateRefreshToken(payload);

            // 5. Set refresh token in HttpOnly cookie
            res.cookie('admin_token', token, {
                httpOnly: false,
                secure: false,
                sameSite: 'strict',
                maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
            });

            // 6. Send access token in response
            return successResponse(res, "Admin login successful", {
                token,
                admin: {
                    id: adminData._id,
                    name: adminData.name,
                    role: adminData.role,
                    email: adminData.email
                }
            });

        } catch (error) {
            console.log(error)
            return serverErrorResponse(res, error.message || "Internal server error");
        }
    },
    async logout(req, res) {
        try {
            res.clearCookie('admin_token', {
                httpOnly: true,
                secure: true, // Set to false only in development if not using HTTPS
                sameSite: 'strict',
            });

            return res.status(200).json({ message: 'Logged out successfully' });

        } catch (error) {
            return serverErrorResponse(res, error.message || "Internal server error");
        }
    }

}



module.exports = admin