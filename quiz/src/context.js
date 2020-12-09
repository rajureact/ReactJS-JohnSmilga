import axios from "axios";
import React, { useState, useContext } from "react";

const table = {
  sports: 21,
  history: 23,
  politics: 24,
};

const API_ENDPOINT = "https://opentdb.com/api.php?";

// const url = "";
// const tempUrl = "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [waiting, setWaiting] = useState(true);
  const [quiz, setQuiz] = useState([]);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [isModal, setIsModal] = useState(false);
  const [error, setError] = useState(false);
  const [question, setQuestion] = useState({
    amount: 10,
    category: "sports",
    difficulty: "easy",
  });
  async function getQuiz(url) {
    try {
      setLoading(true);
      const response = await axios.get(url);
      if (response.data.results.length > 0) {
        setQuiz(response.data.results);
        setLoading(false);
        setWaiting(false);
      } else {
        setLoading(false);
        setError(true);
        setWaiting(true);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError(true);
      setWaiting(true);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getQuiz(
      `${API_ENDPOINT}amount=${question.amount}&category=${
        table[question.category]
      }&difficulty=${question.difficulty}&type=multiple`
    );
  };
  const nextQuestion = () => {
    setIndex((oldIndex) => {
      if (oldIndex >= quiz.length - 1) {
        setIsModal(true);
        return 0;
      }
      return oldIndex + 1;
    });
  };
  const handleAnswer = (value) => {
    if (value) {
      setCorrect(correct + 1);
    }
    nextQuestion();
  };
  const valueHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuestion({ ...question, [name]: value });
  };
  const modalHandle = () => {
    setIsModal(false);
    setWaiting(true);
    setCorrect(0);
  };

  return (
    <AppContext.Provider
      value={{
        isModal,
        loading,
        waiting,
        quiz,
        index,
        correct,
        handleSubmit,
        handleAnswer,
        nextQuestion,
        valueHandle,
        question,
        error,
        modalHandle,
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
