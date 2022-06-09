import React from "react";

const RecipeSearchBar = ({ value, isLoading, handleSubmit, onChange }) => {
  return (
    <form className="search-bar-form" onSubmit={handleSubmit}>
      <input
        value={value}
        disabled={isLoading}
        onChange={onChange}
        placeholder="Search Recipes"
        className="search-form-control search-input"
      />
      <button
        disabled={isLoading || !value}
        type="submit"
        className="search-btn"
      >
        Search
      </button>
    </form>
  );
};

export default RecipeSearchBar;
