import React, { useState } from "react";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import Home from "./Home";
import "./index.css";
import { AppProvider } from "./context";

export const App = () => {
  return (
    <React.Fragment>
      <AppProvider>
        <Home />
        <Modal />
        <Sidebar />
      </AppProvider>
    </React.Fragment>
  );
};

export default App;
