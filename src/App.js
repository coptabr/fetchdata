import "./App.css";
import Fetchdata from "./components/fetch/Fetchdata";
import Layout from "./layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Fetchdata />
      </Layout>
    </div>
  );
}

export default App;
