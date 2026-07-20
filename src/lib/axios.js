import axios from "axios"

const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "https://api.thinkbook.ai";

const api = axios.create({
    baseURL: BASE_URL
})

export default api