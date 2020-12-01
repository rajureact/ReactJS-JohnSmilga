import React, { useState, useEffect } from "react";
import "./index.css";
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";
const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";
function App() {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState("name");
  const getUser = async () => {
    setLoading(true)
    const response = await fetch(url);
    const users = await response.json();
    const person = users.results[0];
    const {
      name: { first, last },
    } = person;
    const { email } = person;
    const { phone } = person;
    const {
      dob: { age },
    } = person;
    const {
      login: { password },
    } = person;
    const {
      location: {
        street: { number, name },
      },
    } = person;
    const {
      picture: { large: image },
    } = person;
    const newPerson = {
      image,
      name: `${first} ${last}`,
      email,
      age,
      street: `${number} ${name}`,
      phone,
      password,
    };
    setUser(newPerson);
    setLoading(false);
    setValue("name");
  };
  const handleValue = (e) => {
    setValue(e.currentTarget.dataset.label);
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <React.Fragment>
      <div className="block bcg-black"></div>
      <div className="block">
        <div className="container">
          <img
            src={!user ? defaultImage : user.image}
            alt="image"
            className="user-img"
          />
          {/* <p className="user-title">My {value} is</p> */}
          <p className="user-title">My {value} is</p>
          <p className="user-value">{!user ? "random user" : user[value]} </p>
          <div className="values-list">
            <button
              className="icon"
              data-label="name"
              onMouseOver={handleValue}
            >
              <FaUser />
            </button>
            <button
              className="icon"
              data-label="email"
              onMouseOver={handleValue}
            >
              <FaEnvelopeOpen />
            </button>
            <button className="icon" data-label="age" onMouseOver={handleValue}>
              <FaCalendarTimes />
            </button>
            <button
              className="icon"
              data-label="street"
              onMouseOver={handleValue}
            >
              <FaMap />
            </button>
            <button
              className="icon"
              data-label="phone"
              onMouseOver={handleValue}
            >
              <FaPhone />
            </button>
            <button
              className="icon"
              data-label="password"
              onMouseOver={handleValue}
            >
              <FaLock />
            </button>
          </div>
          <button className="btn" type="button" onClick={getUser}>
            {loading ? "loading..." : "random user"}
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
