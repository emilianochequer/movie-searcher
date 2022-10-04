import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

export default function Navbar({ fixed }) {
  const { authenticated } = useAppContext();
  if (authenticated) {
    return (
      <>
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-500 mb-3">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex   lg:w-auto lg:static lg:block lg:justify-start">
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                  <Link
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    to="/"
                  >
                    Movie Searcher
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    to="/favorites"
                  >
                    Favorite Movies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  } else {
    return null;
  }
}
