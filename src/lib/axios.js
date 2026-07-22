import axios from "axios"

const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5500/api/v1" : "https://api.thinkbook.ai";

const api = axios.create({
    baseURL: BASE_URL
})

export default api