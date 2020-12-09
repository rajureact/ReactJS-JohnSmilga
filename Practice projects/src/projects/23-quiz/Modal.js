import React from "react";
import { useGlobalContext } from "./context";

const Modal = () => {
  // const isModal = false;
  const { isModal, quiz, index } = useGlobalContext();
  // if (quiz.length > 0) {
    // const { question, correct_answer, incorrect_answers } = quiz[index];
    // const answer = [...incorrect_answers, correct_answer];
    // console.log(answer);
  // }
  return (
    <main>
      <div
        className={`${isModal ? "modal-container isOpen" : "modal-container"}`}
      >
        <div className="modal-content">
          <h2>congrats!</h2>
          <p>You answered 0% of questions correctly</p>
          <button className="close-btn">play again</button>
        </div>
      </div>
      <section className="quiz">
        <p className="correct-answers">correct answers : 0/0</p>
        <article className="container">
          <h2>as dfasd  df?</h2>
          <div className="btn-container">
            <button className="answer-btn">Cycling</button>
            <button className="answer-btn">Swimming</button>
            <button className="answer-btn">Running</button>
            <button className="answer-btn">Horse-Riding</button>
          </div>
        </article>
        <button className="next-question">next question</button>
      </section>
    </main>
  );
};

export default Modal;
