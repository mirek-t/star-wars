import "./App.css";
import dummyData from "./dummy-data";
import { useEffect, useState } from "react";
import CharacterList from "./components/CharacterList";
import { endpoint } from "./components/endpoint";

function App() {
  const [reponse, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Featching");

    setLoading(true);
    setError(null);
    setResponse([]);

    fetch(`${endpoint}/characters`)
      .then((response) => response.json())
      .then((response) => {
        setResponse(response);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      })
      .finally(() => setLoading(false));
  }, [url]);

  return (
    <div className="App">
      <header>
        <h1>Star Wars Characters</h1>
      </header>
      <main>
        <section>
          {loading ? "Loading..." : <CharacterList characters={characters} />}
        </section>
      </main>
    </div>
  );
}

export default App;
