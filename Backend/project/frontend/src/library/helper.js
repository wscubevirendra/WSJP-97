import { toast } from 'react-toastify';
import axios from 'axios';

function generateSlug(name) {
    return name
        .toLowerCase()                     // Convert to lowercase
        .trim()                            // Remove leading/trailing spaces
        .replace(/[^a-z0-9\s-]/g, '')      // Remove non-alphanumeric characters
        .replace(/\s+/g, '-')              // Replace spaces with hyphens
        .replace(/-+/g, '-');              // Replace multiple hyphens with a single one
}

const notify = (msg, flag) => toast(msg, { type: flag ? 'success' : 'error' });

const AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL
});



export { generateSlug, notify, AxiosInstance }