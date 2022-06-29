import "./App.css";
import CharacterList from "./components/CharacterList";

function App() {
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
