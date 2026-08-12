const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;
const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

app.use(cors());
app.use(express.json());

// Helper function to map TheMealDB format to our frontend Recipe format
const mapMealToRecipe = (meal) => {
  if (!meal) return null;
  
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    
    if (ingredient && ingredient.trim() !== '') {
      const amount = measure && measure.trim() !== '' ? measure.trim() : '';
      ingredients.push(`${amount} ${ingredient.trim()}`.trim());
    }
  }

  return {
    id: parseInt(meal.idMeal),
    name: meal.strMeal,
    ingredients: ingredients,
    instructions: meal.strInstructions,
    imageURL: meal.strMealThumb
  };
};

// GET all recipes (defaults to a generic search which returns 25 popular meals)
app.get('/api/recipes', async (req, res) => {
  try {
    const response = await fetch(`${BASE_URL}/search.php?s=`);
    const data = await response.json();
    
    if (!data.meals) {
      return res.json([]);
    }
    
    const recipes = data.meals.map(mapMealToRecipe);
    res.json(recipes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching from external API' });
  }
});

// GET search recipes
app.get('/api/recipes/search', async (req, res) => {
  try {
    const term = req.query.q || '';
    const response = await fetch(`${BASE_URL}/search.php?s=${encodeURIComponent(term)}`);
    const data = await response.json();
    
    if (!data.meals) {
      return res.json([]);
    }
    
    const recipes = data.meals.map(mapMealToRecipe);
    res.json(recipes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching from external API' });
  }
});

// GET recipe by ID
app.get('/api/recipes/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const response = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
    const data = await response.json();
    
    if (!data.meals || data.meals.length === 0) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    
    const recipe = mapMealToRecipe(data.meals[0]);
    res.json(recipe);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching from external API' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
