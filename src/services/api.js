import axios from "axios";

const api = axios.create({
    baseURL: "https://plump-pricey-composer.glitch.me"
})

export default api;