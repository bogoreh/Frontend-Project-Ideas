import React from 'react';
import { FaCheckCircle, FaTimesCircle, FaClock } from 'react-icons/fa';

const ResponseViewer = ({ response, error, loading }) => {
  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex flex-col items-center justify-center py-12">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-600">Sending request...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center gap-3 text-red-600 mb-4">
          <FaTimesCircle size={24} />
          <h2 className="text-xl font-semibold">Error</h2>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-700">{error}</p>
        </div>
      </div>
    );
  }

  if (!response) return null;

  const { data, status, statusText, headers, time } = response;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Status Bar */}
      <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500" size={20} />
            <span className="font-semibold">Status:</span>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              status >= 200 && status < 300 ? 'bg-green-100 text-green-700' :
              status >= 400 ? 'bg-red-100 text-red-700' :
              'bg-yellow-100 text-yellow-700'
            }`}>
              {status} {statusText}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FaClock className="text-gray-500" size={16} />
            <span className="text-sm text-gray-600">{time}ms</span>
          </div>
        </div>
      </div>

      {/* Response Body */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Response Body</h3>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto font-mono text-sm">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>

      {/* Response Headers */}
      {headers && Object.keys(headers).length > 0 && (
        <div className="border-t border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Response Headers</h3>
          <div className="bg-gray-50 rounded-lg p-4">
            {Object.entries(headers).map(([key, value]) => (
              <div key={key} className="grid grid-cols-3 gap-4 py-2 border-b border-gray-200 last:border-0">
                <span className="font-medium text-gray-700">{key}:</span>
                <span className="col-span-2 text-gray-600 break-all">{value}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResponseViewer;