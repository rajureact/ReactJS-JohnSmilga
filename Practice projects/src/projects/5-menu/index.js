import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import "./index.css";
import items from "./data";

let allCategory = items.map((item) => {
  return item.category;
});
allCategory = new Set(allCategory);

function App() {
  const [menu, setMenu] = useState(items);
  const menuHandle = (category) => {
    if (category === "all") {
      setMenu(items);
    } else {
      
      const newMenu = items.filter((item) => {
        return item.category === category;
      });
      setMenu(newMenu);
    }
  };
  return (
    <React.Fragment>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories allCategory={allCategory} menuHandle={menuHandle} />
        <Menu menu={menu} />
      </section>
    </React.Fragment>
  );
}

export default App;
