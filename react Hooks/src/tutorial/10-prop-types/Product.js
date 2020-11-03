import React from 'react';
import PropTypes from "prop-types";
import defaultImage from "../../assets/default-image.jpeg"

const Product = ({image, name, price}) => {
  const url = image && image.url;
  return <article className='product'>
    <img src={url || image} alt=""/>
    <h3>{name}</h3>
    <p>${price}</p>
  </article>;
};

Product.propTypes={
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.object.isRequired
};

Product.defaultProps={
  name: "Hi",
  price: 312,
  image: defaultImage
}

export default Product;
