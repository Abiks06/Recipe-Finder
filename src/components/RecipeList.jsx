import React from 'react';
import { motion } from 'framer-motion';
import { FileQuestion } from 'lucide-react';
import RecipeCard from './RecipeCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

function RecipeList({ recipes, onRecipeSelect, loading, error, searchTerm }) {
  if (loading) {
    return (
      <div className="skeleton-grid">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={`skeleton-${i}`} className="skeleton-card" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <FileQuestion size={64} className="error-icon" />
        <h2>Something went wrong</h2>
        <p>{error}</p>
      </div>
    );
  }

  if (recipes.length === 0) {
    return (
      <div className="error-container">
        <FileQuestion size={64} className="error-icon" />
        <h2>No recipes found</h2>
        <p>We couldn't find any culinary masterpieces matching "{searchTerm}". Try a different ingredient!</p>
      </div>
    );
  }

  return (
    <motion.div 
      className="recipe-grid"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {recipes.map(recipe => (
        <RecipeCard 
          key={recipe.id} 
          recipe={recipe} 
          onClick={() => onRecipeSelect(recipe)} 
        />
      ))}
    </motion.div>
  );
}

export default RecipeList;
