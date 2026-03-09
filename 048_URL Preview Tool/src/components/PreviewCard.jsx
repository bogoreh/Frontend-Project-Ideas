import React from 'react';

const PreviewCard = ({ data }) => {
  if (!data) return null;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      {data.image && (
        <div className="h-48 overflow-hidden bg-gray-100">
          <img 
            src={data.image} 
            alt={data.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/400x200?text=No+Image';
            }}
          />
        </div>
      )}
      
      <div className="p-5">
        <div className="flex items-center mb-3">
          <div className="w-6 h-6 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
            <img 
              src={`https://www.google.com/s2/favicons?domain=${data.domain}&sz=32`}
              alt="favicon"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
          <span className="ml-2 text-sm text-gray-500 truncate">{data.domain}</span>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {data.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {data.description}
        </p>
        
        <a 
          href={data.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-500 hover:text-blue-700 text-sm font-medium"
        >
          Visit Website
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default PreviewCard;