import React from "react";

const Categories = ({ allCategory, menuHandle }) => {
  const allCategories = [...allCategory];
  return (
    <React.Fragment>
      <div className="btn-container">
        <button type="button" className="filter-btn" onClick={()=>menuHandle("all")}>All</button>
        {allCategories.map((item, index) => {
          return (
            <button
              type="button"
              className="filter-btn"
              key={index}
              onClick={()=>menuHandle(item)}
            >
              {item}
            </button>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Categories;
