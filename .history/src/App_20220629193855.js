import "./App.css";
import CharacterList from "./components/CharacterList";
import { endpoint } from "./components/endpoint";

function App() {
  const [charackters, loading, error] = useFetch(endpoint + "/characters");

  return (
    <div className="App">
      <header>
        <h1>Star Wars Characters</h1>
      </header>
      <main>
        <section>
          {loading ? (
            <p>"Loading..."</p>
          ) : (
            <CharacterList characters={characters} />
          )}
          {error && <p>{error.message}</p>}
        </section>
      </main>
    </div>
  );
}

export default App;
