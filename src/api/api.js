import axios from "axios"
const apiUrl = process.env.REACT_APP_BASE_URL_BACKEND

const instance = axios.create({
    baseURL: apiUrl,
})
instance.defaults.withCredentials = false;

console.log('instance')
console.log(instance.defaults.baseURL)
export default instance;