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
          {dummyData.map(() => )}
        </section>
      </main>
    </div>
  );
}

export default App;
