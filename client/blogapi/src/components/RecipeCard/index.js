import React from "react";

const RecipeCard = ({ recipe }) => {
  const { idMeal, strMeal, strCategory, strMealThumb } = recipe;
  return (
    <div className="card">
      <img src={strMealThumb} alt={strMeal} className="card-image" />
      <div className="card-body">
        <span className="category">{strCategory} Recipe</span>
        <h6 className="recipes-h3">{strMeal}</h6>
        <a
          className="recipes-a"
          href={`https://www.themealdb.com/meal/${idMeal}`}
          target="_blank"
        >
          Ingredients
        </a>
      </div>
    </div>
  );
};

export default RecipeCard;
