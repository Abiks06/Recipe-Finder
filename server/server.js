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

// In-memory cache
let cachedDefaultRecipes = null;
let searchCache = new Map();

// GET all recipes (fetch a rich default set by combining popular searches)
app.get('/api/recipes', async (req, res) => {
  if (cachedDefaultRecipes) {
    return res.json(cachedDefaultRecipes);
  }


  try {
    const defaultSearches = ['', 'chicken', 'beef', 'cake', 'pasta'];
    const fetchPromises = defaultSearches.map(term => 
      fetch(`${BASE_URL}/search.php?s=${term}`).then(res => res.json())
    );
    
    const results = await Promise.all(fetchPromises);
    
    let allMeals = [];
    results.forEach(data => {
      if (data.meals) {
        allMeals = [...allMeals, ...data.meals];
      }
    });

    // Deduplicate by ID to ensure a clean list
    const uniqueMeals = Array.from(new Map(allMeals.map(meal => [meal.idMeal, meal])).values());
    
    const recipes = uniqueMeals.map(mapMealToRecipe);
    cachedDefaultRecipes = recipes; // Save to cache
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
    
    if (searchCache.has(term)) {
      return res.json(searchCache.get(term));
    }

    const response = await fetch(`${BASE_URL}/search.php?s=${encodeURIComponent(term)}`);
    const data = await response.json();
    
    if (!data.meals) {
      return res.json([]);
    }
    
    const recipes = data.meals.map(mapMealToRecipe);
    searchCache.set(term, recipes); // Save to cache
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
