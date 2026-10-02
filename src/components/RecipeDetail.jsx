import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, PlayCircle } from 'lucide-react';

function RecipeDetail({ recipe, onBack }) {
  // Prevent scrolling on the body when detail is open
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
        <motion.img 
          src={recipe.image} 
          alt={recipe.title} 
          className="detail-image"
          layoutId={`recipe-image-${recipe.id}`}
        />
      </div>

      <div className="detail-content-side">
        <motion.h1 
          className="detail-title"
          layoutId={`recipe-title-${recipe.id}`}
        >
          {recipe.title}
        </motion.h1>

        <motion.div 
          className="detail-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
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
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--color-text)',
                textDecoration: 'none',
                background: 'var(--color-surface)',
                padding: '12px 24px',
                borderRadius: '9999px',
                border: '1px solid var(--color-border)'
              }}
            >
              <PlayCircle color="#FF0000" /> Watch Video Tutorial
            </a>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default RecipeDetail;
