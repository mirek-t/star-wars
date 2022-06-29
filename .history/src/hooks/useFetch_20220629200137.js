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

    const responseData = await fetch(url);

    const data = await responseData.json();
    setResponse(formatData(data));

    return data;
  };

  useEffect(() => {
    doRequest()
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  }, [url, formatData]);

  return [response, loading, error];
};

export default useFetch;
