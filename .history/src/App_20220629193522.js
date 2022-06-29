import "./App.css";
import dummyData from "./dummy-data";
import { useEffect, useState } from "react";
import CharacterList from "./components/CharacterList";
import { endpoint } from "./components/endpoint";

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
