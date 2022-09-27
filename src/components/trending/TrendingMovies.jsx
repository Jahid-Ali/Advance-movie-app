import React, { useEffect, useState } from "react";
import "../movieList/movieList.css";
import Card from "../card/Card";

const TrendingMovies = () => {
  const [trendingMovieList, setTrendingMovieList] = useState([]);

  useEffect(() => {
    getTrendingData();
  });

  const getTrendingData = () => {
    fetch(
      `https://api.themoviedb.org/3/trending/all/week?api_key=7004bc9b9e1200c5d326bc2ba12828e8`
    )
      .then((res) => res.json())
      .then((data) => setTrendingMovieList(data.results));
  };

  return (
    <div className="movie__list">
      <h2 className="list__title">TRENDING</h2>
      <div className="list__cards">
        {/* //! Trending */}
        {trendingMovieList.map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default TrendingMovies;
