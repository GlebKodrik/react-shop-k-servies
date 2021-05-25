import { useCallback, useState } from "react";
import axios from "axios";
import { CONFIG } from "../api/api";

const instance = axios.create(CONFIG);

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const request = useCallback(async (url, method = "post", body = null) => {
    setLoading(true);

    const response = await instance({
      method: method,
      url: url,
      data: body,
    });
    if (!!response.data.errors) {
      setLoading(false);
      setError(response.data.errors);
      return;
    }
    setLoading(false);
    return response.data.data;
  }, []);
  const clearError = useCallback(() => setError(null), []);
  return { loading, error, request, clearError };
};
