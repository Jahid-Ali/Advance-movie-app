import React, { useEffect, useState } from "react";
import "./searchMovies.css";
import Card from "../../components/card/Card";
import TrendingMovies from "../../components/trending/TrendingMovies";

const SearchMovies = () => {
  const [searchMovieList, setSearchMovieList] = useState([]);
  const [query, setquery] = useState("hulk");

  const getSearchData = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=7004bc9b9e1200c5d326bc2ba12828e8&language=en-US&query=${query}&page=1&include_adult=false`
    )
      .then((res) => res.json())
      .then((data) => setSearchMovieList(data.results));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      getSearchData();

      //! after submit clear input box
      setquery("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="search_page">
      <div className="search_page_top">
        <h2 className="search_page_title">SEARCH</h2>
        <form
          className="form"
          onSubmit={(e) => {
            onSubmit(e);
          }}
        >
          <input
            className="input"
            type="text"
            placeholder="search here ... "
            autoComplete="Off"
            value={query}
            onChange={(e) => setquery(e.target.value)}
          />
          <button className="submit" type="submit">
            Search
          </button>
        </form>
      </div>

      <div className="search_page_card">
        {searchMovieList.map((movie) => (
          <Card movie={movie} />
        ))}
      </div>

      <TrendingMovies />
    </div>
  );
};

export default SearchMovies;
