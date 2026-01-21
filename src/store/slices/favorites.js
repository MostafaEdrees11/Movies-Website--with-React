import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: {
        favoritesList: []
    },
    reducers: {
        addToFavorites: (state, action) => {
            state.favoritesList.push(action.payload);
        },
        removeFromFavorites: (state, action) => {
            const updatedFavorites = state.favoritesList.filter((favorite) => favorite.id != action.payload);
            state.favoritesList = updatedFavorites;
        }
    }
})

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;