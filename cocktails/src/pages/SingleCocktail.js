import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { useGlobalContext } from "../context";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { loading, setLoading } = useGlobalContext();
  console.log(loading);
  const { id: targetId } = useParams();
  const [details, setDetails] = useState("");
  const fetchData = async () => {
    const response = await fetch(`${url}${targetId}`);
    const data = await response.json();
    const {
      idDrink: id,
      strDrink: name,
      strGlass: glass,
      strAlcoholic: info,
      strDrinkThumb: image,
      strCategory: category,
      strInstructions: instructions,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
    } = data.drinks[0];
    const ingredient = [
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
    ];
    const cocktail = {
      id,
      name,
      glass,
      category,
      instructions,
      info,
      image,
      ingredient,
    };
    setDetails(cocktail);
    setLoading(false);
  };

  const {
    id,
    name,
    glass,
    category,
    instructions,
    info,
    image,
    ingredient,
  } = details;
  useEffect(() => {
    setLoading(true)
    fetchData();
  }, []);

  if(loading){
    return <Loading />
  }
  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={image} alt={name}></img>
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span> {name}
          </p>
          <p>
            <span className="drink-data">category :</span> {category}
          </p>
          <p>
            <span className="drink-data">info :</span> {info}
          </p>
          <p>
            <span className="drink-data">glass :</span> {glass}
          </p>
          <p>
            <span className="drink-data">instructons :</span> {instructions}
          </p>
          <p>
            <span className="drink-data">ingredients :</span>
            {ingredient &&
              ingredient.map((item, index) => {
                return item ? <span key={index}>{item}</span> : null;
              })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
