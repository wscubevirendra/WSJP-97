const { json } = require("express");
const ProductModel = require("../model/product.model");
const CategoryModel = require("../model/category.model");
const ColorModel = require("../model/color.model");
const BrandModel = require("../model/brand.model");
const { generateUniqueImageName } = require("../utility/helper");
const { createdResponse, errorResponse, serverErrorResponse, noContentResponse, successResponse, updatedResponse, deletedResponse } = require("../utility/response")
const fs = require('fs');
const path = require('path');

const product = {
    async create(req, res) {
        try {


            const image = req.files.thumbnail;
            const { name, slug, shortDescription, longDescription, originalPrice, discountPercentage, finalPrice, categoryId, brandId, colors } = req.body
            // console.log(name, slug, shortDescription, longDescription, originalPrice, discountPercentage, finalPrice, categoryId, brandId, colors)
            // if (!name || !slug || !shortDescription || !longDescription || !originalPrice || !discountPercentage || !finalPrice || !categoryId || !brandId || !colors ) {
            //     return errorResponse(res, "All field is requied");
            // }
            const thumbnail = generateUniqueImageName(image.name)
            const destination = './public/images/product/' + thumbnail
            image.mv(
                destination,
                async (error) => {
                    if (error) {
                        return errorResponse(res, "File not upload");
                    } else {
                        const product = await ProductModel.create({ name, slug, shortDescription, longDescription, originalPrice, discountPercentage, finalPrice, categoryId, brandId, colors: JSON.parse(colors), thumbnail });
                        await product.save();
                        return createdResponse(res, "Product created successfully", product);
                    }

                }
            )


        } catch (error) {
            console.log(error)
            return serverErrorResponse(res, error.errmsg)
        }

    },
    async read(req, res) {
        try {
            const { categorySlug, colorSlug, brandSlug } = req.query;
            const filterQuery = {};
            const id = req.params.id;
            let product = null;
            if (categorySlug) {
                const category = await CategoryModel.findOne({ slug: categorySlug });
                filterQuery.categoryId = category._id
            }
            if (colorSlug) {
                const color = await ColorModel.findOne({ slug: colorSlug });
                filterQuery.colors = color._id
            }
            if (brandSlug) {
                const brand = await BrandModel.findOne({ slug: brandSlug });
                filterQuery.brandId = brand._id
            }

            if (id) {
                product = await ProductModel.findById(id);
            } else {
                product = await ProductModel.find(filterQuery).populate(["categoryId", "brandId", "colors"]);
            }
            if (!product) noContentResponse(res);
            return successResponse(res, "product find", product)
        } catch (error) {
            return serverErrorResponse(res, error.errmsg)
        }
    },
    async status(req, res) {
        try {
            const id = req.params.id;
            const flag = req.body.flag;
            const existingProduct = await ProductModel.findById(id);
            if (!existingProduct) return errorResponse(res, "Product not found");
            const updateKey = {}
            if (flag == 1) {
                updateKey.status = !existingProduct.status;
            } else if (flag == 2) {
                updateKey.stock = !existingProduct.stock;
            } else if (flag == 3) {
                updateKey.topSelling = !existingProduct.topSelling;
            } else {
                return errorResponse(res, "Invalid flag value");
            }


            await ProductModel.findByIdAndUpdate(
                { _id: id },
                {
                    $set: updateKey
                }
            )
            return updatedResponse(res, "Product Status Update..")

        } catch (error) {
            return serverErrorResponse(res, error.errmsg)
        }
    },
    async deleteById(req, res) {
        try {
            const id = req.params.id;
            const existingProduct = await ProductModel.findById(id);
            if (!existingProduct) return errorResponse(res, "Product not found");
            await ProductModel.findByIdAndDelete({ _id: id })
            fs.unlinkSync(`./public/images/product/${existingProduct.thumbnail}`)
            return deletedResponse(res)

        } catch (error) {
            console.log(error)
            return serverErrorResponse(res, error.errmsg)
        }
    },
    async images(req, res) {
        try {
            const images = req.files.images
            const id = req.params.id;
            const existingProduct = await ProductModel.findById(id);
            const imageArray = existingProduct.images || [];
            const allPromose = [];
            images.map((img) => {
                const imageName = generateUniqueImageName(img.name)
                const destination = './public/images/product/' + imageName
                imageArray.push(imageName);
                allPromose.push(img.mv(destination))
            })
            await Promise.all(allPromose);
            await ProductModel.findByIdAndUpdate(id, { $set: { images: imageArray } });
            return updatedResponse(res, "Product images updated successfully", imageArray);

        } catch (error) {
            return serverErrorResponse(res, error.errmsg)
        }
    }
}

module.exports = product