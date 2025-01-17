import React from "react";
import RecipeRow from "./RecipeRow";

function RecipeList({ recipes, deleteRecipe }) {
  return (
      <div className="recipe-list">
        <table>
          <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          {recipes.map((recipe, index) => (
              <RecipeRow
                  recipe={recipe}
                  deleteRecipe={() => deleteRecipe(index)}
                  key={index}
              />
          ))}
          </tbody>
        </table>
      </div>
  );
}

export default RecipeList;