const CategoryModel = require("../model/category.model");
const { generateUniqueImageName } = require("../utility/helper");
const { createdResponse, errorResponse, serverErrorResponse, noContentResponse, successResponse, updatedResponse, deletedResponse } = require("../utility/response")
const fs = require('fs');
const path = require('path');

const category = {
    async create(req, res) {
        try {
            const categoryImage = req.files.image;
            const { name, slug } = req.body
            if (!name || !slug || !categoryImage) errorResponse(res, "All field is requied");
            const imageName = generateUniqueImageName(categoryImage.name)
            const destination = './public/images/category/' + imageName
            categoryImage.mv(
                destination,
                async (error) => {
                    if (error) {
                        return errorResponse(res, "File not upload");
                    } else {
                        const category = await CategoryModel.create({ name, slug, image: imageName });
                        await category.save();
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
            let category = null;
            if (id) {
                category = await CategoryModel.findById(id);
            } else {
                category = await CategoryModel.find();
            }
            if (!category) noContentResponse(res);
            return successResponse(res, "category find", category)
        } catch (error) {
            console.log(error)
            return serverErrorResponse(res, error.errmsg)
        }
    },
    async update(req, res) {
        try {
            const id = req.params.id;
            const { name, slug } = req.body;
            const categoryImage = req.files?.image;

            // Find existing category
            const existingCategory = await CategoryModel.findById(id);
            if (!existingCategory) return errorResponse(res, "Category not found");

            // Prepare update object
            let updateData = {};
            if (name) updateData.name = name;
            if (slug) updateData.slug = slug;

            if (categoryImage) {
                // Generate unique name and path
                const imageName = generateUniqueImageName(categoryImage.name);
                const destination = './public/images/category/' + imageName;

                // Save new image
                categoryImage.mv(destination, async (error) => {
                    if (error) return errorResponse(res, "File not uploaded");

                    // Delete old image if it exists
                    const oldImagePath = path.join(__dirname, '../public/images/category/', existingCategory.image);
                    if (fs.existsSync(oldImagePath)) {
                        fs.unlinkSync(oldImagePath);
                    }

                    // Add image name to update
                    updateData.image = imageName;

                    // Perform update
                    await CategoryModel.findByIdAndUpdate(id, { $set: updateData });
                    return updatedResponse(res, "Category updated successfully");
                });
            } else {
                // No new image: just update name/slug
                await CategoryModel.findByIdAndUpdate(id, { $set: updateData });
                return updatedResponse(res, "Category updated successfully");
            }

        } catch (error) {
            console.error(error);
            return serverErrorResponse(res, error.message || "Internal Server Error");
        }
    },
    async status(req, res) {
        try {
            const id = req.params.id;
            const existingCategory = await CategoryModel.findById(id);
            if (!existingCategory) return errorResponse(res, "Category not found");
            await CategoryModel.findByIdAndUpdate(
                { _id: id },
                {
                    $set: {
                        status: !existingCategory.status
                    }
                }
            )
            return updatedResponse(res, "Category Status Update..")

        } catch (error) {
            console.log(error)
            return serverErrorResponse(res, error.errmsg)
        }
    },
    async deleteById(req, res) {
        try {
            const id = req.params.id;
            const existingCategory = await CategoryModel.findById(id);
            if (!existingCategory) return errorResponse(res, "Category not found");
            await CategoryModel.findByIdAndDelete({ _id: id })
            fs.unlinkSync(`./public/images/category/${existingCategory.image}`)
            return deletedResponse(res)

        } catch (error) {
            console.log(error)
            return serverErrorResponse(res, error.errmsg)
        }
    }
}

module.exports = category