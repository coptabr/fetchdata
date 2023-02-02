import { Pagination } from "semantic-ui-react";
import "./App.css";
import Fetchdata from "./components/fetch/Fetchdata";
import Filter from "./components/filter/Filter";
import Header from "./components/header/Header";
import Layout from "./layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Header />
        <Filter />
        <Fetchdata />
        {/* <Pagination /> */}
      </Layout>
    </div>
  );
}

export default App;
