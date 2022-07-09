import "./App.css";
import Fetchdata from "./components/fetch/Fetchdata";
import Header from "./components/header/Header";
import Layout from "./layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Header />
        {/* <Fetchdata /> */}
      </Layout>
    </div>
  );
}

export default App;
