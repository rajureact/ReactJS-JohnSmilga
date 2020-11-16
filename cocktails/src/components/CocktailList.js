import React from "react";
import { useGlobalContext } from "../context";
import Cocktail from "./Cocktail";
import Loading from "./Loading";

const CocktailList = () => {
  const { cocktail, loading } = useGlobalContext();
  console.log(cocktail);
  if (loading) {
    return <Loading />;
  }
  if (cocktail.length < 1) {
    return (
      <h2 className="section-title">no cocktails matched your search criteria</h2>
    );
  }
  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {cocktail.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
