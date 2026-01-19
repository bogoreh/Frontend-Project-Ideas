// Remove unused React import
import { FC } from 'react';
import { Recipe } from '../types/recipe';

interface RecipeCardProps {
  recipe: Recipe;
  onViewRecipe: (id: string) => void;
}

const RecipeCard: FC<RecipeCardProps> = ({ recipe, onViewRecipe }) => {
  return (
    <div className="recipe-card">
      <div className="recipe-image">
        <img src={recipe.imageUrl} alt={recipe.title} />
        <span 
          className="difficulty-badge"
          data-difficulty={recipe.difficulty}
        >
          {recipe.difficulty}
        </span>
      </div>
      <div className="recipe-content">
        <div className="recipe-header">
          <h3>{recipe.title}</h3>
          <div className="rating">
            ⭐ {recipe.rating}
          </div>
        </div>
        <p className="recipe-description">{recipe.description}</p>
        <div className="recipe-meta">
          <span>🕒 {recipe.prepTime + recipe.cookTime} min</span>
          <span>👥 {recipe.servings} servings</span>
          <span>🏷️ {recipe.category}</span>
        </div>
        <div className="recipe-tags">
          {recipe.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <button 
          className="view-recipe-btn"
          onClick={() => onViewRecipe(recipe.id)}
          aria-label={`View recipe for ${recipe.title}`}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;