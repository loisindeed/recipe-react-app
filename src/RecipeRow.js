import React from "react";

function RecipeRow({ recipe, deleteRecipe }) {
    return (
        <tr>
            <td>{recipe.name}</td>
            <td>{recipe.cuisine}</td>
            <td><img src={recipe.photo} alt={recipe.name} style={{ width: '100px', height: '100px' }} /></td>
            <td>{recipe.ingredients}</td>
            <td>{recipe.preparation}</td>
            <td><button name="delete" onClick={deleteRecipe}>Delete</button></td>
        </tr>
    );
}

export default RecipeRow;