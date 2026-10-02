import React from 'react';
import { motion } from 'framer-motion';
import { Loader2, FileQuestion } from 'lucide-react';
import RecipeCard from './RecipeCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

function RecipeList({ recipes, onRecipeSelect, loading, error, searchTerm }) {
  if (loading) {
    return (
      <div className="loading-container">
        <Loader2 size={48} className="spinner" />
        <p>Curating recipes...</p>
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
        <p>We couldn't find any culinary masterpieces matching "{searchTerm}".</p>
      </div>
    );
  }

  return (
    <motion.div 
      className="recipe-feed"
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
