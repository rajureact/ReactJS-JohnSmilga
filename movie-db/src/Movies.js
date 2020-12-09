import React from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";
const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Movies = () => {
  const { movies, error } = useGlobalContext();
  // console.log(error);
  // console.log(movies);
  return (
    <section className="movies">
      {!error.show && movies.map((item) => {
        const { Title, Poster, Year, imdbID } = item;
        return (
          <Link className="movie" to={`/single/${imdbID}`} key={imdbID}>
            <article>
              <img src={Poster} alt={Title} />
              <div className="movie-info">
                <h4 className="title">{Title}</h4>
                <p>{Year}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Movies;
