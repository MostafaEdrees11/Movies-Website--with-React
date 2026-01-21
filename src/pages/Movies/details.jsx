import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMovieById } from "../../services/movies.api";
import Card from "../../components/Card";

function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovieById(id)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="hero bg-base-200 min-h-screen h-fit">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            className="max-w-sm rounded-lg shadow-2xl"
            alt={`${movie.title}`}
          />
          <div>
            <h1 className="text-5xl font-bold">{movie.title}</h1>
            <p className="py-6">{movie.overview}</p>
            <p className="py-1">
              <b>Rating:</b> {movie.vote_average}/10
            </p>
            <p className="py-1 pb-4">
              <b>Realease At:</b> {movie.release_date}
            </p>
            <button className="btn btn-primary text-white mx-4">
              Watch Now
            </button>
            <button className="btn btn-success text-white mx-4">
              Download
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieDetails;
