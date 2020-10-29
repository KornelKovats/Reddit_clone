import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login/Login.js";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Router exact path="/login" component={Login} />
    </div>
  );
}

export default App;
