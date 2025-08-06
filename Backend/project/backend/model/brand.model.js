const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        default: null
    },
    status: {
        type: Boolean,
        default: true
    },
}, {
    timestamps: true
}
)

const BrandModel = mongoose.model("Brand", brandSchema);
module.exports = BrandModel;

