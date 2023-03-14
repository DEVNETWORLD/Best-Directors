import "./styles.css";
import React, { useState } from "react";
var directorList = {
  "Steven Spielberg": "Scheindler's List",
  "James Cameron": "Titanic",
  "Quentein Tarantino": "Pulp Fiction",
  "Cristopher Nolan": "Prestige"
};
var currentList = Object.keys(directorList);

export default function App() {
  const [movies, setmovies] = useState("");
  function clickdirectorHanler(movie) {
    var movies = directorList[movie];
    setmovies(movies);
  }
  return (
    <div className="App">
      <h1>Rating Best Directors works</h1>
      <p>Mine all time favourite</p>
      {currentList.map(function (movie) {
        return (
          <span
            style={{
              border: "1px solid var",
              backgroundColor: "yellow",
              fontSize: "1rem",
              paddingRight: "0.5rem",
              paddingLeft: "0.5rem",
              paddingTop: "1rem",
              paddingBottom: "1rem",

              cursor: "pointer"
            }}
            key={movie}
            onClick={() => clickdirectorHanler(movie)}
          >
            {movie}
          </span>
        );
      })}
      <h2 style={{ font: "bold" }}>{movies}</h2>
    </div>
  );
}
