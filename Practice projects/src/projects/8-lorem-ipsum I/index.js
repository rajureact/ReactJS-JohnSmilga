import React, { useState } from "react";
import data from "./data";
import "./index.css";
function App() {
  const [index, setIndex] = useState(0);
  const [list, setList] = useState(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newList = data.filter((item, itemIndex) => {
      return itemIndex < index;
    });
    // const newList = data.slice(0, index);
    setList(newList);
  };
  return (
    <React.Fragment>
      <div className="section-center">
        <h3>Tired of Boring lorem Ipsum?</h3>
        <form onSubmit={handleSubmit} className="lorem-form">
          <label htmlFor="amount">Paragraphs:</label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={index}
            onChange={(e) => setIndex(e.target.value)}
          />
          <button className="btn" type="submit">
            Generate
          </button>
        </form>
        <div className="lorem-text">
          {list.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
