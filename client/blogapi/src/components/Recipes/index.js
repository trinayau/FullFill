import React, { useState } from "react";
import MealList from "../MealList";

function App() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=fd6746bcbe074d678f49571ae82b2c27&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  function handleChange(e) {
    setCalories(e.target.value);
  }

  return (
    <div className="App">
      <section className="controls">
        <h1>Recipe Finder</h1>
        <h2>
          Enter the ingredients you want to use and we'll find meals for you:
        </h2>
        <input type="text" placeholder="" onChange={handleChange} />
        <button onClick={getMealData}>Submit</button>
      </section>
      {mealData && <MealList mealData={mealData} />}
    </div>
  );
}

export default App;
