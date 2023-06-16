import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import "./App.css";
import Companies from "./components/Companies/Companies";
import Residenceis from "./components/Residencies/Residenceis";
import Value from "./components/Value/Value";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>

      <Header/>
      <Hero/>
      </div>
      <Companies/>
      <Residenceis/>
      <Value/>
    </div>
  );
}

export default App;
