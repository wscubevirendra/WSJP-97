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

function getCookies(name) {
    if (typeof document === 'undefined') return null;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}



export { generateSlug, notify, AxiosInstance, getCookies }