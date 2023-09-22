import logo from "./logo.svg";
import "./App.css";
import PosMain from "./comps/PosMain.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <PosMain />
    </div>
  );
}

export default App;
