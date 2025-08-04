import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

const Favorites = () => {
  const { favorites } = useMovieContext();

  return (
    <>
        {favorites.length === 0 ? (
            <div className="favorites-empty">
                <h2>No Favorite Movies Yet</h2>
                <p>
                    Start adding movies to your favorites and they will appear here!
                </p>
            </div>
        ) : (
            <div className="favorites">
                <h2>Your Favorite Movies</h2>
                <div className="movies-grid">
                    {favorites.map((movie) => {
                        return <MovieCard movie={movie} key={movie.id} />;
                    })}
                </div>
            </div>
        )}
    </>
  );
};

export default Favorites;
