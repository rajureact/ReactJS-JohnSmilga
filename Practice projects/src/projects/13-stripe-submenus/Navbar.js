import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const {
    handleSidebar,
    handleLinks,
    falseLink,
  } = useGlobalContext();

  return (
    <React.Fragment>
      <nav className="nav" onMouseOver={falseLink}>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} alt="logo" className="nav-logo" />
            <button className="btn toggle-btn" onClick={handleSidebar}>
              <FaBars />
            </button>
          </div>
          <ul className="nav-links">
            <li>
              <button className="link-btn" onMouseOver={handleLinks}>
                products
              </button>
            </li>
            <li>
              <button className="link-btn" onMouseOver={handleLinks}>
                developers
              </button>
            </li>
            <li>
              <button className="link-btn" onMouseOver={handleLinks}>
                company
              </button>
            </li>
          </ul>
          <button className="btn signin-btn">Sign in</button>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
