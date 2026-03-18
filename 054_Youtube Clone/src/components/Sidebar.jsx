import React from 'react';
import { 
  Home, Compass, Clock, ThumbsUp, 
  PlaySquare, History, Library, ChevronDown 
} from 'lucide-react';

const Sidebar = ({ isOpen }) => {
  const mainItems = [
    { icon: Home, label: 'Home' },
    { icon: Compass, label: 'Explore' },
    { icon: PlaySquare, label: 'Shorts' },
    { icon: Library, label: 'Library' },
  ];

  const secondaryItems = [
    { icon: History, label: 'History' },
    { icon: Clock, label: 'Watch Later' },
    { icon: ThumbsUp, label: 'Liked Videos' },
  ];

  if (!isOpen) {
    return (
      <aside className="fixed left-0 top-14 h-full w-16 bg-white border-r border-gray-200 hidden md:block">
        <div className="flex flex-col items-center py-4">
          {mainItems.map((item, index) => (
            <button
              key={index}
              className="w-full py-4 flex flex-col items-center gap-1 hover:bg-gray-100 transition-colors"
            >
              <item.icon size={20} />
              <span className="text-xs">{item.label}</span>
            </button>
          ))}
        </div>
      </aside>
    );
  }

  return (
    <aside className="fixed left-0 top-14 h-full w-64 bg-white border-r border-gray-200 overflow-y-auto hidden md:block">
      <div className="py-4">
        {/* Main Items */}
        {mainItems.map((item, index) => (
          <button
            key={index}
            className="w-full px-6 py-3 flex items-center gap-6 hover:bg-gray-100 transition-colors"
          >
            <item.icon size={20} />
            <span className="text-sm">{item.label}</span>
          </button>
        ))}

        <div className="border-t border-gray-200 my-3"></div>

        {/* Secondary Items */}
        {secondaryItems.map((item, index) => (
          <button
            key={index}
            className="w-full px-6 py-3 flex items-center gap-6 hover:bg-gray-100 transition-colors"
          >
            <item.icon size={20} />
            <span className="text-sm">{item.label}</span>
          </button>
        ))}

        <div className="border-t border-gray-200 my-3"></div>

        {/* Subscriptions */}
        <div className="px-6 py-3">
          <h3 className="text-sm font-semibold mb-2">Subscriptions</h3>
          <button className="w-full py-2 flex items-center gap-3 hover:bg-gray-100 rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=32&h=32&fit=crop" 
              alt="channel"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm">CodeMaster</span>
          </button>
          <button className="w-full py-2 flex items-center gap-3 hover:bg-gray-100 rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?w=32&h=32&fit=crop" 
              alt="channel"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm">GameZone</span>
          </button>
          <button className="w-full mt-2 px-6 py-2 flex items-center gap-6 text-blue-600 hover:bg-gray-100 rounded-lg">
            <ChevronDown size={16} />
            <span className="text-sm">Show more</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;