import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { API_ENDPOINT } from "./context";

const SingleMovie = () => {
  const [singleMovie, setSingleMovie] = useState("");
  const { id } = useParams();
  const getMovies = async () => {
    const response = await fetch(`${API_ENDPOINT}&i=${id}`);
    const data = await response.json();
    setSingleMovie(data);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <section className="single-movie">
      <img src={singleMovie.Poster} alt={singleMovie.title} />
      <div className="single-movie-info">
        <h2>{singleMovie.Title}</h2>
        <p>{singleMovie.Plot}</p>
        <h4>{singleMovie.Year}</h4>
        <Link className="btn" href="/">
          back to movies
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;
