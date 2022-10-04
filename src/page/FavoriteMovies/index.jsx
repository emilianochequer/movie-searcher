import React, { useState, useEffect } from "react";
import MovieList from "../../components/movieList";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
const FavoriteMovies = () => {
  const {
    setShowModal,
    setMovieSelected,
    authenticated,
    setAuthenticated,
    favorites,
    setFavorites,
  } = useAppContext();

  const [rating, setRatingSearch] = useState(null);
  const [stars] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [hovered, setHovered] = useState(0);
  const [selectedIcon, setSelectedIcon] = useState("★");
  const [deselectedIcon, setDeselectedIcon] = useState("☆");

  const changeRating = (newRating) => {
    setRatingSearch(newRating);
  };

  const hoverRating = (rating) => {
    setHovered(rating);
  };

  useEffect(() => {
    const loggedInUser = authenticated;
    if (loggedInUser) {
      setAuthenticated(loggedInUser);
    }
  }, []);

  if (!authenticated) {
    return <Navigate replace to="/login" />;
  } else {
    return (
      <div className="App">
        <MovieList
          results={favorites}
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
          favorites={favorites}
          setFavorites={setFavorites}
        />
      </div>
    );
  }
};
export default FavoriteMovies;
