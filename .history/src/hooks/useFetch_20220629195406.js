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
    setLoading(false);

    return data;


      .then((response) => response.json())
      .then((response) => {
        setResponse(formatData(response));
      })
      
  };

  useEffect(() => {
    doRequest().catch((error) => {
        setError(error);
      }).finally(() => setLoading(false));

  }, [url]);

  return [response, loading, error];
};

export default useFetch;
