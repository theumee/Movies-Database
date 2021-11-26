import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Movies from "./Movies";
import Header from "./Header";
import App from "../App";

const Genres = () => {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getGenres();
  }, []);

  const getGenres = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=2a5ddd483b8fe7de98ffe6f4c80de4cd&language=en-US"
    );
    const json = await res.json();
    setGenres(json.genres);
  };
  return (
    <div>
      <Header />
      <section className="selection">
        <p className="genre-header">
          Select the Genres that you are interested in
        </p>
        <ul>
          {genres.map((genre, key) => (
            <li key={key}>
              <button
                onClick={(e) => {
                  e.target.className =
                    e.target.className === "genre-selected"
                      ? ""
                      : "genre-selected";
                }}
              >
                {genre.name}
              </button>
            </li>
          ))}
        </ul>
      </section>
      <Link to="/Movies">
        <img
          className="next-page"
          src={require("./../assets/arrow-1.png").default}
          alt="next"
        />
      </Link>
    </div>
  );
};

export default Genres;
