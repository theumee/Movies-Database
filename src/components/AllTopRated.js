import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import Header from "./Header";

const AllTopRated = () => {
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
    setTopRated(json.results);
  };
  return (
    <div>
      <Header />
      <div className="card-header">
        <h2 className="type-title">Top Rated</h2>
      </div>
      <div className="all-container">
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

export default AllTopRated;
