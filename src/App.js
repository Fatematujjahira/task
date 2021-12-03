import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home.js";
import UserInformation from "./Pages/Home/User-information.js";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/information">
            <UserInformation></UserInformation>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
