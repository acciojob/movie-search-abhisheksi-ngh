// src/MovieSearch.js
import React from "react";
// import axios from "axios";

const MovieSearch = () => {
//   const [query, setQuery] = useState("");
//   const [movies, setMovies] = useState([]);
//   const [error, setError] = useState("");
//   const api = "99eb9fd1";

//   const SearchMovies = async () => {
//     if (!query.trim()) return;

//     const url = `https://www.omdbapi.com/?s=${query}&apikey=${api}`;
//     try {
//       const response = await axios.get(url);
//       if (response.data.Response === "True") {
//         setMovies(response.data.Search);
//         setError("");
//       } else {
//         setMovies([]);
//         setError("Invalid movie name. Please try again.");
//       }
//     } catch (err) {
//       setMovies([]);
//       setError("Failed to fetch movies. Please try again.");
//     }
//   };

//   const handleInputChange = (e) => {
//     setQuery(e.target.value);
//   };

  return (
    // <div className="movie-search">
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Enter movie name"
      />
      {/* <button onClick={SearchMovies}>Search</button>

      {error && <div className="error">{error}</div>}

      <div id="movie-list">
        {movies.map((movie) => (
          <div className="movie" key={movie.imdbID}>
            <img src={movie.Poster} alt={movie.Title} />
            <h3>
              {movie.Title} ({movie.Year})
            </h3>
          </div>
        ))}
      </div>
    </div> */}
    </div>
  );
};

export default MovieSearch;
