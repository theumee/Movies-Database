import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const Latest = () => {
  const imgPath = "https://image.tmdb.org/t/p/original";
  const [latest, setLatest] = useState([]);
  useEffect(() => {
    getLatest();
  }, []);

  const getLatest = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=2a5ddd483b8fe7de98ffe6f4c80de4cd&language=en-US&page=1"
    );
    const json = await res.json();
    setLatest(json.results.splice(1, 9));
  };
  return (
    <div>
      <div className="card-header">
        <h2 className="type-title">Latest</h2>
        <Link className="link-title" to="/Latest">
          View All
        </Link>
      </div>
      <div className="card-container">
        {latest.map((movie) => (
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

export default Latest;
