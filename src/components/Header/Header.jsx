import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          <img src={require("./LOGO.png")} alt="logo" className="header_icon" />
        </Link>
        <div className="headerRight">
          <Link to="/movies/popular">
            <span>Polpular</span>
          </Link>
          <Link to="/movies/top_rated">
            <span>Top Rated</span>
          </Link>
          <Link to="/movies/upcoming">
            <span>Upcoming</span>
          </Link>
          <Link to="/tv/popular">
            <span>TV Shows</span>
          </Link>
          <Link to="/tv/top_rated">
            <span>Top Rated Shows</span>
          </Link>
          <Link to="/tv/on_the_air">
            <span>Latest TV Shows</span>
          </Link>
          <Link to="/search/movie">
            <i className="fa-brands fa-searchengin fa-2xl"></i>
          </Link>
        </div>

        {nav && (
          <div className="navOpen">
            <Link to="/movies/popular" onClick={() => setNav(!nav)}>
              <span>Polpular</span>
            </Link>
            <Link to="/movies/top_rated" onClick={() => setNav(!nav)}>
              <span>Top Rated</span>
            </Link>
            <Link to="/movies/upcoming" onClick={() => setNav(!nav)}>
              <span>Upcoming</span>
            </Link>
            <Link to="/tv/popular" onClick={() => setNav(!nav)}>
              <span className="navOpenModify">TV Shows</span>
            </Link>
            <Link to="/tv/top_rated" onClick={() => setNav(!nav)}>
              <span className="navOpenModify">Top Shows</span>
            </Link>
            <Link to="/tv/on_the_air" onClick={() => setNav(!nav)}>
              <span className="navOpenModify">Latest Shows</span>
            </Link>
            <Link to="/search/movie" onClick={() => setNav(!nav)}>
              <i className="fa-brands fa-searchengin fa fa-2xl"></i>
            </Link>
          </div>
        )}
      </div>

      <div onClick={() => setNav(!nav)} className="burger">
        {nav ? (
          <i className="fa-solid fa-circle-xmark fa fa-xl"></i>
        ) : (
          <i className="fa-solid fa-burger fa fa-xl"></i>
        )}
      </div>
    </div>
  );
};

export default Header;
