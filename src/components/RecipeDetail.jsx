import React, { useEffect } from 'react';

const RecipeDetail = ({ recipe, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!recipe) return null;

  const steps = recipe.instructions
    .split(/\d+\.\s+/)
    .filter((step) => step.trim() !== "");

  return (
    <section className="recipe-detail-container">
      <button className="back-button" onClick={onBack}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Back to Recipes
      </button>
      
      <article className="recipe-detail-card">
        <div className="detail-hero" style={{ backgroundImage: `url(${recipe.imageURL})` }}>
          <div className="detail-hero-overlay"></div>
          <h2>{recipe.name}</h2>
        </div>
        
        <div className="detail-content">
          <div className="ingredients-section">
            <h3>Ingredients</h3>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>
                  <span className="bullet-point"></span>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="instructions-section">
            <h3>Instructions</h3>
            <ol>
              {steps.map((step, index) => (
                <li key={index}>
                  <span className="step-number">{index + 1}</span>
                  <p>{step.trim()}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </article>
    </section>
  );
};

export default RecipeDetail;
