import axios from 'axios';

export const makeApiRequest = async ({ method, url, headers, body }) => {
  const startTime = performance.now();
  
  try {
    const config = {
      method,
      url,
      headers: headers || {},
      timeout: 30000, // 30 seconds timeout
    };

    // Add body for non-GET requests
    if (method !== 'GET' && body) {
      try {
        // Try to parse as JSON if it looks like JSON
        if (body.trim().startsWith('{') || body.trim().startsWith('[')) {
          config.data = JSON.parse(body);
        } else {
          config.data = body;
        }
      } catch {
        // If JSON parsing fails, send as raw string
        config.data = body;
      }
    }

    const response = await axios(config);
    const endTime = performance.now();
    
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
      time: Math.round(endTime - startTime)
    };
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      throw new Error(`Error ${error.response.status}: ${JSON.stringify(error.response.data)}`);
    } else if (error.request) {
      // The request was made but no response was received
      throw new Error('No response received from server. Please check your network connection.');
    } else {
      // Something happened in setting up the request that triggered an Error
      throw new Error(error.message);
    }
  }
};