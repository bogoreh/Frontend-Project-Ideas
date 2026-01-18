import { Destination } from '../types';

export const destinations: Destination[] = [
  {
    id: 1,
    name: 'Bali',
    country: 'Indonesia',
    description: 'A tropical paradise known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs.',
    image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'beach',
    rating: 4.8,
    bestTimeToVisit: 'April to October',
    travelTips: [
      'Rent a scooter to explore the island',
      'Visit temples early to avoid crowds',
      'Try local street food at warungs'
    ]
  },
  {
    id: 2,
    name: 'Swiss Alps',
    country: 'Switzerland',
    description: 'Majestic mountain range with picturesque villages, ski resorts, and hiking trails.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'mountain',
    rating: 4.9,
    bestTimeToVisit: 'December to March (skiing), June to September (hiking)',
    travelTips: [
      'Get a Swiss Travel Pass for transportation',
      'Pack layers for changing weather',
      'Try fondue in a mountain restaurant'
    ]
  },
  {
    id: 3,
    name: 'Kyoto',
    country: 'Japan',
    description: 'Former imperial capital known for its classical Buddhist temples, gardens, and traditional wooden houses.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'historical',
    rating: 4.7,
    bestTimeToVisit: 'March to May (cherry blossoms), October to November (fall foliage)',
    travelTips: [
      'Visit temples during weekdays to avoid crowds',
      'Try kaiseki (traditional multi-course meal)',
      'Get an IC card for easy transportation'
    ]
  },
  {
    id: 4,
    name: 'Santorini',
    country: 'Greece',
    description: 'Volcanic island in the Cyclades known for its dramatic views, white-washed buildings, and stunning sunsets.',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'beach',
    rating: 4.6,
    bestTimeToVisit: 'Late April to early November',
    travelTips: [
      'Watch sunset from Oia but arrive early',
      'Try local wine from volcanic soil vineyards',
      'Wear comfortable shoes for cobblestone paths'
    ]
  },
  {
    id: 5,
    name: 'New York City',
    country: 'USA',
    description: 'The bustling metropolis known for its iconic skyline, Broadway shows, and diverse neighborhoods.',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'city',
    rating: 4.5,
    bestTimeToVisit: 'April to June, September to early November',
    travelTips: [
      'Get a MetroCard for subway transportation',
      'Visit museums during free hours',
      'Walk across Brooklyn Bridge at sunrise'
    ]
  },
  {
    id: 6,
    name: 'Amazon Rainforest',
    country: 'Brazil',
    description: 'The largest tropical rainforest in the world, home to incredible biodiversity and indigenous cultures.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'nature',
    rating: 4.7,
    bestTimeToVisit: 'June to November (dry season)',
    travelTips: [
      'Pack lightweight, long-sleeved clothing',
      'Hire a local guide for better experience',
      'Get necessary vaccinations before travel'
    ]
  },
  {
    id: 7,
    name: 'Rome',
    country: 'Italy',
    description: 'The Eternal City with a history spanning over two millennia, famous for its ancient ruins and art.',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'historical',
    rating: 4.8,
    bestTimeToVisit: 'April to June, September to October',
    travelTips: [
      'Buy skip-the-line tickets for major attractions',
      'Try gelato from local gelaterias',
      'Visit Vatican Museums on weekday afternoons'
    ]
  },
  {
    id: 8,
    name: 'Banff National Park',
    country: 'Canada',
    description: 'Canada\'s oldest national park, famous for its turquoise lakes, snow-capped peaks, and glaciers.',
    image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'mountain',
    rating: 4.9,
    bestTimeToVisit: 'June to August, December to March',
    travelTips: [
      'Get a Parks Canada Discovery Pass',
      'Visit Lake Louise early to avoid crowds',
      'Pack bear spray for hiking'
    ]
  }
];