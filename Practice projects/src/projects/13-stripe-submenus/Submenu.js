import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";
import sublinks from "./data";

const Submenu = () => {
  const { subMenuShow, linkName, position } = useGlobalContext();
  const [col, setCol] = useState("col-2");

  const center = (position.left + position.right) / 2;

  let newLink = sublinks.find((item) => {
    return item.page === linkName;
  });
  useEffect(() => {
    if (newLink && newLink.links.length > 2) {
      setCol("col-3");
    }
  }, [linkName]);

  return (
    <React.Fragment>
      <aside
        className={`${subMenuShow ? "submenu show" : "submenu"}`}
        style={{ left: `${center && center}px` }}
      >
        <section>
          <h4>{newLink && newLink.page}</h4>
          <div className={`submenu-center ${col}`}>
            {newLink &&
              newLink.links.map((item, index) => {
                const { label, icon, url } = item;
                return (
                  <a href={url} key={index}>
                    {icon}
                    {label}
                  </a>
                );
              })}
          </div>
        </section>
      </aside>
    </React.Fragment>
  );
};

export default Submenu;
