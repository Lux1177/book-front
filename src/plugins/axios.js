import axios from "axios";

axios.interceptors.request.use((config) => {
    config.headers.Authorization = 'bearer ' + localStorage.getItem("token");

    return config;
})

export default axios;