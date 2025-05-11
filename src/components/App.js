// src/App.js
import React, { useState } from "react";
import 'regenerator-runtime/runtime';
import axios from "axios";

const App = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  const SearchMovies = async () => {
    if (!query.trim()) return;

    const apiKey = "99eb9fd1";
    const url = `https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`;

    try {
      const response = await axios.get(url);
      if (response.data.Response === "True") {
        setMovies(response.data.Search);
        setError("");
      } else {
        setMovies([]);
        setError("Invalid movie name. Please try again.");
      }
    } catch (err) {
      setMovies([]);
      setError("Failed to fetch movies. Please try again.");
    }
  };

  return (
    <div>
      <h1>Search Movie</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={SearchMovies}>Search</button>

      {error && <p className="error">{error}</p>}

      <div>
        {movies.map((movie) => (
          <div key={movie.imdbID}>
            <img
              src={
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "https://via.placeholder.com/150"
              }
              alt={movie.Title}
            />
            <p>{movie.Title} ({movie.Year})</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
