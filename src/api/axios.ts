import axios from 'axios';

const BACKEND_URL = process.env.NODE_ENV === 'production'
    ? import.meta.env.VITE_REPO_NAME || 'http://localhost:3000'
    : 'http://localhost:3000';

export default axios.create({
    baseURL: BACKEND_URL
});

export const axiosWithAuth = axios.create({
    baseURL: BACKEND_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});