import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, PlayCircle } from 'lucide-react';

function RecipeDetail({ recipe, onBack }) {
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <motion.div 
      className="detail-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button className="back-btn" onClick={onBack}>
        <ArrowLeft size={24} />
      </button>

      <div className="detail-image-side">
        <div className="detail-image-overlay" />
        <motion.img 
          src={recipe.image} 
          alt={recipe.title} 
          className="detail-image"
          layoutId={`recipe-image-${recipe.id}`}
        />
      </div>

      <div className="detail-content-side">
        <motion.div 
          className="detail-tags"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {recipe.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </motion.div>

        <motion.h1 
          className="detail-title"
          layoutId={`recipe-title-${recipe.id}`}
        >
          {recipe.title}
        </motion.h1>

        <motion.div 
          className="detail-section"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, type: "spring" }}
        >
          <h3>Ingredients</h3>
          <div className="ingredients-list">
            {recipe.ingredients.map((ing, idx) => (
              <div key={idx} className="ingredient-item">
                <span className="ing-name">
                  <CheckCircle2 size={16} style={{display: 'inline', marginRight: '8px', color: 'var(--color-primary)'}} />
                  {ing.ingredient}
                </span>
                <span className="ing-measure">{ing.measure}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="detail-section"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          <h3>Instructions</h3>
          <div className="instructions-text">
            {recipe.instructions}
          </div>
        </motion.div>

        {recipe.youtubeUrl && (
          <motion.div 
            className="detail-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <a 
              href={recipe.youtubeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="video-btn"
            >
              <PlayCircle color="currentColor" /> Watch Video Tutorial
            </a>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default RecipeDetail;
