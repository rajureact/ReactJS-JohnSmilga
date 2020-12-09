import React from "react";
import { AppProvider, useGlobalContext } from "./context";
import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Modal from "./Modal";
import "./index.css";

function App() {
  const {loading, waiting, correct, isModal, quiz, index } = useGlobalContext()
  return (
    <React.Fragment>
      <AppProvider>
        {/* <Loading /> */}
        <SetupForm />
        <Modal />
      </AppProvider>
    </React.Fragment>
  );
}

export default App;
