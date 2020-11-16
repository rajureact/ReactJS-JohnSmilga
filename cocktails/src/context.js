import { useContext } from "react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchItem, setSearchItem] = useState("a");
  const [cocktail, setCocktail] = useState([]);
  const fetchData = async () => {
    const response = await fetch(`${url}${searchItem}`);
    const cocktails = await response.json();
    if (cocktails.drinks !== null) {
      const newCocktail = cocktails.drinks.map((item) => {
        const {
          idDrink: id,
          strDrink: name,
          strGlass: glass,
          strAlcoholic: info,
          strDrinkThumb: image,
        } = item;
        const cocktail = { id, name, glass, info, image };
        return cocktail;
      });
      setCocktail(newCocktail);
      setLoading(false);
    } else {
      setLoading(false);
      setCocktail([]);
    }
  };
  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [searchItem]);

  return (
    <AppContext.Provider
      value={{ loading, setLoading, cocktail, setSearchItem }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
