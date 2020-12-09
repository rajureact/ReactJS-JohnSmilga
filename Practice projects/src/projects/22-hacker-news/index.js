import React from "react";
import "./index.css";
import SearchForm from "./SearchForm";
import Stories from "./Stories";
import Buttons from "./Buttons";
import { AppProvider } from "./context";
function App() {
  return (
    <React.Fragment>
      <AppProvider>
        <SearchForm />
        <Buttons />
        <Stories />
      </AppProvider>
    </React.Fragment>
  );
}

export default App;
