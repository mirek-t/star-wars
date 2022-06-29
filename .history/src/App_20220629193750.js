import "./App.css";
import CharacterList from "./components/CharacterList";

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
        </section>
      </main>
    </div>
  );
}

export default App;
