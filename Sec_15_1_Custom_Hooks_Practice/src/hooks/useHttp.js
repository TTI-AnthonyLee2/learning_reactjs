import { useState, useCallback } from "react";

const useHttp = (configs, applyData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (taskText) => {
    setIsLoading(true);
    setError(null);
    try {
      const options = {
        method: configs.method,
        headers: configs.headers,
      };

      if (configs.method === 'POST') {
        options.body = JSON.stringify({ text: taskText });
      }

      const response = await fetch(configs.url, options);

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();

      applyData(data, taskText);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  }, [applyData, configs]);

  return {
    isLoading,
    error,
    sendRequest,
  }
}

export default useHttp;