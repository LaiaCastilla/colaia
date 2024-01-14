import fr from "./build/fr.svg";
import es from "./build/es.svg";
import laia from "./build/laia.svg";
import colas from "./build/colas.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="construction">
        <img src={fr} alt="En construction" className="text" />
        <div className="heads">
          <img src={colas} className="head" alt="logo" />
          <img src={laia} className="head" alt="logo" />
        </div>
        <img src={es} alt="En construcción" className="text" />
      </div>
    </div>
  );
}

export default App;
