import React, { useState } from "react";
import axios from "axios";
import Card from "./Card";

const Reciepe = () => {
  const [ingredient, setIngredient] = useState("");
  const [recipes, setRecipes] = useState([]);

  const URL = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredient}&apiKey=d884b9640a254d83ada781e53c09a191`;

  const fetchApi = async () => {
    const { data } = await axios.get(URL);
    console.log(data);
    setRecipes(data);
    setIngredient("");
  };

  return (
    <div className="main">
      <input
        type="text"
        placeholder="ingredients"
        onChange={(e) => setIngredient(e.target.value)}
      />
      <button onClick={fetchApi}>Search Recipes</button>

      <Card data={recipes} />
    </div>
  );
};

export default Reciepe;
