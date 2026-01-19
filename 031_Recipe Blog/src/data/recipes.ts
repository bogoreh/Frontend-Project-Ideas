import { Recipe } from '../types/recipe';

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Classic Pancakes',
    description: 'Fluffy and delicious homemade pancakes perfect for breakfast.',
    ingredients: [
      '1 cup all-purpose flour',
      '2 tablespoons sugar',
      '2 teaspoons baking powder',
      '1/2 teaspoon salt',
      '1 cup milk',
      '1 large egg',
      '2 tablespoons melted butter'
    ],
    instructions: [
      'Mix dry ingredients in a bowl',
      'In another bowl, whisk milk, egg, and melted butter',
      'Combine wet and dry ingredients until just mixed',
      'Heat a non-stick pan over medium heat',
      'Pour 1/4 cup batter for each pancake',
      'Cook until bubbles form, then flip and cook until golden'
    ],
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    difficulty: 'Easy',
    category: 'Breakfast',
    imageUrl: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop',
    rating: 4.5,
    tags: ['vegetarian', 'breakfast', 'quick']
  },
  {
    id: '2',
    title: 'Vegetable Stir Fry',
    description: 'Healthy and colorful vegetable stir fry with tofu.',
    ingredients: [
      '2 cups mixed vegetables (bell peppers, broccoli, carrots)',
      '200g firm tofu',
      '3 tablespoons soy sauce',
      '2 cloves garlic, minced',
      '1 tablespoon ginger, grated',
      '2 tablespoons vegetable oil',
      '1 tablespoon sesame oil',
      'Cooked rice for serving'
    ],
    instructions: [
      'Cut tofu into cubes and vegetables into bite-sized pieces',
      'Heat vegetable oil in a wok or large pan',
      'Add tofu and cook until golden brown',
      'Add garlic and ginger, cook for 1 minute',
      'Add vegetables and stir fry for 5-7 minutes',
      'Add soy sauce and sesame oil, toss to combine',
      'Serve hot over rice'
    ],
    prepTime: 15,
    cookTime: 10,
    servings: 2,
    difficulty: 'Medium',
    category: 'Dinner',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
    rating: 4.7,
    tags: ['vegetarian', 'healthy', 'asian']
  },
  {
    id: '3',
    title: 'Chocolate Chip Cookies',
    description: 'Classic chewy chocolate chip cookies everyone loves.',
    ingredients: [
      '2 1/4 cups all-purpose flour',
      '1 teaspoon baking soda',
      '1 teaspoon salt',
      '1 cup unsalted butter, softened',
      '3/4 cup granulated sugar',
      '3/4 cup brown sugar',
      '2 large eggs',
      '2 teaspoons vanilla extract',
      '2 cups chocolate chips'
    ],
    instructions: [
      'Preheat oven to 375°F (190°C)',
      'Mix flour, baking soda, and salt in a bowl',
      'In another bowl, cream butter and sugars',
      'Beat in eggs and vanilla',
      'Gradually add flour mixture',
      'Stir in chocolate chips',
      'Drop rounded tablespoons onto baking sheets',
      'Bake for 9-11 minutes until golden'
    ],
    prepTime: 15,
    cookTime: 10,
    servings: 24,
    difficulty: 'Easy',
    category: 'Dessert',
    imageUrl: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w-400&h=300&fit=crop',
    rating: 4.9,
    tags: ['dessert', 'baking', 'sweet']
  }
];

export const categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Vegetarian', 'Quick'];