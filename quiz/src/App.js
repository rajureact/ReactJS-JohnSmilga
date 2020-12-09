import React from "react";
import { useGlobalContext } from "./context";

import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Modal from "./Modal";
function App() {
  const {
    loading,
    waiting,
    correct,
    index,
    quiz,
    handleAnswer,
    nextQuestion,
  } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (waiting) {
    return <SetupForm />;
  }
  const { question, incorrect_answers, correct_answer } = quiz[index];
  // const answer = [...incorrect_answers, correct_answer];
  const answer = [...incorrect_answers];
  const random = Math.floor(Math.random() * 4);
  if (random === 0) {
    answer.push(correct_answer);
  } else {
    answer.push(answer[random]);
    answer[random] = correct_answer;
  }
  return (
    <main>
      <Modal />
      <section className="quiz">
        <p className="correct-answers">
          correct answers : {correct}/{index}
        </p>
        <article className="container">
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div className="btn-container">
            {answer.map((item, index) => {
              return (
                <button
                  key={index}
                  className="answer-btn"
                  onClick={() => handleAnswer(item === correct_answer)}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </article>
        <button className="next-question" onClick={nextQuestion}>
          next question
        </button>
      </section>
    </main>
  );
}

export default App;
