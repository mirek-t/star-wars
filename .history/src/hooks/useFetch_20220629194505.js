import { useEffect, useState } from "react";

const useFetch = (url, formatData) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Featching");

    setLoading(true);
    setError(null);
    setResponse(null);

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setResponse(formatData(response));
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  }, [url]);

  return [response, loading, error];
};

export default useFetch;
