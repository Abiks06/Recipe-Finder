export function normalizeRecipeData(rawMeal) {
  if (!rawMeal) return null;

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = rawMeal[`strIngredient${i}`];
    const measure = rawMeal[`strMeasure${i}`];
    
    if (ingredient && ingredient.trim()) {
      ingredients.push({
        ingredient: ingredient.trim(),
        measure: measure ? measure.trim() : ''
      });
    }
  }

  return {
    id: rawMeal.idMeal,
    title: rawMeal.strMeal,
    instructions: rawMeal.strInstructions,
    image: rawMeal.strMealThumb,
    tags: rawMeal.strTags ? rawMeal.strTags.split(',').map(tag => tag.trim()) : [],
    youtubeUrl: rawMeal.strYoutube,
    ingredients
  };
}
