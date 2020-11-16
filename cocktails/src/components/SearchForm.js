import React, { useRef } from "react";
import { useEffect } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchItem } = useGlobalContext();
  const inputValue = useRef(null);
  const inputHandle = () => {
    setSearchItem(inputValue.current.value);
  };
  useEffect(() => {
    inputValue.current.focus();
  }, []);
  const submitHandle = (e) => {
    e.preventDefault();
  };
  return (
    <section className="section search">
      <form className="search-form" onSubmit={submitHandle}>
        <div className="form-control">
          <label>search your favorite cocktail</label>
          <input ref={inputValue} onChange={inputHandle} />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
