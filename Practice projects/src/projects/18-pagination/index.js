import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";
import "./index.css";
function App() {
  const { user, loading } = useFetch();
  const [page, setPage] = useState(0);
  return (
    <React.Fragment>
      <div className="section-title">
        <h1>{loading ? "Loading..." : "pagination"}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {!loading &&
            user[page].map((item, index) => {
              return <Follower key={index} {...item} />;
            })}
        </div>
        <div className="btn-container">
          {!loading && <button className="prev-btn" 
            onClick={() => page === 0 ? setPage(user.length - 1) : setPage(page - 1)}>
            prev
          </button>}
          {!loading &&
            user.map((item, index) => {
              return (
                  <button className={`${page === index ? "page-btn active-btn" : "page-btn"}`}
                    key={index}
                    onClick={() => setPage(index)}>
                    {index + 1}
                </button>
              );
            })}
          {!loading && <button className="next-btn" 
            onClick={() => page === user.length - 1 ? setPage(0) : setPage(page + 1)}>
            next
          </button>}
        </div>
      </section>
    </React.Fragment>
  );
}

export default App;
