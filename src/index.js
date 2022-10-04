import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./page/Login";
import MovieListPage from "./page/MovieListPage";
import FavoriteMovies from "./page/FavoriteMovies";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context/AppContext";
import Header from "./components/header";
import Navbar from "./components/navbar";
import DetailMovie from "./page/DetailMovie";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <Header />
      <TransitionGroup>
        <CSSTransition classNames="fade" timeout={500}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="login" element={<Login />} />
              <Route index element={<MovieListPage />} />
              <Route path="favorites" element={<FavoriteMovies />} />
              <Route path="detail" element={<DetailMovie />} />
            </Routes>
          </BrowserRouter>
        </CSSTransition>
      </TransitionGroup>
    </AppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
