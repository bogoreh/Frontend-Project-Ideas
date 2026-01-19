import { useState, FC } from 'react';

interface NavbarProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  onSearch: (query: string) => void;
}

const Navbar: FC<NavbarProps> = ({ 
  categories, 
  selectedCategory, 
  onSelectCategory,
  onSearch 
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <nav className="navbar">
      <div className="nav-header">
        <h1 className="logo">🍳 Recipe Blog</h1>
      </div>
      
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-btn">
          🔍
        </button>
      </form>

      <div className="categories">
        {categories.map(category => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;