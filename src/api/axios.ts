import axios from "axios";

export default axios.create({
    baseURL: process.env.NODE_ENV === 'production'
        ? import.meta.env.VITE_REPO_NAME || 'http://localhost:3000'
        : 'http://localhost:3000',
})