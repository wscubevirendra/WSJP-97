const mongoose=require("mongoose")

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['superadmin', 'admin'],
        default: 'admin',
    }
},
    {
        timestamps: true
    }
);

const AdminModel = mongoose.model('admins', adminSchema);

module.exports = AdminModel;
