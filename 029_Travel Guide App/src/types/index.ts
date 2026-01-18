export interface Destination {
  id: number;
  name: string;
  country: string;
  description: string;
  image: string;
  category: 'beach' | 'mountain' | 'city' | 'historical' | 'nature';
  rating: number;
  bestTimeToVisit: string;
  travelTips: string[];
}

export type Category = Destination['category'] | 'all';