import { useEffect, useState } from "react";
import { getAllMovies } from "../../services/movies.api";
import Card from "../../components/Card";

function Movies({ moviesList }) {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 m-8">
        {moviesList.map((movie) => {
          return <Card data={movie} key={movie.id} />;
        })}
      </div>
    </>
  );
}

export default Movies;
