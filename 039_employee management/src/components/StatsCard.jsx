import React from 'react';

const StatsCard = ({ title, value, icon, change, color = 'blue' }) => {
  const colors = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    yellow: 'bg-yellow-100 text-yellow-600',
    purple: 'bg-purple-100 text-purple-600',
    red: 'bg-red-100 text-red-600'
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500 mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
          {change && (
            <p className="text-sm text-green-600 mt-2">
              ↑ {change} from last month
            </p>
          )}
        </div>
        <div className={`p-4 rounded-full ${colors[color]}`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;