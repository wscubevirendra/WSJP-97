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

export { getCategories }