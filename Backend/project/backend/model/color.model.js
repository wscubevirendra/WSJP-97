const mongoose = require("mongoose");

const colorSchema = new mongoose.Schema({
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
    hexcode: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
}
)

const colorModel = mongoose.model("Color", colorSchema);
module.exports = colorModel

