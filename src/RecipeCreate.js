import React, { useState } from "react";

function RecipeCreate({createRecipe}) {
  const initialFormState = { // initial state is an object
    name: "Name of Dish",
    cuisine: "Cuisine",
    photo: "Photo Url",
    ingredients: "List of Ingredients",
    preparation: "Instructions for preparation",
  };
  const [formData, setFormData] = useState({ ...initialFormState });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(formData);
    setFormData({ ...initialFormState });
  };

  return (
      <form name="create" onSubmit={handleSubmit}>
        <table>
          <tbody>
          <tr>
            <td>
              <input
                  id="name"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                  placeholder="Name of Dish"
              />
            </td>
            <td>
              <input
                  id="cuisine"
                  type="text"
                  name="cuisine"
                  onChange={handleChange}
                  value={formData.cuisine}
                  placeholder="Cuisine"
              />
            </td>
            <td>
              <input
                  id="photo"
                  type="url"
                  name="photo"
                  onChange={handleChange}
                  value={formData.photo}
                  placeholder="Photo URL"
              />
            </td>
            <td>
              <textarea
                  id="ingredients"
                  name="ingredients"
                  onChange={handleChange}
                  value={formData.ingredients}
                  placeholder="List of Ingredients"
              />
            </td>
            <td>
              <textarea
                  id="preparation"
                  name="preparation"
                  onChange={handleChange}
                  value={formData.preparation}
                  placeholder="Instructions for Preparation"
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
          </tbody>
        </table>
      </form>
  );
}

export default RecipeCreate;