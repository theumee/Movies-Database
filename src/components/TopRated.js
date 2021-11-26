import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
const TopRated = () => {
  const imgPath = "https://image.tmdb.org/t/p/original";
  const [topRated, setTopRated] = useState([]);
  useEffect(() => {
    getTopRated();
  }, []);

  const getTopRated = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=2a5ddd483b8fe7de98ffe6f4c80de4cd&language=en-US&page=1"
    );
    const json = await res.json();
    setTopRated(json.results.splice(1, 9));
  };
  return (
    <div>
      <div className="card-header">
        <h2 className="type-title">Top Rated</h2>
        <Link className="link-title" to="/TopRated">
          View All
        </Link>
      </div>
      <div className="card-container">
        {topRated.map((movie, key) => (
          <MovieCard
            title={movie.title}
            date={movie.release_date}
            img={imgPath + movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};

export default TopRated;
