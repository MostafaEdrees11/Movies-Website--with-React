import { useSelector } from "react-redux";
import Movies from "../Movies";

function FavoritesPage() {
  const favoritesList = useSelector((state) => state.favorites.favoritesList);
  return (
    <>
      <h1 className="text-2xl font-bold text-center mt-2 mx-16 p-2 bg-green-300">
        Favorites Movies
      </h1>
      <Movies moviesList={favoritesList} favOrTrashIcon={"trash"} />
    </>
  );
}

export default FavoritesPage;
