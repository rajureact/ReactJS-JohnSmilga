import React from "react";

const Follower = ({ avatar_url, html_url, login }) => {
  return (
    <React.Fragment>
      <article className="card">
        <img src={avatar_url} alt="ThaELL1" />
        <h4>{login}</h4>
        <a href={html_url} className="btn">
          view profile
        </a>
      </article>
    </React.Fragment>
  );
};

export default Follower;
