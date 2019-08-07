import React from "react";
import BurgerIngredient from "./BurgerIngredient";
import "./styles.css";
const Burger = ({ ingredients }) => {
  let ingredientsArray = [];
  Object.keys(ingredients).forEach(ingKey => {
    for (let i = 0; i < ingredients[ingKey]; i++)
      ingredientsArray = [
        ...ingredientsArray,
        <BurgerIngredient key={ingKey + i} type={ingKey} />
      ];
  });

  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />

      {ingredientsArray.length === 0 ? (
        <p>Plz add ingredients</p>
      ) : (
        ingredientsArray
      )}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
