import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Home = () => {
  const data = useGlobalContext()
  const { handleModal, handleSidebar } = data;
  return (
    <React.Fragment>
      <main>
        <button className="sidebar-toggle" onClick={() => handleSidebar()}>
          <FaBars />
        </button>
        <button className="btn" onClick={() => handleModal()}>
          Show Modal
        </button>
      </main>
    </React.Fragment>
  );
};

export default Home;
