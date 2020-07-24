import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Containers/Home";
import Layout from "../Containers/Layout";
import PageNotFound from "./PageNotFound";
import { Login } from "../Containers/Login";
import { Register } from "../Containers/Register";
import "../assets/styles/App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
