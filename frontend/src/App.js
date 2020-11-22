import "./App.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const tokenExists = () => {
    const token = localStorage.getItem("token");
    if (token) {
      return true;
    }
    return false;
  };
  function loggingOut() {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  }
  function loggingIn() {
    setIsLoggedIn(true);
  }
  
  return (
    <div className="App">
      <Router>
      <Header isLoggedIn={isLoggedIn} loggingOut={loggingOut} ></Header>
        <Switch>
          <Route exact path="/login" component={Login} loggingIn={loggingIn}/>
          <Route exact path="/main" component={Main} />
          <Route exact path="/">
            {tokenExists() ? <Redirect to="/main" />  : <Redirect to="/login" />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
