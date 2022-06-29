import "./App.css";
import dummyData from "./dummy-data";
import { useEffect, useState } from "react";
import CharacterList from "./components/CharacterList";
import { endpoint } from "./components/endpoint";

function App() {
  const [characters, setCharacters] = useState(dummyData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Featching");

    // setLoading(true);
    // setError(null);
    // setCharacters([]);

    fetch(`${endpoint}/characters`)
      .then((response) => response.json())
      .then((response) => {
        // setCharacters(response.characters);
        // setLoading(false);
      })
      .catch((error) => {
        // setError(error);
        // setLoading(false);
      });
    // .finally(() => {
    //   setLoading(false);
    // });
  });

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
