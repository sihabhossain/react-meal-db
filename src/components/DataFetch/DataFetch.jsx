import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./DataFetch.css";

const DataFetch = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);

  const HandleAddToCart = (meal) => {
    console.log(meal);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {meals.map((meal) => (
          <Product
            key={meal.idMeal}
            meal={meal}
            HandleAddToCart={HandleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <h3>Order summary</h3>
      </div>
    </div>
  );
};

export default DataFetch;
