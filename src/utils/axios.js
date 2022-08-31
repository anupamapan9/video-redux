import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://lws-server-anuapan9.herokuapp.com/',
    headers: {
        'content-type': "application/json"
    }
})

export default axiosInstance;