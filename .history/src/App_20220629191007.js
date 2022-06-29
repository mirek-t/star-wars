import "./App.css";
import dummyData from "./dummy-data";
import { useEffect, useState } from "react";
import CharacterList from "./components/CharacterList";
import 

function App() {
  const [characters, setCharacters] = useState(dummyData);

  useEffect(() => {
    console.log("Featching");
    featch(`${endpoint}/characters`)
      .then((response) => response.json())
      .then((response) => {
        setCharacters(response.characters)
      })
      .catch(console.error)
      ;
  });

  return (
    <div className="App">
      <header>
        <h1>Star Wars Characters</h1>
      </header>
      <main>
        <section>
          <CharacterList characters={characters} />
        </section>
      </main>
    </div>
  );
}

export default App;
