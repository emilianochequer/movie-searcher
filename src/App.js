import { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./components/movieList";
import Modal from "./components/modalDetail";
import Header from "./components/header";

function App() {
  // State and setters for ...
  // Search term
  const [searchTerm, setSearchTerm] = useState("");
  // API search results
  const [results, setResults] = useState([]);
  // Searching status (whether there is pending API request)
  const [isSearching, setIsSearching] = useState(false);
  // Api search result by rating
  const [rating, setRatingSearch] = useState(null);
  const [stars] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [hovered, setHovered] = useState(0);
  const [selectedIcon, setSelectedIcon] = useState("★");
  const [deselectedIcon, setDeselectedIcon] = useState("☆");
  const [showModal, setShowModal] = useState(false);
  const [movieSelected, setMovieSelected] = useState(null);
  const [genres, setGenres] = useState([]);

  const changeRating = (newRating) => {
    setRatingSearch(newRating);
  };

  const hoverRating = (rating) => {
    setHovered(rating);
  };

  useEffect(() => {
    const apiKey = "12fe980d106ff5328e1ed3efd66102d5";
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&amp;language=en-US`,
      {
        method: "GET",
      }
    )
      .then((r) => r.json())
      .then((r) => setGenres(r.genres))
      .catch((error) => {
        console.error(error);
        return [];
      });
    if (!searchTerm.length) {
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`, {
        method: "GET",
      })
        .then((r) => r.json())
        .then((r) => setResults(r.results))
        .catch((error) => {
          console.error(error);
          return [];
        });
    }
  }, [searchTerm]);

  return (
    <div className="App">
      <Header
        searchTerm={searchTerm}
        setIsSearching={setIsSearching}
        setResults={setResults}
        setSearchTerm={setSearchTerm}
        isSearching={isSearching}
        results={results}
      />
      <MovieList
        results={results}
        rating={rating}
        setRatingSearch={setRatingSearch}
        hovered={hovered}
        selectedIcon={selectedIcon}
        deselectedIcon={deselectedIcon}
        setHovered={setHovered}
        setSelectedIcon={setSelectedIcon}
        hoverRating={hoverRating}
        changeRating={changeRating}
        setDeselectedIcon={setDeselectedIcon}
        stars={stars}
        setMovieSelected={setMovieSelected}
        setShowModal={setShowModal}
      />
      <Modal
        movieSelected={movieSelected}
        showModal={showModal}
        setShowModal={setShowModal}
        genres={genres}
      />
    </div>
  );
}

export default App;
