export const hotels = [
  {
    id: 1,
    name: "Luxury Grand Hotel",
    location: "New York, NY",
    rating: 4.8,
    reviews: 1243,
    price: 299,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400",
    description: "5-star luxury hotel with spa and fine dining",
    amenities: ["Pool", "Spa", "Restaurant", "Gym", "WiFi"]
  },
  {
    id: 2,
    name: "Seaside Resort",
    location: "Miami, FL",
    rating: 4.6,
    reviews: 856,
    price: 199,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w-400",
    description: "Beachfront resort with ocean views",
    amenities: ["Beach Access", "Pool", "Restaurant", "Bar"]
  },
  {
    id: 3,
    name: "Mountain Retreat",
    location: "Denver, CO",
    rating: 4.7,
    reviews: 942,
    price: 179,
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400",
    description: "Cozy mountain lodge with scenic views",
    amenities: ["Fireplace", "Hiking", "Restaurant", "Hot Tub"]
  },
  {
    id: 4,
    name: "City Center Hotel",
    location: "Chicago, IL",
    rating: 4.4,
    reviews: 673,
    price: 159,
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400",
    description: "Modern hotel in downtown location",
    amenities: ["Gym", "Restaurant", "WiFi", "Conference Room"]
  }
];

export const roomTypes = [
  { id: 1, name: "Standard Room", price: 299, maxGuests: 2 },
  { id: 2, name: "Deluxe Room", price: 399, maxGuests: 3 },
  { id: 3, name: "Suite", price: 599, maxGuests: 4 },
  { id: 4, name: "Presidential Suite", price: 999, maxGuests: 6 }
];