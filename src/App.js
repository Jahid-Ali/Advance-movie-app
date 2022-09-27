import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import MovieList from "./components/movieList/MovieList";
import TvShows from "./components/tvShows/TvShows";
import Home from "./pages/Home/Home";
import Movie from "./pages/movieDetail/Movie";
import SearchMovies from "./pages/searchPage/SearchMovies";

function App() {
  return (
    <div className="App">
      <Router>
        {/* Import Header.jsx */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/movies/:type" element={<MovieList />} />
          <Route path="/search/movie" element={<SearchMovies />} />
          <Route path="/tv/:type" element={<TvShows />} />
          <Route path="/*" element={<h1>Error</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
