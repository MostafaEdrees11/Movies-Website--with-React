import Movies from "../Movies";
import { useEffect, useState } from "react";
import Pagination from "../../components/Pagination";
import Search from "../../components/Search";
import { useFetchWithMoves } from "../../hooks/useFetchWithMovies";

function Home() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const [movies, totalPages, loading, error, getMovies] = useFetchWithMoves();

  useEffect(() => {
    getMovies({ query, page });
    if (page > totalPages) setPage(1);
  }, [page, query]);

  return (
    <>
      <div className="flex justify-center p-4 gap-4">
        <Search updateSearch={setQuery} />
      </div>
      <Movies moviesList={movies} />
      <div className="text-center m-2">
        <Pagination
          currentPage={page}
          totalPages={totalPages ?? 2}
          changePage={setPage}
        />
      </div>
    </>
  );
}

export default Home;
