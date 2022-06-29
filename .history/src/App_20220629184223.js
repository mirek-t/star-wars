import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';

function App() {
  const [characters, setCharacters] = useState(dummyData)


  return (
    <div className="App">
      <header><h1>Star Wars Characters</h1></header>
      <main>
        <section>
          <CharacterList characters={charcters}/>
        </section>
      </main>
    </div>
  );
}

export default App;
