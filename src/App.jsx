import React, { useState, useEffect } from 'react';
import { ChefHat } from 'lucide-react';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import { normalizeRecipeData } from './utils/normalizeRecipeData';
import './index.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Initial load: Fetch some random recipes or a default search
    fetchRecipes('chicken');
  }, []);

  useEffect(() => {
    if (searchTerm === '') {
      return;
    }
    const timer = setTimeout(() => {
      fetchRecipes(searchTerm);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const fetchRecipes = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`);
      if (!response.ok) throw new Error('Failed to fetch recipes');
      
      const data = await response.json();
      
      if (data.meals) {
        setRecipes(data.meals.map(normalizeRecipeData));
      } else {
        setRecipes([]);
      }
    } catch (err) {
      console.error("Error fetching recipes:", err);
      setError('Something went wrong while fetching recipes.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      <main className="main-content">
        <RecipeList 
          recipes={recipes} 
          onRecipeSelect={setSelectedRecipe} 
          loading={loading}
          error={error}
          searchTerm={searchTerm}
        />
      </main>

      {selectedRecipe && (
        <RecipeDetail 
          recipe={selectedRecipe} 
          onBack={() => setSelectedRecipe(null)} 
        />
      )}

      <footer className="app-footer">
        <p>Built with <ChefHat size={16} style={{display: 'inline', margin: '0 4px', color: 'var(--color-primary)'}} /> by Abiks</p>
      </footer>
    </div>
  );
}

export default App;
