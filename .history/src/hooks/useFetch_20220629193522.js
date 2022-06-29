const useFetch = (url) => {
  const [reponse, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Featching");

    setLoading(true);
    setError(null);
    setResponse([]);

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setResponse(response);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  }, [url]);

  return [response, loading, error];
};

export default useFetch;
