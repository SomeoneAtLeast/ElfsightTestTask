import { useState, useCallback } from 'react';

export const useHttp = () => {
  const [error, setError] = useState(null);

  const request = useCallback(async (url: string) => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          response.status === 404 ? `Nothing found :(` : 'Something is wrong'
        );
      }

      return data;
    } catch (e) {
      setError(e.message);
      throw e;
    }
  }, []);

  const clearError = useCallback(() => setError(null), []);

  return { request, error, clearError };
};
