import { describe, it, expect } from 'vitest';
import { normalizeRecipeData } from './normalizeRecipeData';

describe('normalizeRecipeData', () => {
  it('extracts ingredients correctly from TheMealDB format', () => {
    const rawMeal = {
      idMeal: '52772',
      strMeal: 'Teriyaki Chicken Casserole',
      strInstructions: 'Preheat oven to 350° F. Spray a 9x13-inch baking pan with non-stick spray.\r\nCombine soy sauce...',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg',
      strTags: 'Meat,Casserole',
      strYoutube: 'https://www.youtube.com/watch?v=4aZr5hZ1_1I',
      strIngredient1: 'soy sauce',
      strIngredient2: 'water',
      strIngredient3: 'brown sugar',
      strIngredient4: '',
      strIngredient5: null,
      strMeasure1: '3/4 cup',
      strMeasure2: '1/2 cup',
      strMeasure3: '1/4 cup',
      strMeasure4: '',
      strMeasure5: null,
    };

    const normalized = normalizeRecipeData(rawMeal);

    expect(normalized).toEqual({
      id: '52772',
      title: 'Teriyaki Chicken Casserole',
      instructions: 'Preheat oven to 350° F. Spray a 9x13-inch baking pan with non-stick spray.\r\nCombine soy sauce...',
      image: 'https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg',
      tags: ['Meat', 'Casserole'],
      youtubeUrl: 'https://www.youtube.com/watch?v=4aZr5hZ1_1I',
      ingredients: [
        { ingredient: 'soy sauce', measure: '3/4 cup' },
        { ingredient: 'water', measure: '1/2 cup' },
        { ingredient: 'brown sugar', measure: '1/4 cup' }
      ]
    });
  });
});
