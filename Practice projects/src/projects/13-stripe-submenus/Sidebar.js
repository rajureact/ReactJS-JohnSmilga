import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
import sublinks from "./data";
const Sidebar = () => {
  const { sidebar, handleClose } = useGlobalContext();
  return (
    <React.Fragment>
      <div
        className={`${sidebar ? "sidebar-wrapper show" : "sidebar-wrapper"}`}
      >
        <aside className="sidebar">
          <button className="close-btn" onClick={() => handleClose()}>
            <FaTimes />
          </button>
          <div className="sidebar-links">
            {sublinks.map((items, index) => {
              const { page, links } = items;
              return (
                <article key={index}>
                  <h4>{page}</h4>
                  <div className="sidebar-sublinks">
                    {links.map((item, index) => {
                      const { label, icon, url } = item;
                      return (
                        <a href={url} key={index}>
                          {icon}
                          {label}
                        </a>
                      );
                    })}
                  </div>
                </article>
              );
            })}
          </div>
        </aside>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
