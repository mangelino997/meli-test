import axios from "axios"
const apiUrl = process.env.REACT_APP_BASE_URL_BACKEND

const instance = axios.create({
    baseURL: apiUrl,
})
instance.defaults.withCredentials = false;

export default instance;