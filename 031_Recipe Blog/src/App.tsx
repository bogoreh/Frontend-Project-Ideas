import { useState, useEffect } from 'react'; // Remove React import since we're not using it directly
import Navbar from './components/Navbar';
import RecipeCard from './components/RecipeCard';
import Footer from './components/Footer';
import { recipes, categories } from './data/recipes';
import { Recipe } from './types/recipe';
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(recipes);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    filterRecipes();
  }, [selectedCategory, searchQuery]);

  const filterRecipes = () => {
    let filtered = recipes;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(recipe => 
        recipe.category === selectedCategory || 
        recipe.tags.includes(selectedCategory.toLowerCase())
      );
    }

    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(recipe =>
        recipe.title.toLowerCase().includes(query) ||
        recipe.description.toLowerCase().includes(query) ||
        recipe.ingredients.some(ing => ing.toLowerCase().includes(query)) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    setFilteredRecipes(filtered);
  };

  const handleViewRecipe = (id: string) => {
    const recipe = recipes.find(r => r.id === id) || null;
    setSelectedRecipe(recipe);
  };

  const handleCloseRecipeDetail = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="app">
      <Navbar
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        onSearch={setSearchQuery}
      />

      <main className="main-content">
        <div className="container">
          {selectedRecipe ? (
            <div className="recipe-detail">
              <button 
                className="back-btn"
                onClick={handleCloseRecipeDetail}
              >
                ← Back to Recipes
              </button>
              
              <div className="detail-header">
                <img src={selectedRecipe.imageUrl} alt={selectedRecipe.title} />
                <div className="detail-info">
                  <h1>{selectedRecipe.title}</h1>
                  <p className="detail-description">{selectedRecipe.description}</p>
                  <div className="detail-meta">
                    <span>🕒 Prep: {selectedRecipe.prepTime} min | Cook: {selectedRecipe.cookTime} min</span>
                    <span>👥 Serves: {selectedRecipe.servings}</span>
                    <span>📊 Difficulty: {selectedRecipe.difficulty}</span>
                    <span>⭐ Rating: {selectedRecipe.rating}/5</span>
                  </div>
                </div>
              </div>

              <div className="detail-content">
                <div className="ingredients-section">
                  <h2>Ingredients</h2>
                  <ul>
                    {selectedRecipe.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </div>

                <div className="instructions-section">
                  <h2>Instructions</h2>
                  <ol>
                    {selectedRecipe.instructions.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="recipes-header">
                <h2>{filteredRecipes.length} Recipes Found</h2>
                <p>{selectedCategory !== 'All' && `in ${selectedCategory}`}</p>
              </div>
              
              {filteredRecipes.length === 0 ? (
                <div className="no-recipes">
                  <p>No recipes found. Try a different search or category!</p>
                </div>
              ) : (
                <div className="recipes-grid">
                  {filteredRecipes.map(recipe => (
                    <RecipeCard
                      key={recipe.id}
                      recipe={recipe}
                      onViewRecipe={handleViewRecipe}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;