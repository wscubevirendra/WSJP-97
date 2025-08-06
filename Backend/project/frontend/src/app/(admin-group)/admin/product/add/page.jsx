'use client'
import React from "react";
import { AxiosInstance, generateSlug, notify } from "@/library/helper";
import { useEffect, useRef } from "react";
import { getBrands, getCategories, getColors } from "@/library/api-call";
import Select from 'react-select'
import TextEditor from "@/components/admin/TextEditor";



const ProductForm = () => {
    const [category, setCategory] = React.useState([]);
    const [brand, setBrand] = React.useState([]);
    const [color, setColor] = React.useState([]);
    const [longDescription, setLongDescription] = React.useState(null);
    const [selcolors, setSelcolors] = React.useState([]);
    const nameRef = useRef();
    const slugRef = useRef();
    const originalPriceRef = useRef();
    const discountPercentageRef = useRef();
    const finalPriceRef = useRef();

    async function getdata() {
        const category = await getCategories();
        setCategory(category.data);
        const brand = await getBrands();
        setBrand(brand.data);
        const color = await getColors();
        setColor(color.data);

    }

    useEffect(
        () => {
            getdata()
        },
        []
    )

    const slugCreate = () => {
        const slug = generateSlug(nameRef.current.value);
        slugRef.current.value = slug;
    };

    const finalPriceCalculate = () => {
        let originalPrice = originalPriceRef.current.value;
        let discountPercentage = discountPercentageRef.current.value;
        let finalPrice = originalPrice - (originalPrice * discountPercentage) / 100;
        finalPriceRef.current.value = finalPrice;
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", nameRef.current.value);
        formData.append("slug", slugRef.current.value);
        formData.append("originalPrice", originalPriceRef.current.value);
        formData.append("discountPercentage", discountPercentageRef.current.value);
        formData.append("finalPrice", finalPriceRef.current.value);
        formData.append("shortDescription", e.target.shortDescription.value);
        formData.append("longDescription", longDescription);
        formData.append("thumbnail", e.target.thumbnail.files[0]);
        formData.append("categoryId", e.target.categoryId.value);
        formData.append("brandId", e.target.brandId.value);
        formData.append("colors", JSON.stringify(selcolors));

        AxiosInstance.post("product/create", formData)
            .then((response) => {
                console.log(response.data)
                notify(response.data.message, response.data.success);
                if (response.data.success) {
                    nameRef.current.value = "";
                    slugRef.current.value = "";
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <form onSubmit={submitHandler} className="max-w-5xl mx-auto p-6 bg-white shadow-xl rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Product Name */}
            <div>
                <label className="block mb-1 font-semibold">Name</label>
                <input
                    type="text"
                    name="name"
                    ref={nameRef}
                    maxLength={50}
                    onChange={slugCreate}
                    className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter product name"
                />
            </div>

            {/* Slug */}
            <div>
                <label className="block mb-1 font-semibold">Slug</label>
                <input
                    type="text"
                    name="slug"
                    ref={slugRef}
                    readOnly
                    maxLength={60}
                    className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter product slug"
                />
            </div>

            {/* Short Description */}
            <div className="md:col-span-2">
                <label className="block mb-1 font-semibold">Short Description</label>
                <textarea
                    name="shortDescription"
                    maxLength={200}
                    className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={2}
                    placeholder="Enter short description"
                />
            </div>

           
            <div className="md:col-span-2">
                <label className="block mb-1 font-semibold">Long Description</label>
                <TextEditor value={longDescription} changeHandler={(value) => {
                    setLongDescription(value)
                }} />
            </div>
            <div className="col-span-2 grid grid-cols-3 gap-6">
                <div>
                    <label className="block mb-1 font-semibold">Original Price</label>
                    <input
                        type="number"
                        name="originalPrice"
                        ref={originalPriceRef}
                        onChange={finalPriceCalculate}
                        defaultValue={200}
                        className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Discount Percentage */}
                <div>
                    <label className="block mb-1 font-semibold">Discount Percentage</label>
                    <input
                        type="number"
                        name="discountPercentage"
                        ref={discountPercentageRef}
                        onChange={finalPriceCalculate}
                        defaultValue={5}
                        className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Final Price */}
                <div>
                    <label className="block mb-1 font-semibold">Final Price</label>
                    <input
                        type="number"
                        name="finalPrice"
                        ref={finalPriceRef}
                        readOnly
                        className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>
            <div className="col-span-2 grid grid-cols-3 gap-4">
                <div>
                    <label className="block mb-1 font-semibold">Category</label>
                    <Select name="categoryId"
                        className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" options={
                            category.map((cat) => ({
                                value: cat._id,
                                label: cat.name
                            }))} />

                </div>


                <div>
                    <label className="block mb-1 font-semibold">Brand</label>
                    <Select name="brandId"
                        className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" options={
                            brand.map((br) => ({
                                value: br._id,
                                label: br.name
                            }))} />
                </div>


                <div>
                    <label className="block mb-1 font-semibold">Colors</label>
                    <Select
                        name="colors"
                        onChange={(data) => {
                            const colorsData = data.map((item) => item.value);
                            setSelcolors(colorsData);

                        }}
                        className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" closeMenuOnSelect={false} isMulti options={
                            color.map((color) => ({
                                value: color._id,
                                label: color.name
                            }))} />
                </div>

            </div>


            {/* Thumbnail */}
            <div className="md:col-span-2">
                <label className="block mb-1 font-semibold">Thumbnail Image</label>
                <input
                    type="file"
                    name="thumbnail"
                    accept="image/*"
                    className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 text-right">
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition-all duration-300"
                >
                    Submit Product
                </button>
            </div>
        </form>
    );
};

export default ProductForm;
