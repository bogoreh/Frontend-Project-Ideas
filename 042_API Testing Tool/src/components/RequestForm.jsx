import React, { useState } from 'react';
import { FaPlay, FaPlus, FaTrash } from 'react-icons/fa';

const RequestForm = ({ onSubmit, loading }) => {
  const [method, setMethod] = useState('GET');
  const [url, setUrl] = useState('');
  const [headers, setHeaders] = useState([{ key: '', value: '' }]);
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Filter out empty headers
    const validHeaders = headers
      .filter(h => h.key.trim() !== '')
      .reduce((acc, h) => ({ ...acc, [h.key]: h.value }), {});

    onSubmit({
      method,
      url,
      headers: validHeaders,
      body: method !== 'GET' ? body : null
    });
  };

  const addHeader = () => {
    setHeaders([...headers, { key: '', value: '' }]);
  };

  const removeHeader = (index) => {
    setHeaders(headers.filter((_, i) => i !== index));
  };

  const updateHeader = (index, field, value) => {
    const updatedHeaders = [...headers];
    updatedHeaders[index][field] = value;
    setHeaders(updatedHeaders);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <form onSubmit={handleSubmit}>
        {/* Method and URL */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className="md:w-32 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
          >
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
            <option value="PATCH">PATCH</option>
          </select>
          
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://api.example.com/endpoint"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
          
          <button
            type="submit"
            disabled={loading}
            className="md:w-32 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <>
                <FaPlay size={12} /> Send
              </>
            )}
          </button>
        </div>

        {/* Headers */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-gray-700">Headers</h3>
            <button
              type="button"
              onClick={addHeader}
              className="flex items-center gap-2 px-3 py-2 text-sm text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <FaPlus size={12} /> Add Header
            </button>
          </div>
          
          {headers.map((header, index) => (
            <div key={index} className="flex gap-3 mb-3">
              <input
                type="text"
                value={header.key}
                onChange={(e) => updateHeader(index, 'key', e.target.value)}
                placeholder="Header name"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                value={header.value}
                onChange={(e) => updateHeader(index, 'value', e.target.value)}
                placeholder="Value"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {headers.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeHeader(index)}
                  className="px-4 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <FaTrash />
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Request Body (for non-GET requests) */}
        {method !== 'GET' && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Request Body</h3>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Enter JSON request body..."
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
            />
          </div>
        )}
      </form>
    </div>
  );
};

export default RequestForm;