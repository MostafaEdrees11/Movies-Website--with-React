import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "9c2a1444e3ccf0ea15e2b966db0f5329"
    }
})