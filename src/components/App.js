import React, { useState } from "react";
import axios from "axios";
import './App.css';
const App = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const api = "99eb9fd1";

  const searchMovies = () => {
    if (!query.trim()) {
      setError("Please enter a movie name.");
      setMovies([]);
      return;
    }

    const url = `https://www.omdbapi.com/?s=${query}&apikey=${api}`;

    axios
      .get(url)
      .then((response) => {
        if (response.data.Response === "True") {
          setMovies(response.data.Search);
          setError("");
        } else {
          setMovies([]);
          setError("Invalid movie name. Please try again.");
        }
      })
      .catch(() => {
        setMovies([]);
        setError("Failed to fetch movies. Please try again.");
      });
  };

  return (
    <div>
      <h1>Search Movie</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder=""
      />
      <button onClick={searchMovies}>Search</button>
      {error === "Invalid movie name. Please try again." && (
        <p className="error">{error}</p>
      )}
      {error === "Failed to fetch movies. Please try again." && (
        <p>{error}</p>
      )}
      {error === "Please enter a movie name." && <p>{error}</p>}
      <div>
        {movies.map((movie) => (
          <div key={movie.imdbID}>
            <img src={movie.Poster} alt={movie.Title} />
            <h3>
              {movie.Title} ({movie.Year})
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
