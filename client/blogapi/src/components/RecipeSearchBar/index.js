import React from "react";

const RecipeSearchBar = ({ value, isLoading, handleSubmit, onChange }) => {
  return (
    <form className="recipes-form" onSubmit={handleSubmit}>
      <input
        value={value}
        disabled={isLoading}
        onChange={onChange}
        placeholder="Search Recipes"
        className="form-control recipes-input"
      />
      <button disabled={isLoading || !value} type="submit" className="btn">
        Search
      </button>
    </form>
  );
};

export default RecipeSearchBar;
