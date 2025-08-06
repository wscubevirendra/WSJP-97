import axios from "axios"
import { AxiosInstance } from "./helper";

const getCategories = async (id = null) => {
    try {
        let API = "category";
        if (id != null) API += `/${id}`;
        //http://localhost:5000/category/id---
        //http://localhost:5000/category
        const response = await AxiosInstance.get(API);
        if (response.data.success === true) {
            return response.data
        } else {
            return null
        }

    } catch (error) {
        console.log(error)
        return null
    }
}

const getColors = async (id = null) => {
    try {
        let API = "color";
        if (id != null) API += `/${id}`;
        //http://localhost:5000/color/id---
        //http://localhost:5000/color
        const response = await AxiosInstance.get(API);
        if (response.data.success === true) {
            return response.data
        } else {
            return null
        }

    } catch (error) {
        return null
    }
}

const getBrands = async (id = null) => {
    try {
        let API = "brand";
        if (id != null) API += `/${id}`;
        //http://localhost:5000/brand/id---
        //http://localhost:5000/brand
        const response = await AxiosInstance.get(API);
        if (response.data.success === true) {
            return response.data
        } else {
            return null
        }

    } catch (error) {
        console.log(error)
        return null
    }
}

const getProducts = async (id = null) => {
    try {
        let API = "product";
        if (id != null) API += `/${id}`;
        const response = await AxiosInstance.get(API);
        if (response.data.success === true) {
            return response.data
        } else {
            return null
        }

    } catch (error) {
        console.log(error)
        return null
    }
}

export { getCategories, getColors, getBrands, getProducts }