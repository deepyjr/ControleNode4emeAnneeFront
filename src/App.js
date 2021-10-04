import logo from "./logo.svg";
import "./App.css";
import Layout from "./Views/Layout";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout></Layout>
      </Router>
    </div>
  );
}

export default App;
