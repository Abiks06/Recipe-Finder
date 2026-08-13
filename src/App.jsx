import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import './index.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchRecipes(searchTerm);
    }, 300); // 300ms delay for debouncing

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const fetchRecipes = async (query) => {
    setLoading(true);
    try {
      const baseUrl = import.meta.env.VITE_API_URL || 'https://recipe-finder-w722.onrender.com';
      const endpoint = query 
        ? `${baseUrl}/api/recipes/search?q=${encodeURIComponent(query)}`
        : `${baseUrl}/api/recipes`;
        
      const response = await fetch(endpoint);
      if (!response.ok) throw new Error('Failed to fetch recipes');
      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      // Fallback for demo purposes if backend isn't running
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <Header />
      
      <main className="main-content">
        {selectedRecipe ? (
          <RecipeDetail 
            recipe={selectedRecipe} 
            onBack={() => setSelectedRecipe(null)} 
          />
        ) : (
          <>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <RecipeList 
              recipes={recipes} 
              onRecipeSelect={setSelectedRecipe} 
              loading={loading}
            />
          </>
        )}
      </main>

      <footer className="app-footer">
        <p>
          Built by Ab<span className="heart-i">ı<span className="beating-heart">❤️</span></span>ks
        </p>
      </footer>
    </div>
  );
}

export default App;
