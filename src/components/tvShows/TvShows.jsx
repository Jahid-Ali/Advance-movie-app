import React, { useEffect, useState } from "react";
import "../movieList/movieList.css";
import { useParams } from "react-router-dom";
import Card from "../card/Card";

const TvShows = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getData();
  });

  // useEffect(() => {
  //   getData();
  // }, [type]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/tv/${
        type ? type : "popular"
      }?api_key=7004bc9b9e1200c5d326bc2ba12828e8&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };

  return (
    <div className="movie__list">
      <h2 className="list__title">
        {(type ? type + " SHOWS" : "POPULAR SHOWS").toUpperCase()}
      </h2>
      <div className="list__cards">
        {movieList.map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default TvShows;
