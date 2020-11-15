import React, { useState, useContext } from "react";

export const DataContext = React.createContext();
export const AppProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const handleModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const handleSidebar = () => {
    setSidebar(true);
  };

  const closeSidebar = () => {
    setSidebar(false);
  };

  return (
    <React.Fragment>
      <DataContext.Provider
        value={{
          handleModal,
          modal,
          handleSidebar,
          sidebar,
          closeModal,
          closeSidebar,
        }}
      >
        {children}
      </DataContext.Provider>
    </React.Fragment>
  );
};

export const useGlobalContext = () => {
  return useContext(DataContext);
};
