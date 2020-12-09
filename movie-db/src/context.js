import React, { useState, useContext, useEffect } from "react";
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("batman");
  const [error, setError] = useState({show: false, msg:""});
  console.log(query);
  
  const getMovies = async () => {
    try {
      const response = await fetch(`${API_ENDPOINT}&s=${query}`);
      const data = await response.json();
      if(data.Response === "True"){
        const { Search } = data;
        setMovies(Search);
        setError({ show: false, msg: "" });
      }
      if(data.Response === "False"){
        setError({show: true, msg:data.Error})
      }
      
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMovies();
  }, [query]);
  return (
    <AppContext.Provider value={{ movies, query, setQuery, error }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
