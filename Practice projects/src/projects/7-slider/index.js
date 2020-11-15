import React, { useState, useEffect } from "react";
import "./index.css";
import {
  FaGreaterThan,
  FaLessThan,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa";

import data from "./data";

export default function Index() {
  const [index, setIndex] = useState(0);
  const [people, setPeople] = useState(data);
  // const { image, name, title, quote } = people[index];
  // console.log(data.length);
  useEffect(() => {
    if (index === data.length) {
      setIndex(0);
    }
    if (index < 0 ) {
      setIndex(data.length-1);
    }
  }, [index]);
  useEffect(() => {
    const set = setInterval(() => {
      setIndex(index + 1);
    }, 4000);
    return () => {
      clearInterval(set);
    };
  }, [index])
  
  return (
    <React.Fragment>
      <div className="container">
        <div className="title">
          <h2>/ Reviews</h2>
        </div>

        <div className="slider-container">
          <button className="prev" onClick={() => setIndex(index - 1)}>
            <FaLessThan />
          </button>

          {people.map((item,itemIndex) => {
            let position = "nextSlider";
            if(itemIndex === index){
              position = "active";
            }

            if (itemIndex == index-1 || (index == 0 && itemIndex === data.length-1)) {
              position = "prevSlider";
            }

            return (
              <article key={item.id} className={position}>
                <img src={item.image} alt="" />
                <h4>{item.name}</h4>
                <p>{item.title}</p>
                <p className="details">
                  <FaQuoteLeft /> {item.quote} <FaQuoteRight />
                </p>
              </article>
            );
          })}

          <button className="next" onClick={() => setIndex(index + 1)}>
            <FaGreaterThan />
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
