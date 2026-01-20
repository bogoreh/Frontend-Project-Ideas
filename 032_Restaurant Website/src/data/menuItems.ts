import { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Bruschetta',
    description: 'Toasted bread topped with tomatoes, garlic, and fresh basil',
    price: 8.99,
    category: 'appetizer',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400'
  },
  {
    id: 2,
    name: 'Margherita Pizza',
    description: 'Classic pizza with tomato sauce, mozzarella, and basil',
    price: 14.99,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w-400'
  },
  {
    id: 3,
    name: 'Spaghetti Carbonara',
    description: 'Pasta with eggs, cheese, pancetta, and black pepper',
    price: 16.99,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2c5?w=400'
  },
  {
    id: 4,
    name: 'Tiramisu',
    description: 'Coffee-flavored Italian dessert with mascarpone cheese',
    price: 7.99,
    category: 'dessert',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400'
  },
  {
    id: 5,
    name: 'House Lemonade',
    description: 'Freshly squeezed lemonade with mint',
    price: 4.99,
    category: 'drink',
    image: 'https://images.unsplash.com/photo-1621264968373-430b60e8b5c4?w=400'
  },
  {
    id: 6,
    name: 'Garlic Bread',
    description: 'Freshly baked bread with garlic butter and herbs',
    price: 6.99,
    category: 'appetizer',
    image: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=400'
  }
];

export const contactInfo = {
  address: '123 Food Street, Cityville',
  phone: '(555) 123-4567',
  email: 'info@restaurant.com',
  hours: [
    { day: 'Monday - Thursday', time: '11:00 AM - 10:00 PM' },
    { day: 'Friday - Saturday', time: '11:00 AM - 11:00 PM' },
    { day: 'Sunday', time: '12:00 PM - 9:00 PM' }
  ]
};