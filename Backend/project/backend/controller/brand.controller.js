const BrandModel = require("../model/brand.model");
const { generateUniqueImageName } = require("../utility/helper");
const { createdResponse, errorResponse, serverErrorResponse, noContentResponse, successResponse, updatedResponse, deletedResponse } = require("../utility/response")
const fs = require('fs');
const path = require('path');

const brand = {
    async create(req, res) {
        try {
            const brandImage = req.files.image;
            const { name, slug } = req.body
            if (!name || !slug || !brandImage) errorResponse(res, "All field is requied");
            const imageName = generateUniqueImageName(brandImage.name)
            const destination = './public/images/brand/' + imageName
            brandImage.mv(
                destination,
                async (error) => {
                    if (error) {
                        return errorResponse(res, "File not upload");
                    } else {
                        const brand = await BrandModel.create({ name, slug, image: imageName });
                        await brand.save();
                        return createdResponse(res)
                    }


                }
            )


        } catch (error) {
            return serverErrorResponse(res, error.errmsg)
        }

    },
    async read(req, res) {
        try {
            const id = req.params.id;
            let brand = null;
            if (id) {
                brand = await BrandModel.findById(id);
            } else {
                brand = await BrandModel.find();
            }
            if (!brand) noContentResponse(res);
            return successResponse(res, "brand find", brand)
        } catch (error) {
            console.log(error)
            return serverErrorResponse(res, error.errmsg)
        }
    },
    async deleteById(req, res) {
        try {
            const id = req.params.id;
            const existingBrand = await BrandModel.findById(id);
            if (!existingBrand) return errorResponse(res, "Brand not found");
            await BrandModel.findByIdAndDelete({ _id: id })
            fs.unlinkSync(`./public/images/brand/${existingBrand.image}`)
            return deletedResponse(res)

        } catch (error) {
            console.log(error)
            return serverErrorResponse(res, error.errmsg)
        }
    }
}

module.exports = brand