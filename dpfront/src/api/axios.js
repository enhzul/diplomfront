import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:3011/api'
});

export const axiosPrivate = axios.create({
    baseURL: 'http://localhost:3011/api',
    headers: {'Content-Type': 'application/json'},
    withCredentials: true
    
});