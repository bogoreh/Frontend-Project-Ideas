export const stories = [
  { id: 1, username: 'your_story', avatar: 'https://i.pravatar.cc/150?img=1', isUser: true },
  { id: 2, username: 'john_doe', avatar: 'https://i.pravatar.cc/150?img=2' },
  { id: 3, username: 'jane_smith', avatar: 'https://i.pravatar.cc/150?img=3' },
  { id: 4, username: 'travel_photography', avatar: 'https://i.pravatar.cc/150?img=4' },
  { id: 5, username: 'food_lover', avatar: 'https://i.pravatar.cc/150?img=5' },
  { id: 6, username: 'fitness_guru', avatar: 'https://i.pravatar.cc/150?img=6' },
  { id: 7, username: 'art_daily', avatar: 'https://i.pravatar.cc/150?img=7' },
  { id: 8, username: 'music_fan', avatar: 'https://i.pravatar.cc/150?img=8' },
];

export const posts = [
  {
    id: 1,
    username: 'john_doe',
    userAvatar: 'https://i.pravatar.cc/150?img=2',
    location: 'New York, NY',
    image: 'https://picsum.photos/800/800?random=1',
    caption: 'Beautiful sunset at the park today! 🌅 #nature #peace',
    likes: 1234,
    comments: 89,
    timestamp: '2 HOURS AGO',
    liked: false,
    saved: false,
    commentsList: [
      { id: 1, username: 'jane_smith', text: 'Amazing shot! 📸' },
      { id: 2, username: 'travel_photography', text: 'The colors are incredible!' },
    ]
  },
  {
    id: 2,
    username: 'jane_smith',
    userAvatar: 'https://i.pravatar.cc/150?img=3',
    location: 'Los Angeles, CA',
    image: 'https://picsum.photos/800/800?random=2',
    caption: 'Coffee and coding ☕️💻 #developerlife #coffeetime',
    likes: 856,
    comments: 42,
    timestamp: '5 HOURS AGO',
    liked: false,
    saved: false,
    commentsList: [
      { id: 1, username: 'john_doe', text: 'Same here! Working on my project' },
    ]
  },
  {
    id: 3,
    username: 'travel_photography',
    userAvatar: 'https://i.pravatar.cc/150?img=4',
    location: 'Bali, Indonesia',
    image: 'https://picsum.photos/800/800?random=3',
    caption: 'Paradise found 🌴 #bali #travel',
    likes: 3421,
    comments: 156,
    timestamp: '1 DAY AGO',
    liked: false,
    saved: false,
    commentsList: []
  },
];

export const suggestions = [
  { id: 1, username: 'photography_daily', avatar: 'https://i.pravatar.cc/150?img=9', mutual: 5 },
  { id: 2, username: 'tech_news', avatar: 'https://i.pravatar.cc/150?img=10', mutual: 12 },
  { id: 3, username: 'fashion_style', avatar: 'https://i.pravatar.cc/150?img=11', mutual: 3 },
  { id: 4, username: 'fitness_motivation', avatar: 'https://i.pravatar.cc/150?img=12', mutual: 8 },
];