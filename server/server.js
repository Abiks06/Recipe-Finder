const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const recipesFilePath = path.join(__dirname, 'data', 'recipes.json');

// Helper to get recipes
const getRecipes = () => {
  const data = fs.readFileSync(recipesFilePath, 'utf8');
  return JSON.parse(data);
};

// GET all recipes
app.get('/api/recipes', (req, res) => {
  try {
    const recipes = getRecipes();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: 'Error reading recipes data' });
  }
});

// GET search recipes
app.get('/api/recipes/search', (req, res) => {
  try {
    const term = req.query.q?.toLowerCase() || '';
    const recipes = getRecipes();
    const filtered = recipes.filter(
      (r) =>
        r.name.toLowerCase().includes(term) ||
        r.ingredients.some((i) => i.toLowerCase().includes(term))
    );
    res.json(filtered);
  } catch (err) {
    res.status(500).json({ message: 'Error reading recipes data' });
  }
});

// GET recipe by ID
app.get('/api/recipes/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const recipes = getRecipes();
    const recipe = recipes.find(r => r.id === id);
    
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    
    res.json(recipe);
  } catch (err) {
    res.status(500).json({ message: 'Error reading recipes data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
