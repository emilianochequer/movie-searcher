import React from "react";
import { useNavigate } from "react-router-dom";

export default function MovieList({
  results,
  setRatingSearch,
  stars,
  rating,
  hovered,
  deselectedIcon,
  selectedIcon,
  hoverRating,
  changeRating,
  setMovieSelected,
  setShowModal,
  favorites,
  setFavorites,
}) {
  const navigate = useNavigate();

  const handleOpenMovieDetail = (result) => {
    setMovieSelected(result);
    setShowModal(true);
    navigate("/detail");
  };
  const resultsData = rating
    ? results.filter((r) => rating <= r.vote_average)
    : results;
  return (
    <div className="items-center">
      <section className="flex items-center content-center justify-center h-[50px] m-[20px]">
        <div
          class="flex items-center"
          style={{ fontSize: "3.5em", color: "#ffb608" }}
        >
          {stars?.map((star) => {
            return (
              <span
                style={{ cursor: "pointer" }}
                onClick={() => {
                  changeRating(star);
                }}
                onMouseEnter={() => {
                  hoverRating(star);
                }}
                onMouseLeave={() => {
                  hoverRating(0);
                }}
              >
                {rating < star
                  ? hovered < star
                    ? deselectedIcon
                    : selectedIcon
                  : selectedIcon}
              </span>
            );
          })}
          <button
            onClick={() => {
              changeRating(null);
            }}
            className="bg-blue-500 justify-center flex-col items-center mx-[20px] w-[200px] h-[40px] text-[20px] hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          >
            Clear filters
          </button>
        </div>
      </section>
      <section className="mt-9 flex items-center content-center justify-center">
        <div className="mt-4 grid grid-cols-2 gap-y-5 sm:grid-cols-3 gap-x-5 ">
          {resultsData.map((result, i) => (
            <div
              key={i}
              className="flex flex-col rounded-xl overflow-hidden aspect-square border max-w-96 max-h-96 hover:bg-opacity-100 dark:border-zinc-600"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}
                className=" h-4/5 object-cover w-full hover:opacity-50 hover:cursor-pointer"
                alt=""
                onClick={() => handleOpenMovieDetail(result)}
              />
              <div className="w-full h-1/5 bg-white dark:bg-zinc-800 dark:text-white px-3 flex items-center justify-between border-t-2 border-t-red-600">
                <span className="capitalize  font-medium truncate">
                  {result.title}
                </span>
                <div className="flex space-x-2 items-center text-xs">
                  {favorites?.find((fav) => fav.id === result.id) ? (
                    <span
                      style={{ fontSize: "2em", color: "#FF0000" }}
                      className="hover:cursor-pointer"
                      onClick={() => {
                        const index = favorites.findIndex(
                          (fav) => fav.id === result.id
                        );
                        const favCopy = [...favorites];
                        if (index > -1) {
                          favCopy.splice(index, 1);
                        }
                        setFavorites(favCopy);
                      }}
                    >
                      ♥️
                    </span>
                  ) : (
                    <span
                      style={{ fontSize: "2em", color: "#FF0000" }}
                      className="hover:cursor-pointer"
                      onClick={() => {
                        const favCopy = [...favorites, result];
                        setFavorites(favCopy);
                      }}
                    >
                      ♡
                    </span>
                  )}
                  <span>Rating: {result.vote_average}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
