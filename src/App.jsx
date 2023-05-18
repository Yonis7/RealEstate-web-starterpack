import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import "./App.css";
import Companies from "./components/Companies/Companies";
import Residenceis from "./components/Residencies/Residenceis";

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
    </div>
  );
}

export default App;
