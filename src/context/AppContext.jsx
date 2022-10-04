import React, {
  createContext,
  useState,
  useContext,
  useReducer,
  useEffect,
} from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
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
  const [authenticated, setAuthenticated] = useLocalStorage(
    "authenticated",
    false
  );
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

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
          return [];
        });
    }
  }, [searchTerm]);

  const context = {
    searchTerm,
    setSearchTerm,
    results,
    setResults,
    isSearching,
    setIsSearching,
    rating,
    setRatingSearch,
    stars,
    hovered,
    setHovered,
    selectedIcon,
    setSelectedIcon,
    deselectedIcon,
    setDeselectedIcon,
    showModal,
    setShowModal,
    movieSelected,
    setMovieSelected,
    genres,
    setGenres,
    authenticated,
    setAuthenticated,
    favorites,
    setFavorites,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export function useAppContext() {
  const context = AppContext;
  if (!context) {
    console.error("There is an error with explorer context");
  }
  return useContext(context);
}
