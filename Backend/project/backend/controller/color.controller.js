const colorModel = require("../model/color.model");
const { createdResponse, errorResponse, serverErrorResponse, noContentResponse, successResponse, updatedResponse, deletedResponse } = require("../utility/response")

const color = {
    async create(req, res) {
        try {
            const { name, slug, hexcode } = req.body;
            if (!name || !slug || !hexcode) return errorResponse(res, "All fields are required");
            const color = await colorModel.create({ name, slug, hexcode });
            await color.save();
            return createdResponse(res, "Color created successfully", color);

        } catch (error) {
            console.log(error)
            return serverErrorResponse(res, error.errmsg)
        }

    },
    async read(req, res) {
        try {
            const id = req.params.id;
            let color = null;
            if (id) {
                color = await colorModel.findById(id);
            } else {
                color = await colorModel.find();
            }
            if (!color) noContentResponse(res);
            return successResponse(res, "color find", color)
        } catch (error) {
            console.log(error)
            return serverErrorResponse(res, error.errmsg)
        }
    },
    async update(req, res) {
        try {
            const id = req.params.id;
            const { name, slug, hexcode } = req.body;
            if (!name || !slug || !hexcode) return errorResponse(res, "All fields are required");
            const existingColor = await colorModel.findById(id);
            if (!existingColor) return errorResponse(res, "Color not found");
            existingColor.name = name;
            existingColor.slug = slug;
            existingColor.hexcode = hexcode;
            await existingColor.save();
            return updatedResponse(res, "Color updated successfully");
        } catch (error) {
            console.error(error);
            return serverErrorResponse(res, error.message || "Internal Server Error");
        }
    },
    async status(req, res) {
        try {
            const id = req.params.id;
            const existingColor = await colorModel.findById(id);
            if (!existingColor) return errorResponse(res, "Color not found");
            await colorModel.findByIdAndUpdate(
                { _id: id },
                {
                    $set: {
                        status: !existingColor.status
                    }
                }
            )
            return updatedResponse(res, "Color Status Update..")

        } catch (error) {
            return serverErrorResponse(res, error.errmsg)
        }
    },
    async deleteById(req, res) {
        try {
            const id = req.params.id;
            const existingColor = await colorModel.findById(id);
            if (!existingColor) return errorResponse(res, "Color not found");
            await colorModel.findByIdAndDelete({ _id: id })
            return deletedResponse(res)

        } catch (error) {
            return serverErrorResponse(res, error.errmsg)
        }
    }
}

module.exports = color