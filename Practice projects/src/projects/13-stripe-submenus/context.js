import React, { useState, useContext, createContext } from "react";
import sublinks from "./data";

export const ProvideContext = createContext();

export const AppProvider = ({ children }) => {
  const [subMenuShow, setSubMenuShow] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [linkName, setLinkName] = useState("");
  const [position, setPosition] = useState("");

  const handleSidebar = () => {
    setSidebar(true);
  };
  const handleClose = () => {
    setSidebar(false);
  };

  const handleLinks = (e) => {
    const targetPosition = e.target.getBoundingClientRect();
    const targetValue = e.target.textContent;
    setLinkName(targetValue);
    setSubMenuShow(true);
    setPosition(targetPosition);
  };

  const falseLink = (e) => {
    if(!e.target.classList.contains("link-btn")){
      setSubMenuShow(false);
    }
  };

  return (
    <React.Fragment>
      <ProvideContext.Provider
        value={{
          handleSidebar,
          handleClose,
          sidebar,
          handleLinks,
          subMenuShow,
          linkName,
          falseLink,
          position,
        }}
      >
        {children}
      </ProvideContext.Provider>
    </React.Fragment>
  );
};

export const useGlobalContext = () => {
  return useContext(ProvideContext);
};
