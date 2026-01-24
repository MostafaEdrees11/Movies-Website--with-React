import { useSelector, useDispatch } from "react-redux";
import { getAllMoviesAction, searchForMovieAction } from "../store/slices/movies";

export function useFetchWithMoves() {
    const moviesState = useSelector((state) => state.movies);
    const dispatch = useDispatch();

    const getMovies = ({ query, page }) => {
        if (query == "") {
            dispatch(getAllMoviesAction(page));
        } else {
            dispatch(searchForMovieAction({ query, page }));
        }
    }

    return [moviesState.moviesList, moviesState.totalPages, moviesState.loading, moviesState.error, getMovies]
}