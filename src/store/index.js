import { configureStore } from "@reduxjs/toolkit";

import favoritesReducer from './slices/favorites'
import getAllMoviesReduces from './slices/movies'


const store = configureStore({
    reducer: {
        favorites: favoritesReducer,
        movies: getAllMoviesReduces
    }
});


export default store;