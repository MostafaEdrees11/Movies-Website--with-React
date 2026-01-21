import Movies from "../Movies";
import { useEffect, useState } from "react";
import { getAllMovies, searchOnMovie } from "../../services/movies.api";
import Pagination from "../../components/Pagination";
import Search from "../../components/Search";

function Home() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [movies, setMovies] = useState([]);

  const handleSearch = (query, page) => {
    searchOnMovie({ query: query, page: page })
      .then((res) => {
        setMovies(res.data.results);
        setTotalPages(res.data.total_pages);
      })
      .catch((err) => console.log(err));
  };

  const getMovies = async () => {
    try {
      const res = await getAllMovies(page);
      setMovies(res.data.results);
      setTotalPages(res.data.total_pages);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (query == "") {
      getMovies();
    } else {
      handleSearch(query, page);
    }
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
          totalPages={totalPages}
          changePage={setPage}
        />
      </div>
    </>
  );
}

export default Home;
