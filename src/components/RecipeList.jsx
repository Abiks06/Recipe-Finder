import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes, onRecipeSelect, loading }) => {
  if (loading) {
    return (
      <div className="loading-state">
        <div className="spinner"></div>
        <p>Loading delicious recipes...</p>
      </div>
    );
  }

  if (recipes.length === 0) {
    return (
      <div className="empty-state">
        <p>No recipes found. Try a different search term!</p>
      </div>
    );
  }

  return (
    <section className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard 
          key={recipe.id} 
          recipe={recipe} 
          onClick={onRecipeSelect} 
        />
      ))}
    </section>
  );
};

export default RecipeList;
