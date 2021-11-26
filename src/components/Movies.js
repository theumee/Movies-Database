import { useEffect, useState } from "react";
import Header from "./Header";
import Latest from "./Latest";
import TopRated from "./TopRated";

const Movies = () => {
  const [upcoming, setUpcoming] = useState();
  const [movieKey, setMovieKey] = useState(0);
  const imgPath = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    console.log("hellp");
    getUpcoming();
  }, []);

  const getUpcoming = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=2a5ddd483b8fe7de98ffe6f4c80de4cd&language=en-US&page=1"
    );
    const json = await res.json();
    console.log(json);
    setUpcoming(json.results);
  };

  const nextSlide = () => {
    if (movieKey < 9) {
      setMovieKey(movieKey + 1);
    } else {
      setMovieKey(0);
    }
  };
  if (upcoming == undefined) {
    return <div></div>;
  } else {
    return (
      <div>
        <Header />
        <h2 className="type-title">Upcoming</h2>
        <div className="slideshow-container">
          <img
            className="backdrop-img"
            src={imgPath + upcoming[movieKey].backdrop_path}
            alt="backdrop"
          />
          <img
            className="poster-img"
            src={imgPath + upcoming[movieKey].poster_path}
            alt="poster"
          />
          <div className="movie-details">
            <h3 className="movie-title">{upcoming[movieKey].title}</h3>
            <p className="movie-date">{upcoming[movieKey].release_date}</p>
            <p className="movie-overview">{upcoming[movieKey].overview}</p>
          </div>
          <div className="slider-btn">
            <button onClick={() => nextSlide()}>
              <img
                src={require("./../assets/arrow-2.png").default}
                alt="arrow"
              />
            </button>
          </div>
        </div>
        <Latest />
        <TopRated />
      </div>
    );
  }
};

export default Movies;
