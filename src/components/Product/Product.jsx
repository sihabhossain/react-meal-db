import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { idMeal, strArea, strMeal, strMealThumb, strTags } = props.meal;
  return (
    <div className="product-container">
      <div className="product">
        <img src={strMealThumb} alt="" />
        <h2>Name: {strMeal}</h2>
        <p>Region: {strArea}</p>
        <p>id: {idMeal}</p>
        <p>Tag: {strTags}</p>
        <button>
          Add To Cart
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      </div>
    </div>
  );
};

export default Product;
