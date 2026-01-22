import Movies from "../Movies";
import { useEffect, useState } from "react";
import { getAllMovies, searchOnMovie } from "../../services/movies.api";
import Pagination from "../../components/Pagination";
import Search from "../../components/Search";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllMoviesAction,
  searchForMovieAction,
} from "../../store/slices/movies";

function Home() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const moviesState = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    if (query == "") {
      dispatch(getAllMoviesAction(page));
      if (page > moviesState.totalPages) setPage(1);
    } else {
      dispatch(searchForMovieAction({ query, page }));
      if (page > moviesState.totalPages) setPage(1);
    }
  }, [page, query]);

  return (
    <>
      <div className="flex justify-center p-4 gap-4">
        <Search updateSearch={setQuery} />
      </div>
      <Movies moviesList={moviesState.moviesList} />
      <div className="text-center m-2">
        <Pagination
          currentPage={page}
          totalPages={moviesState.totalPages ?? 2}
          changePage={setPage}
        />
      </div>
    </>
  );
}

export default Home;
