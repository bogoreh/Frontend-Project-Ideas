export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'appetizer' | 'main' | 'dessert' | 'drink';
  image: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: {
    day: string;
    time: string;
  }[];
}