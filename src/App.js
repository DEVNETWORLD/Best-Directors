import "./styles.css";
import React, { useState } from "react";
const directorList = {
  StevenSpielberg: [
    { movies: "Scheindler's List", rating: "5/5" },
    { movies: "Saving Private Ryan", rating: "4.8/5" },
    { movies: "Jurassic Park (1993)", rating: "4.5/5" }
  ],
  JamesCameron: [
    { movies: "Titanic", rating: "4.9/5" },
    { movies: "Avatar", rating: "5/5" },
    { movies: "Terminator", rating: "4.4/5" }
  ],
  QuenteinTarantino: [
    { movies: "Pulp Fiction", rating: "4.8/5" },
    { movies: "Inglorious Bastards", rating: "4.7/5" },
    { movies: "Django Unchained", rating: "5/5" }
  ],
  CristopherNolan: [
    { movies: "Prestige", rating: "4.9/5" },
    { movies: "The Dark Knight", rating: "5/5" },
    { movies: "Dunkirk", rating: "4.9/5" }
  ]
};
var currentList = Object.keys(directorList);

export default function App() {
  const [movies, setmovies] = useState("StevenSpielberg");
  function clickdirectorHanler(movie) {
    var movies = directorList[movie];
    setmovies(movie);
  }
  return (
    <div className="App">
      <h1>Rating Best Directors works</h1>
      <p>Mine all time favourite</p>
      {currentList.map((movie) => (
        <button
          style={{
            border: "1px solid var",
            backgroundColor: "yellow",
            fontSize: "1rem",
            paddingRight: "0.5rem",
            paddingLeft: "0.5rem",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            margin: "1rem 0.4rem",
            borderRadius: "0.25rem",
            cursor: "pointer"
          }}
          key={movie}
          onClick={() => clickdirectorHanler(movie)}
        >
          {movie}
        </button>
      ))}
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {directorList[movies].map((item) => (
            <li
              key={item.movies}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid ",
                width: "50%",
                margin: "1rem auto",
                borderRadius: "0.5rem"
              }}
            >
              <p style={{ fontSize: "larger", display: "inline" }}>
                {" "}
                {item.movies}{" "}
              </p>
              <p style={{ fontSize: "smaller" }}> {item.rating} </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
