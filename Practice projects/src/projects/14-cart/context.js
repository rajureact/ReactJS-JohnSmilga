import React, { useState, useContext, useReducer, useEffect } from "react";
import cartItems from "./data";
import reducer from "./reducer";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext();

const defaultState = {
  amount: 0,
  total: 0,
  cart: [],
  loading: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const { cart, amount, total, loading } = state;

  const clearAll = () => {
    dispatch({ type: "CLEAR_ALL" });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };

  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  useEffect(() => {
    dispatch({ type: "AMOUNT_TOTAL" });
  }, [cart]);

  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ type: "DISPLAY_ITEM", payload: data });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        cart,
        clearAll,
        removeItem,
        increase,
        decrease,
        amount,
        total,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
