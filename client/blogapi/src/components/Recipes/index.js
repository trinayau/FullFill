import { useState, useEffect } from "react";
import "./Recipes.css";
import SearchBar from "../RecipeSearchBar";
import RecipeCard from "../RecipeCard";

const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function Recipes() {
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("chicken");
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async () => {
    setIsLoading(true);
    const url = apiUrl + searchQuery;
    const response = await fetch(url);
    const data = await response.json();
    setRecipes(data.meals);
    setIsLoading(false);
  };

  useEffect(() => {
    searchRecipes();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchRecipes();
  };

  return (
    <div className="recipes-container">
      <br />
      <h2 className="recipes-h2">Recipe Finder</h2>
      <p>Enter the ingredients you want, and we'll find recipes for you!</p>
      <SearchBar
        handleSubmit={handleSubmit}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        isLoading={isLoading}
      />
      <div className="recipes">
        {recipes
          ? recipes.map((recipe) => (
              <RecipeCard key={recipe.idMeal} recipe={recipe} />
            ))
          : "No Results."}
      </div>
    </div>
  );
}

export default Recipes;
