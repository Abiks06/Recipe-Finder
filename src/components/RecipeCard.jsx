import React from 'react';

const RecipeCard = ({ recipe, onClick }) => {
  return (
    <article className="recipe-card" onClick={() => onClick(recipe)}>
      <div className="card-image-wrapper">
        <img src={recipe.imageURL} alt={recipe.name} loading="lazy" />
        <div className="card-overlay">
          <span>View Recipe</span>
        </div>
      </div>
      <div className="card-content">
        <h3>{recipe.name}</h3>
        <p>{recipe.ingredients.length} Ingredients</p>
      </div>
    </article>
  );
};

export default RecipeCard;
