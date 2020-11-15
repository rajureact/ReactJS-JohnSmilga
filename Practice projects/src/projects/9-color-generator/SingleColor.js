import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, hex }) => {
  // const newRgb = rgb.join(",");
  // console.log(newRgb);
  // const hex = rgbToHex(...newRgb);
  // console.log(hex);
  const newHex = `#${hex}`
  return (
    <React.Fragment>
      <article style={{ backgroundColor: `${newHex}` }}>
        <p className="percent-value">{weight}%</p>
        <p className="color">{newHex}</p>
      </article>
    </React.Fragment>
  );
};

export default SingleColor;
