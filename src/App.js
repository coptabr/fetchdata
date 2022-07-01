import "./App.css";
import Card from "./components/card/Card";
import Fetchdata from "./components/fetch/Fetchdata";

function App() {
  return (
    <div className="App">
      <Card />
      {/* 
      <Fetchdata>
        <Card />
      </Fetchdata>
      */}
    </div>
  );
}

export default App;
