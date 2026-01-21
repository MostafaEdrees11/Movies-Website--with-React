import { useEffect, useState } from "react";
import { getAllMovies } from "../../services/movies.api";
import Card from "../../components/Card";
import { useSelector } from "react-redux";

function Movies({ moviesList, favOrTrashIcon = "favorite" }) {
  const favoritesList = useSelector((state) => state.favorites.favoritesList);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 m-8">
        {moviesList.map((movie) => {
          let isFavorite =
            favoritesList.findIndex((mov) => mov.id == movie.id) == -1
              ? false
              : true;
          return (
            <Card
              data={movie}
              key={movie.id}
              favoriteOrNot={isFavorite}
              favOrTrashIcon={favOrTrashIcon}
            />
          );
        })}
      </div>
    </>
  );
}

export default Movies;
