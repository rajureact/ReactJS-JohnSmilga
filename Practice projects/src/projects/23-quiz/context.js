import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
// const axios = require("axios");
const table = {
  sports: 21,
  history: 23,
  politics: 24,
};

const API_ENDPOINT = "https://opentdb.com/api.php?";

const url = "";
const tempUrl =
  "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [waiting, setWaiting] = useState(false);
  const [quiz, setQuiz] = useState([]);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [isModal, setIsModal] = useState(false);
  async function getQuiz() {
    try {
      const response = await axios.get(`${tempUrl}`);
      // console.log(response.data.results);
      setQuiz(response.data.results);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getQuiz();
  }, []);

  return (
    <AppContext.Provider value={{ isModal, loading, waiting, quiz, index, correct }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
