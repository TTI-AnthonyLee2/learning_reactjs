import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (configs, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const options = {
        method: configs.method,
        headers: configs.headers,
      };

      if (configs.method === 'POST') {
        options.body = configs.body;
      }

      const response = await fetch(configs.url, options);

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();

      applyData(data);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  }
}

export default useHttp;