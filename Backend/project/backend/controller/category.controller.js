const CategoryModel = require("../model/category.model");
const { createdResponse, errorResponse, serverErrorResponse, noContentResponse,successResponse } = require("../utility/response")

const category = {
    async create(req, res) {
        try {
            const { name, slug } = req.body
            if (!name || !slug) errorResponse(res, "Name is requied")
            const category = await CategoryModel.create({ name, slug });
            await category.save();
            return createdResponse(res)
        } catch (error) {
            return serverErrorResponse(res, error.errmsg)
        }

    },
    async read(req, res) {
        try {
            const category = await CategoryModel.find();
            if (!category) noContentResponse(res);
            return successResponse(res, "category find", category)
        } catch (error) {
            console.log(error)
            return serverErrorResponse(res, error.errmsg)
        }
    }
}

module.exports = category