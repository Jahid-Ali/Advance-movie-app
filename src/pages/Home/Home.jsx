import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import "./home.css";
import MovieList from "../../components/movieList/MovieList";
import TrendingMovies from "../../components/trending/TrendingMovies";

const Home = () => {
  //! Whenever we getch data from API we need to store data in array
  //   !so we use this data when ever we want..

  const [popularMovies, setPopularMovies] = useState([]);

  //! Whenever Page load its shows popular movies
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=7004bc9b9e1200c5d326bc2ba12828e8&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
    //   .then((data) => console.log(data.results));
  });

  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          interval={3000}
          useKeyboardArrows={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {popularMovies.map((movie) => (
            <Link
              style={{ color: "#ffffff" }}
              to={`/movie/${movie.id}`}
              key={movie.id}
            >
              <div className="posterImage">
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                  alt="poster_Img"
                />
              </div>
              <div className="posterImage__overlay">
                <div className="posterImage__title">
                  {movie ? movie.original_title : ""}
                </div>
                <div className="posterImage__date">
                  {movie ? movie.release_date : ""}
                  <span className="posterImage__rating">
                    {movie ? movie.vote_average : ""}
                    <i className="fas fa-star" />{" "}
                  </span>
                </div>
                <div className="posterImage__description">
                  {movie ? movie.overview : ""}
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
        {/* //! Movies List */}
        <MovieList />

        {/* //! TRENDING Movies List */}
        <TrendingMovies />
      </div>
    </>
  );
};

export default Home;
