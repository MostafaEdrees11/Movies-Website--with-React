import { axiosInstance } from "./axiosInstance";

export function getAllMovies(page) {
    return axiosInstance.get('/movie/popular', {
        params: {
            page: page
        }
    })
}

export function getMovieById(id) {
    return axiosInstance.get(`/movie/${id}`)
}

export function searchOnMovie({ query, page }) {
    return axiosInstance.get('/search/movie', {
        params: {
            query: query,
            page: page
        }
    })
}