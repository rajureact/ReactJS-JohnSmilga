import React from "react";
import image from "./images/item-1.jpeg";
const Menu = ({ menu }) => {
  return (
    <React.Fragment>
      <div className="section-center">
        {menu.map((item) => {
          const { id, img, title, price, desc } = item;
          return (
            <article className="menu-item" key={id}>
              <img className="photo" src={image} />
              <div className="item-info">
                <header>
                  <h4>{title}</h4>
                  <h4 className="price">${price}</h4>
                </header>
                <p className="item-text">{desc}</p>
              </div>
            </article>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Menu;
