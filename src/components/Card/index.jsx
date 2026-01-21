import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../store/slices/favorites";

function Card({ data, favoriteOrNot, favOrTrashIcon = "favorite" }) {
  const [isFavorite, setFavorite] = useState(favoriteOrNot);
  const handleFavorite = (data) => {
    if (isFavorite) dispatch(removeFromFavorites(data.id));
    else dispatch(addToFavorites(data));

    setFavorite(!isFavorite);
  };

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const navigateToCardDetails = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10 relative">
          <img
            src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
            alt={`${data.title}`}
            className="rounded-xl"
          />
          {favOrTrashIcon == "favorite" ? (
            isFavorite ? (
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/color/48/filled-star--v1.png"
                alt="filled-star--v1"
                className="absolute top-12 right-12 cursor-pointer "
                onClick={() => {
                  handleFavorite(data);
                }}
              />
            ) : (
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/metro/52/star.png"
                alt="star"
                className="absolute top-12 right-12 cursor-pointer "
                style={{
                  filter:
                    "invert(66%) sepia(98%) saturate(491%) hue-rotate(359deg) brightness(101%) contrast(101%)",
                }}
                onClick={() => {
                  handleFavorite(data);
                }}
              />
            )
          ) : (
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/color/48/delete-forever.png"
              alt="delete-forever"
              className="absolute top-12 right-12 cursor-pointer"
              onClick={() => {
                handleFavorite(data);
              }}
            />
          )}
          {/* {isFavorite ? (
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/color/48/filled-star--v1.png"
              alt="filled-star--v1"
              className="absolute top-12 right-12 cursor-pointer "
              onClick={() => {
                handleFavorite(data);
              }}
            />
          ) : (
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/metro/52/star.png"
              alt="star"
              className="absolute top-12 right-12 cursor-pointer "
              style={{
                filter:
                  "invert(66%) sepia(98%) saturate(491%) hue-rotate(359deg) brightness(101%) contrast(101%)",
              }}
              onClick={() => {
                handleFavorite(data);
              }}
            />
          )} */}
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{data.title}</h2>
          <p>{data.overview}</p>
          <div className="card-actions">
            <button
              className="btn btn-primary"
              onClick={() => {
                navigateToCardDetails(data.id);
              }}
            >
              Watch Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
