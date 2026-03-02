import React, { useState } from 'react';
import RequestForm from './RequestForm';
import ResponseViewer from './ResponseViewer';
import { makeApiRequest } from '../utils/api';

const ApiTester = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (formData) => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await makeApiRequest(formData);
      setResponse(result);
    } catch (err) {
      setError(err.message || 'An error occurred');
      setResponse(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <RequestForm onSubmit={handleSubmit} loading={loading} />
      {(response || error) && (
        <ResponseViewer response={response} error={error} loading={loading} />
      )}
    </div>
  );
};

export default ApiTester;