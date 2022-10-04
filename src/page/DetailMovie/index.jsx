import React from "react";
import MovieDetail from "../../components/movieDetail";
import { useAppContext } from "../../context/AppContext";

export default function DetailMovie() {
  const { movieSelected, genres } = useAppContext();
  return (
    <>
      <MovieDetail movieSelected={movieSelected} genres={genres} />
    </>
  );
}
