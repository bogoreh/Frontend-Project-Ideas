import React from 'react';
import { Category } from '../types';
import './CategoryFilter.css';

interface CategoryFilterProps {
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, onSelectCategory }) => {
  const categories: { id: Category; label: string; icon: string }[] = [
    { id: 'all', label: 'All', icon: '🌎' },
    { id: 'beach', label: 'Beach', icon: '🏖️' },
    { id: 'mountain', label: 'Mountain', icon: '⛰️' },
    { id: 'city', label: 'City', icon: '🏙️' },
    { id: 'historical', label: 'Historical', icon: '🏛️' },
    { id: 'nature', label: 'Nature', icon: '🌿' },
  ];

  return (
    <div className="category-filter">
      <div className="filter-title">Filter by Category:</div>
      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-button ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => onSelectCategory(category.id)}
          >
            <span className="category-icon">{category.icon}</span>
            <span className="category-label">{category.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;