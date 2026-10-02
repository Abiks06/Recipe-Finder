import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

function RecipeCard({ recipe, onClick }) {
  return (
    <motion.div 
      className="recipe-card"
      variants={itemVariants}
      onClick={onClick}
      layoutId={`recipe-card-${recipe.id}`}
    >
      <div className="card-image-container">
        <motion.img 
          src={recipe.image} 
          alt={recipe.title} 
          className="card-image"
          layoutId={`recipe-image-${recipe.id}`}
        />
      </div>
      <div className="card-overlay">
        <div className="card-tags">
          {recipe.tags.slice(0, 3).map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <motion.h3 
          className="card-title"
          layoutId={`recipe-title-${recipe.id}`}
        >
          {recipe.title}
        </motion.h3>
        <button className="view-btn">
          View Recipe <ArrowRight size={18} />
        </button>
      </div>
    </motion.div>
  );
}

export default RecipeCard;
