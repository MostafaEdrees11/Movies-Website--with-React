import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllMovies, searchOnMovie } from "../../services/movies.api";

export const getAllMoviesAction = createAsyncThunk('movies/getAll', async (page) => {
    try {
        const response = await getAllMovies(page);
        return response.data;
    }
    catch (err) {
        throw new Error("Error while fetching all products");
    }
})

export const searchForMovieAction = createAsyncThunk('movies/searchMovie', async ({ query, page }) => {
    try {
        const response = await searchOnMovie({ query, page });
        return response.data;
    } catch (err) {
        throw new Error("Error while searching for movie")
    }
})

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        moviesList: [],
        page: 1,
        totalPages: 2,
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(getAllMoviesAction.pending, (state, action) => {
            state.loading = true;
        })

        builder.addCase(getAllMoviesAction.fulfilled, (state, action) => {
            state.loading = false;
            state.moviesList = action.payload.results;
            state.page = action.payload.page;
            state.totalPages = action.payload.total_pages;
        })

        builder.addCase(getAllMoviesAction.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        })

        builder.addCase(searchForMovieAction.pending, (state, action) => {
            state.loading = true;
        })

        builder.addCase(searchForMovieAction.fulfilled, (state, action) => {
            state.loading = false;
            state.moviesList = action.payload.results;
            state.page = action.payload.page;
            state.totalPages = action.payload.total_pages;
        })

        builder.addCase(searchForMovieAction.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        })
    }
})

export default moviesSlice.reducer