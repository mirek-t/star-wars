import { useEffect, useState } from "react";

const useFetch = (url, formatData = (data) => data) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const doRequest = async () => {
    console.log("Featching");

    setLoading(true);
    setError(null);
    setResponse(null);

    const response = await fetch(url);

    const data = await response
      .json()

      .then((response) => response.json())
      .then((response) => {
        setResponse(formatData(response));
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    doRequest();
  }, [url]);

  return [response, loading, error];
};

export default useFetch;
