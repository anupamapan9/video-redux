import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:9000',
    timeout: 1000,
    headers: {
        'content-type': "application/json"
    }
})

export default axiosInstance