import { useNavigate } from "react-router";

function Card({ data }) {
  const navigate = useNavigate();

  const navigateToCardDetails = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
            alt={`${data.title}`}
            className="rounded-xl"
          />
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
