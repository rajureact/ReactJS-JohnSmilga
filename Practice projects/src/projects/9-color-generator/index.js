import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";
import "./index.css";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let colors = new Values(color).all(10);
    // console.log(colors);
    // console.log("heoo");
    setList(colors);
  };

  // console.log(new Values('#f15025').all(10));

  return (
    <React.Fragment>
      <div className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button type="submit" className="btn">
            Generate
          </button>
        </form>
      </div>
      <div className="colors">
        {list.map((item, index) => {
          return <SingleColor key={index} {...item} hex={item.hex}/>;
        })}
      </div>
    </React.Fragment>
  );
}

export default App;
